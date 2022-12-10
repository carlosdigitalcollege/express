const form = document.getElementById('login-form')

console.log(form)

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(event.target);
  const formDataJSON = Object.fromEntries(formData);

  fetch('/api/auth', {
    method: 'POST',
    body: JSON.stringify(formDataJSON),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem('token', data.token)
        window.location.href = '/'
      }
    })
})