const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({ path: '../.env' });
const twilio = require('twilio');
const cors = require('cors'); // Import the cors middleware


const app = express();

const port = process.env.PORT || 3001;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://127.0.0.1:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));

// Twilio credentials - replace with your actual Twilio credentials
const twilioAccountSid = process.env.TWILIO_ACCOUNT_ID  ;
const twilioAuthToken = process.env.TWILIO_TOKEN_ID;
const twilioPhoneNumber = process.env.TWILIO_NUMBER_ID; // Your Twilio WhatsApp number

// Twilio client
const twilioClient = new twilio(twilioAccountSid, twilioAuthToken);

app.get("/hola", () =>{
    console.log("hola")
})

app.post("/enviar_formulario", (req, res) => {
    console.log(twilioPhoneNumber)
    const whatsappMessage = `Hola! 
    Te informamos que ${req.body.nombre} ha solicitado un servicio, estos son los datos necesarios
    Nombre: ${req.body.nombre}
    Celular: ${req.body.celular}
    Correo: ${req.body.correo}
    Direccion: ${req.body.direccion}
    Mensaje: ${req.body.servicio}`;
    console.log(`El nombre es ${req.body.nombre}`);


    twilioClient.messages.create({
        from: twilioPhoneNumber,
        body: whatsappMessage,
        to: 'whatsapp:+573173737496', // Replace with the actual WhatsApp number
    })
    // WhatsApp sending

    // Now you should be able to access the form data
    

    .then(message => {
        console.log(`WhatsApp message sent: ${message.sid}`);
        res.redirect('/');
    })
    .catch(error => {
        console.error('Error sending WhatsApp message:', error);
        res.status(500).send('Internal Server Error');
    }); 
  }
);

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on port ${port}`);
});
