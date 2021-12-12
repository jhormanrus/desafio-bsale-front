import { CategoryService } from "./http-service.js"

export default function Category(selector) {
  this.selector = selector
  this.element = document.querySelector(selector)
}

Category.prototype.generate = async function() {
  const categoryService = new CategoryService()
  const categoriesData = await categoryService.categoryAll()
  const content = categoriesData.map(category => {
    return `<li class="nav-item"><a href="#" class="nav-link">${category.name}</a></li>`
  })
  content.unshift('<li class="nav-item"><a href="#" class="nav-link active" aria-current="page">todos</a></li>')
  this.element.innerHTML = content.join('')
}