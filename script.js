import Category from "./assets/scripts/category.js"
import Product from "./assets/scripts/product.js"

onInit()

function onInit() {
  const category = new Category('#category-container')
  category.generate()
  const product = new Product('#product-container')
  product.generate()
}