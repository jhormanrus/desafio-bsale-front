import Category from "./category.js"
import { CategoryService } from "./http-service.js"

export default function Categories(selector) {
  this.selector = selector
  this.element = document.querySelector(selector)
}

Categories.prototype.generate = async function() {
  const categoryService = new CategoryService()
  const categoriesData = await categoryService.all()
  const content = categoriesData.map(category => {
    return new Category(this.selector, category)
  })
  this.element.innerHTML = content.join('')
  content.forEach(element => {
    element.onClick()
  })
}

Categories.prototype.setNoSelected = function() {
  this.element.querySelector('.active')?.classList.remove('active')
}