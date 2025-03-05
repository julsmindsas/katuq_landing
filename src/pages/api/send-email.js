import nodemailer from 'nodemailer';

export async function post({ request }) {
    const data = await request.json();
    const { date, time, name } = data;

    // Configurar el transportador de Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'santygarciamartinez03@gmail.com', // Reemplaza con tu correo electrónico
            pass: 'bajoterra2022' // Reemplaza con tu contraseña de correo electrónico
        }
    });

    // Configurar el contenido del correo electrónico
    const mailOptions = {
        from: 'santygarciamartinez03@gmail.com', // Reemplaza con tu correo electrónico
        to: 'dgarciah@julsmind.com', // Reemplaza con el correo electrónico de destino
        subject: 'Nueva consulta agendada',
        text: `Se ha agendado una nueva consulta con la siguiente información:
        Nombre: ${name}
        Fecha: ${date}
        Hora: ${time}`
    };

    // Enviar el correo electrónico
    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Correo enviado con éxito' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Error al enviar el correo' }), { status: 500 });
    }
}
