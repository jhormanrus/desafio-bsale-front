import Product from "./product.js"
import { ProductService } from "./http-service.js"

export default function Category(selector, categoryData) {
  this.selector = selector
  this.element = document.querySelector(selector)
  this.categoryData = categoryData
  this.toString = function() {
    return `<li class="nav-item"><a href="#" class="nav-link" id="cat-${this.categoryData.id}">${this.categoryData.name}</a></li>`
  }
}

Category.prototype.onClick = function() {
  const element = this.element.querySelector(`#cat-${this.categoryData.id}`)
  element.addEventListener('click', async () => {
    this.element.querySelector('.active')?.classList.remove('active')
    element.classList.add('active')
    const productService = new ProductService()
    const products = new Product('#product-container', await productService.byCategory(this.categoryData.id))
    products.generate()
  })
}