class Product {
    constructor(name, price, year) {
        this.name = name,
        this.price = price,
        this.year = year

    }
}


class UI {
    //Agrega un producto
    addProduct(product) {
       const content =  document.getElementById('content');
       const element = document.createElement('div');
       element.innerHTML = `
            <div class="card card-body mb-3" id="card">
                <div class="row">
                    <div class="col-10">
                        <p>                
                            <strong>Nombre:</strong> ${product.name}
                            <strong>Precio:</strong> ${product.price}
                            <strong>Año:</strong> ${product.year}
                        </p>
                    </div>
                    <div class="col-2 cardBtn">
                        <button class="btn btn-danger text-white btn-sm" id="delete">x</button>
                    </div>
                </div>

            </div>
       `
       content.appendChild(element)
    }
    //Elimina un producto 
    deleteProduct () {

    }
    //muestra mensaje de confirmacion 
    showMessage() {
       const message = document.getElementById('message');
       const element = document.createElement('div');
       element.innerHTML = `
            <div class="alert alert-success mt-2" role="alert">
                Guardado Exitosamente!
            </div>
       `
       message.appendChild(element);
       //elimina el mensaje pasando los 3 seg
       setTimeout(() => {
            element.innerHTML = ' ';
       }, 1000);
    }
}

//Guarda el producto
document.getElementById('saveProduct').addEventListener('click', (e) => {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let year = document.getElementById('year').value;
    console.log(name, price, year);
    e.preventDefault();
    const product = new Product(name, price, year);
    const ui = new UI();
    ui.addProduct(product);
    ui.showMessage();
    deleteProduct();
})

//Elimina un producto
function deleteProduct () {
    document.getElementById('delete').addEventListener('click', () => {
        const content = document.getElementById('content');
    })
}
