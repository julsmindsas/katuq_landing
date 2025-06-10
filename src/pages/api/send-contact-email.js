// Firebase static deployment - simplified API endpoint
// Only sends data to external API, no email functionality

export const prerender = true;

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

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}