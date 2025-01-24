const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

app.post('/submit-feedback', async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'feimkth@gmail.com',
            pass: 'your-app-specific-password'
        }
    });

    const mailOptions = {
        from: 'your-website@domain.com',
        to: 'feimkth@gmail.com',
        subject: 'New Website Feedback',
        text: req.body.feedback
    };

    try {
        await transporter.sendMail(mailOptions);
        res.redirect('/thank-you.html');
    } catch (error) {
        res.status(500).send('Error sending feedback');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
}); 