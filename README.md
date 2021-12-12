# desafio-bsale-front

## Librerías usadas

* UI [Bootstrap 5](https://getbootstrap.com/)
* Icons [Bootstrap Icons](https://icons.getbootstrap.com/)

## Deploy

El despliegue del frontend se hizo en [Vercel](https://vercel.com/)

> Link directo al frontend https://desafio-bsale-front.vercel.app

## Estructura de carpetas

```text
├── assets
│   └── img
│       └── no-img.jpg
├── scripts
│   ├── categories.js   // componente categorías
│   ├── category.js     // └── componente categoría
│   ├── products.js     // componente productos
│   ├── page.item.js    // └── componente paginación
│   └── http.service.js // servicio de peticiones http
└── index.html
```

## Functions

| File | Name | Return | Description |
| - | - | - | - |
| categories.js | Categories.generate() | `void` | Genera la lista de categorías |
| categories.js | Categories.setNoSelected() | `void` | Remueve la clase active de los elementos de categoría |
| category.js | Category.onClick() | `void` | Establece el listener click a los elementos de categoría |
| products.js | Products.generate(`page: number`) | `void` | Genera la lista de productos de la página seleccionada |
| products.js | Products.numPages() | `number` | Retorna la cantidad de páginas según la data para la paginación |
| page-item.js | PageItem.onClick() | `void` | Establece el listener click a la paginación |
| http-service.js | CategoryService.all() | `object[]` | Retorna la lista completa de categorías |
| http-service.js | ProductService.all() | `object[]` | Retorna la lista completa de productos |
| http-service.js | ProductService.byName(`name: string`) | `object[]` | Retorna la lista de productos más cercanos a un nombre |
| http-service.js | ProductService.byCategory(`categoryId: number`) | `object[]` | Retorna la lista de productos según categoría |

## Control de errores

1. Algunos productos tenían el atributo **url_image** como `null`. Se utilizó el operador **??** para establecer una alternativa que no genere error en la consola.
```html
<img src="${product.url_image?? ''}">
```
> Location: /scripts/product.js line:22

2. Algunos productos tambien tenían el atributo **url_image** como un string vacío `""`. Se utilizó la propiedad html **onerror** para establecer una imagen alternativa que no genere error y la vista sea más amigable.
```html
<img onerror="this.src='assets/img/no-img.jpg'">
```
> Location: /scripts/product.js line:22