const productForm = document.getElementById('product-form')

productForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(event.target);
    const formDataJSON = Object.fromEntries(formData);

    fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(formDataJSON),
        headers: {
          'Content-Type': 'application/json',
        },
    })
})
