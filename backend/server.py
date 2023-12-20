from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from twilio.rest import Client
import uvicorn

from dotenv import load_dotenv
import os
from fastapi.responses import JSONResponse

load_dotenv()

app = FastAPI()

# Enable CORS
origins = ["http://127.0.0.1:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

# Twilio credentials - replace with your actual Twilio credentials
twilio_account_sid = os.getenv("TWILIO_ACCOUNT_ID")
twilio_auth_token = os.getenv("TWILIO_TOKEN_ID")
twilio_phone_number = os.getenv("TWILIO_NUMBER_ID")


# Twilio client
twilio_client = Client(twilio_account_sid, twilio_auth_token)

class FormData(BaseModel):
    nombre: str
    celular: str
    correo: str
    direccion: str
    servicio: str

@app.get("/hola")
def hola():
    print("hola")
    return "Hola"

@app.post("/enviar_formulario")
def enviar_formulario(data: FormData):
  try:
    whatsapp_message = f"""Hola!
    Te informamos que {data.nombre} ha solicitado un servicio, estos son los datos necesarios
    Nombre: {data.nombre}
    Celular: {data.celular}
    Correo: {data.correo}
    Direccion: {data.direccion}
    Mensaje: {data.servicio}"""

    message = twilio_client.messages.create(
      from_='whatsapp:+14155238886',
      body='Your appointment is coming up on July 21 at 3PM',
      to='whatsapp:+573173737496'
    )

    message = twilio_client.messages.create(
        body=whatsapp_message,
        from_='whatsapp:+14155238886',
        to='whatsapp:+573173737496'
    )
    
    print(f'WhatsApp message sent: {message.sid}')
    return {
        "status": "OK",
        "redirect": "http://127.0.0.1:3000",  # Adjust the URL as needed
    }
  except Exception as e:
    error_response = JSONResponse(content={"status": "Error", "detail": str(e)}, status_code=422)

    return error_response


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=3001)
