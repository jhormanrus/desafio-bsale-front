import Categories from "./assets/scripts/categories.js"
import Product from "./assets/scripts/product.js"
import { ProductService } from "./assets/scripts/http-service.js"


onInit()

async function onInit() {
  const productService = new ProductService()
  const categories = new Categories('#category-container')
  const product = new Product('#product-container', await productService.all())
  categories.generate()
  product.generate()

  //* onClick #cat-todo button
  document.querySelector('#cat-todo').addEventListener('click', async () => {
    const products = new Product('#product-container', await productService.all())
    products.generate()
    categories.setNoSelected()
  })

  //* onClick #search button
  document.querySelector('#prod-search').addEventListener('click', async () => {
    const name = document.querySelector('#prod-name').value
    const products = new Product('#product-container', await productService.byName(name))
    products.generate()
    categories.setNoSelected()
  })
}