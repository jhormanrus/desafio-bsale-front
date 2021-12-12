import PageItem from "./page-item.js"

export default function Products(selector) {
  this.selector = selector
  this.element = document.querySelector(selector)
}

Products.prototype.productsData = []
Products.prototype.records_per_page = 8

Products.prototype.generate = async function(page = 1) {
  const data = []

  //* generate list of products
  for (let i = (page - 1) * this.records_per_page; i < (page * this.records_per_page); i++) {
    if (this.productsData[i]) data.push(this.productsData[i])
  }
  const content = data.map(product => {
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
  this.element.innerHTML = content.length !== 0? content.join('') : '<div class="alert alert-warning" role="alert">Productos no encontrados</div>'

  //* generate pagination
  const pagination = [...Array(this.numPages()).keys()].map(number => {
    return new PageItem('#pagination-container', number + 1, page)
  })
  document.querySelector('#pagination-container').innerHTML = pagination.length > 1? pagination.join('') : ''
  if (pagination.length > 1) {
    pagination.forEach(page => {
      page.onClick(this.productsData)
    })
  }
}

Products.prototype.numPages = function() {
  return Math.ceil(this.productsData.length / this.records_per_page)
}