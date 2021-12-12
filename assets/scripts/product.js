export default function Product(selector) {
  this.selector = selector
  this.element = document.querySelector(selector)
}

Product.prototype.generate = async function() {
  this.products = await fetch('https://desafio-bsale-back.herokuapp.com/product/all').then(response => response.json()).then(data => data)
  const content = this.products.map(product => {
    return `
      <div class="col-3 my-2">
        <div class="card">
          <img src="${product.url_image}" class="card-img-top img-product" onerror="this.src='assets/img/no-img.jpg'" alt="${product.name}">
          <div class="card-body">
            <h6 class="card-title text-nowrap text-truncate m-0">${product.name}</h6>
          </div>
          <div class="card-footer d-flex align-items-center">
            <h5 class="m-0">$${product.price.toFixed(2)}</h5>
            <a href="#" class="btn btn-primary ms-auto" title="Añadir al carrito">
              <i class="bi-cart-plus"></i>
            </a>
          </div>
        </div>
      </div>
    `
  })
  this.element.innerHTML = content.join('')
}