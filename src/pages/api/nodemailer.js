import nodemailer from 'nodemailer';
import formidable from 'formidable';
import { withSentry } from '@sentry/nextjs';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mbrobotech22@gmail.com',
    pass: 'huamhddmcvjprtrw',
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

function formidablePromise(req, opts) {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm(opts);

    form.parse(req, (error, fields) => {
      if (error) {
        return reject(error);
      }
      resolve({ fields });
    });
  });
}

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(404).send({ error: 'Coś poszło nie tak.' });
  }

  res.setHeader('Content-Type', 'application/json');

  try {
    console.log(formidablePromise(req, {}));
    const { fields } = await formidablePromise(req, {});
    const { name, email, phone, message } = fields;

    await transporter.sendMail({
      to: 'mateusz@borzestowski.eu',
      from: 'mbrobotech22@gmail.com',
      replyTo: email,
      subject: `Wiadomość ze strony mbrobotech.pl`,
      name,
      phone,
      text: message,
      html: `
      <p><strong>Wiadomość od:</strong> ${name}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Wiadomość:</strong> ${message.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
      `,
    });

    res.status(200).json({});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default withSentry(handler);
