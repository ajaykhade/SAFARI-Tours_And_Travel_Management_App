import nodemailer from 'nodemailer';

const sendEmail = (tour) => {
  // create a transporter object with your email provider's SMTP settings
  const transporter =  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ajaykhade11@gmail.com',
      pass: '7798992187'
    }
  });

  // set up email message options
  const mailOptions = {
    from: 'ajaykhade11@gmail.com',
    to: 'sawantdigvijay1414@gmail.com',
    subject: 'Tour update notification',
    text: `A change has been made to the ${tour} tour.`
  };

  // send the email using the transporter object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

export default sendEmail;