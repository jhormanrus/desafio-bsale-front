const baseUrl = 'https://desafio-bsale-back.herokuapp.com'

export class CategoryService {
  async all() {
    return await fetch(`${baseUrl}/category/all`)
      .then(res => control(res))
      .then(data => data)
  }
}

export class ProductService {
  async all() {
    return await fetch(`${baseUrl}/product/all`)
      .then(res => control(res))
      .then(data => data)
  }

  async byName(name) {
    return await fetch(`${baseUrl}/product/name/${name}`)
      .then(res => control(res))
      .then(data => data)
  }

  async byCategory(categoryId) {
    return await fetch(`${baseUrl}/product/category/${categoryId}`)
      .then(res => control(res))
      .then(data => data)
  }
}

function control(response) {
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json()
}