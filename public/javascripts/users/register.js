const userForm = document.getElementById('user-form')

userForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(event.target);
    const formDataJSON = Object.fromEntries(formData);

    fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(formDataJSON),
        headers: {
          'Content-Type': 'application/json',
        },
    })
})