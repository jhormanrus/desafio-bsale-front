import Categories from "./assets/scripts/categories.js"
import Products from "./assets/scripts/products.js"
import { ProductService } from "./assets/scripts/http-service.js"

onInit()

async function onInit() {
  const productService = new ProductService()
  const categories = new Categories('#category-container')
  const products = new Products('#product-container')
  categories.generate()
  products.__proto__.productsData = await productService.all()
  products.generate()

  //* onClick #cat-todo button
  document.querySelector('#cat-todo').addEventListener('click', async () => {
    products.__proto__.productsData = await productService.all()
    products.generate()
    categories.setNoSelected()
  })

  //* onClick #search button
  document.querySelector('#prod-search').addEventListener('click', async () => {
    const name = document.querySelector('#prod-name').value
    products.__proto__.productsData = name? await productService.byName(name) : await productService.all()
    products.generate()
    categories.setNoSelected()
  })

  //* onClick #sort-a-z button
  document.querySelector('#sort-a-z').addEventListener('click', async () => {
    const sortAZ = (a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0) // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
    products.__proto__.productsData = products.productsData.sort((a, b) => sortAZ(a, b))
    products.generate()
  })

  //* onClick #sort-z-a button
  document.querySelector('#sort-z-a').addEventListener('click', async () => {
    const sortAZ = (a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0)
    products.__proto__.productsData = products.productsData.sort((a, b) => sortAZ(a, b))
    products.generate()
  })
  
  //* onClick #sort-minor-major button
  document.querySelector('#sort-minor-major').addEventListener('click', async () => {
    const sortAZ = (a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)
    products.__proto__.productsData = products.productsData.sort((a, b) => sortAZ(a, b))
    products.generate()
  })

  //* onClick #sort-major-minor button
  document.querySelector('#sort-major-minor').addEventListener('click', async () => {
    const sortAZ = (a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0)
    products.__proto__.productsData = products.productsData.sort((a, b) => sortAZ(a, b))
    products.generate()
  })
}