const nodemailer = require("nodemailer");
const sendingEmail = async (email, subject, template, ...templateArg) => {
     // Setup nodemailer
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: "robiulhassanrobi33@gmail.com",
            pass: "pegg iyln xikz fhiy", 
          },
        });
    
        // Send email
        const mailOptions = {
          from: '"Chatweb Support" <robiulhassanrobi33@gmail.com>', 
          to: email,
          subject: subject,
          html: template(...templateArg),
        };
    
        const info = await transporter.sendMail(mailOptions);
    
}

module.exports = sendingEmail