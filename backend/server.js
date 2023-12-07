const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({ path: '../.env' });
const twilio = require('twilio');

const app = express();

const port = process.env.PORT || 3001;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Twilio credentials - replace with your actual Twilio credentials
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID ;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_ACCOUNT_NUMBER; // Your Twilio WhatsApp number

// Twilio client
const twilioClient = twilio(twilioAccountSid, twilioAuthToken);

app.post("/enviar_formulario", (req, res) => {
    console.log(twilioPhoneNumber)
    const whatsappMessage = `Hola! 
    Te informamos que ${req.body.nombre} ha solicitado un servicio, estos son los datos necesarios
    Nombre: ${req.body.nombre}
    Celular: ${req.body.celular}
    Correo: ${req.body.correo}
    
    `;
    console.log(req.body);

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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
