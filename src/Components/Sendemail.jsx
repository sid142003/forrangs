import React, { useState } from 'react';
import axios from 'axios';

const SendEmail = () => {
  const [emailData, setEmailData] = useState({
    to: '202151155@iiitvadodara.ac.in',
    subject: 'Test Email',
    text: 'This is a test email from React and Mailjet!',
  });

  const sendEmail = async () => {
    try {
      const response = await axios.post(
        'https://api.mailjet.com/v3.1/send',
        {
          Messages: [
            {
              From: {
                Email: 'siddhant.rbl2016@gmail.com',
                Name: 'Sender Name',
              },
              To: [
                {
                  Email: emailData.to,
                },
              ],
              Subject: emailData.subject,
              TextPart: emailData.text,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          auth: {
            username: '47f304bda955ac2a3b77f0b45f152754',
            password: '19cc982bbe624a0bc8cdce2a959f544c',
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <h1>Send Email</h1>
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
};

export default SendEmail;
