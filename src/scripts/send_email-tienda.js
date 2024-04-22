const form = document.getElementById('form-tienda');

async function handleSendEmail (event) {
    event.preventDefault();

    const formData = new FormData(this);

    const response = await fetch("https://formspree.io/f/xdoqgybq", {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json"
        }
    });

    if(response.ok) {
        this.reset();
        alert('Mensaje enviado.')
    } else {
        alert('Error al enviar el mensaje.')
    }
}

form.addEventListener('submit', handleSendEmail);
