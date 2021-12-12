export class CategoryService {

  baseUrl = 'https://desafio-bsale-back.herokuapp.com'

  async categoryAll() {
    return await fetch(`${this.baseUrl}/category/all`).then(response => {
      console.log(response);
      return response.json()
    }).then(data => data)
  }
}