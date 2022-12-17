const loadList = (result) => {
    document.getElementById('list').innerHTML = result.map(product => `
        <div>
            <p>Nome: ${product.name} </p>
            <p>SKU: ${product.sku} </p>
            <p>Price: ${product.sku} </p>
        </div>
    `);
}

fetch('/api/products')
    .then(response => response.json())
    .then(loadList)



