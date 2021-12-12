import Products from "./products.js"

export default function PageItem(selector, number, currentPage) {
  this.selector = selector
  this.element = document.querySelector(selector)
  this.number = number
  this.toString = function() {
    return `<li class="page-item ${currentPage === number? 'active' : null}" id="page-${number}"><button class="page-link">${number}</button></li>`
  }
}

PageItem.prototype.onClick = function(productsData) {
  const element = this.element.querySelector(`#page-${this.number}`)
  element.addEventListener('click', async () => {
    const products = new Products('#product-container')
    products.__proto__.productsData = productsData
    products.generate(this.number)
  })
}