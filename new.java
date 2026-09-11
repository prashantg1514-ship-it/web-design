async function sendFormData(name, email, message) {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });

    const data = await response.json();
    console.log('Backend response:', data);
    alert(data.message);
  } catch (error) {
    console.error('Error connecting to backend:', error);
  }
}
