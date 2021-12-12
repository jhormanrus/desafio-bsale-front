export default function Product(selector, productsData) {
  this.selector = selector
  this.element = document.querySelector(selector)
  this.productsData = productsData
}

Product.prototype.generate = async function() {
  const content = this.productsData.map(product => {
    return `
      <div class="col-6 col-md-3 my-3">
        <div class="card">
          <img src="${product.url_image?? ''}" class="card-img-top img-product mt-3" onerror="this.src='assets/img/no-img.jpg'" alt="${product.name}">
          <div class="card-body">
            <h6 class="card-title text-nowrap text-truncate m-0">${product.name}</h6>
          </div>
          <div class="card-footer d-flex align-items-center">
            <h5 class="m-0">$${product.price.toFixed(2)} ${product.discount? '<span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">' + product.discount + '% dto.</span>' : ''}</h5>
            <a href="#" class="btn btn-primary ms-auto" title="Añadir al carrito">
              <i class="bi-cart-plus"></i>
            </a>
          </div>
        </div>
      </div>
    `
  })
  this.element.innerHTML = content.length !== 0? content.join('') : '<div class="container text-center my-5"><h6>Productos no encontrados</h6></div>'
}