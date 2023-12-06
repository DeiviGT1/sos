const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 3001;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Twilio credentials - replace with your actual Twilio credentials
const twilioAccountSid = 'AC9b47d71ad5fa004ba3d53b775cd26dc4';
const twilioAuthToken = '251de7af03fe544ee2d78fedb318f97d';
const twilioPhoneNumber = 'whatsapp:+14155238886'; // Your Twilio WhatsApp number

// Twilio client
const twilioClient = twilio(twilioAccountSid, twilioAuthToken);

// Express route for handling form submissions
app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
  });


app.post('/enviar_formulario', (req, res) => {
    const { nombre, celular, correo, mensaje } = req.body;

    // WhatsApp sending
    const whatsappMessage = `Hola! 
    Te informamos que ${nombre} ha solicitado un servicio, estos son los datos necesarios
    Nombre: ${nombre}
    Celular: ${celular}
    Correo: ${correo}
    Mensaje: ${mensaje}`;
    twilioClient.messages.create({
        body: whatsappMessage,
        from: twilioPhoneNumber,
        to: 'whatsapp:+573173737496', // Replace with the actual WhatsApp number
    })
    .then(message => {
        console.log(`WhatsApp message sent: ${message.sid}`);
        res.redirect('/');
    })
    .catch(error => {
        console.error('Error sending WhatsApp message:', error);
        res.status(500).send('Internal Server Error');
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
