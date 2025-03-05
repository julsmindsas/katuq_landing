import nodemailer from 'nodemailer';
import fetch from 'node-fetch';

// Función simple de validación (mejorable según necesidades)
function isValid(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

export async function post({ request }) {
  const formData = await request.formData();
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');

  // Validación simple
  if (!isValid(firstName) || !isValid(lastName) || !isValid(email) || !isValid(message)) {
    return new Response(JSON.stringify({ success: false, error: 'Datos incompletos o inválidos' }), { status: 400 });
  }

  // Usa variables de entorno para la configuración SMTP
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Ejemplo: 'smtp.tu-proveedor.com'
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true', 
    auth: {
      user: process.env.SMTP_USER,  // Ejemplo: 'tu_usuario@tudominio.com'
      pass: process.env.SMTP_PASS   // Ejemplo: 'tu_contraseña'
    }
  });
  
  // Remitente fijo en lugar de usar el email del usuario 
  const mailOptions = {
    from: process.env.EMAIL_FROM, // Define un email fijo en tus variables de entorno
    to: process.env.EMAIL_TO,     // Tu correo receptor
    subject: `Nuevo mensaje de ${firstName} ${lastName}`,
    text: `Email: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message}`
  };

  // Datos a enviar a la API externa
  const data = {
    firstName,
    lastName,
    email,
    phone,
    message
  };

  try {
    const response = await fetch('https://api.katuq.com/v1/landing/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
