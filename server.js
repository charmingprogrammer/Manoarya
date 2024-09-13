const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // or any other email service provider
  auth: {
    user: 'mpcfanda@gmail.com',
    pass: 'MpCfanda<1>'
  }
});

app.post('/send-email', (req, res) => {
  const { name, contact, address, total, items } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'mpcfanda@gmail.com',
    subject: 'Order Confirmation',
    text: `
      Dear ${name},

      Your order has been placed successfully.

      Address: ${address}
      Contact: ${contact}
      Total: ${total}

      Items:
      ${items.map(item => `- ${item.name} | Quantity: ${item.quantity}`).join('\n')}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ result: 'error', error: error.message });
    }
    res.send({ result: 'success' });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
