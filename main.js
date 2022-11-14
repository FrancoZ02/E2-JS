const pizzas = [
    {
        id: 1,
        nombre: "Muzzarella",
        precio: 500,
        ingredientes: [
            "aceituna",
            "muzzarella",
        ],
        image: "https://betos.com.ar/wp-content/uploads/2019/08/pizza-muzarella.png"
    },
    {
        id: 2,
        nombre: "Mediterranea",
        precio: 1350,
        ingredientes: [
            "aceitunas verdes",
            "aceitunas negras",
            "anchoas",
            "muzzarela",
            "tomate"
        ],
        image: "https://www.muchomasquepizza.com/alicante/wp-content/uploads/images/products/products-mediterranea500x500.png"
    },
    {
        id: 3,
        nombre: "Calabresa",
        precio: 1000,
        ingredientes: [
            "Salame",
            "Muzzarela",
            "Aceitunas"
        ],
        image: "https://betos.com.ar/wp-content/uploads/2019/08/pizza-calabresa.png"
    },
    {
        id: 4,
        nombre: "Jamon y huevo",
        precio: 1200,
        ingredientes: [
            "jamon",
            "Mozzarela",
            "huevo",
            "Aceitunas"
        ],
        image: "https://margherita.com.ar/wp-content/uploads/2019/09/pespecialhuevo.png"
    },
    {
        id: 5,
        nombre: "Jamon y Morron",
        precio: 900,
        ingredientes: [
            "Morrón",
            "Muzzarela",
            "Jamón"
        ],
        image: "https://www.pizzafrog.com.ar/wp-content/uploads/2018/04/jamon-morron-frog.png"
    },
    {
        id: 6,
        nombre: "Fugazzetta",
        precio: 1100,
        ingredientes: [
            "Rucula",
            "Muzzarela",
            "Tomate",
            "Apio",
            "Nuez",
            "Roquefort"
        ],
        image: "https://betos.com.ar/wp-content/uploads/2019/08/Fugazzeta.png"
    }
]

/* EJERCICIO 3 */

let pizzaLocalStorage = JSON.parse(localStorage.getItem("pizzas") || [])

const savedLocalStorage = () => localStorage.setItem("pizzas", JSON.stringify(pizzas));

/* EJERCICIO 2 */

const resultSection = document.getElementById("result__section")
const form = document.getElementById("form")
const input = document.querySelector(".form__input")

const searchPizza = (value) => pizzas.find((pizza) => pizza.id === value)

const showEmptyError = () => {
    resultSection.innerHTML = `
      <div class="showerrordiv">
      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
      <h2 class="error__text">¡Hola! Necesitas ingresar un número para poder buscar tu pizza.</h2>
      </div>`
}

const renderResult = (pizza) => {
    if (!pizza) {
      resultSection.innerHTML = `
      <div class="pizza__section">
      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
      <h2 class="error"> ¡No pudimos encontrar tu pizza! :(</h2>
      <p class="error__p">¡Probá con otro número del 1 al 6!.</p>
      </div>`
    } else {
      resultSection.innerHTML = `
      <div class="pizza__section">
      <img class="pizza__img" src="${ pizza.image}"/>
      <h2 class="pizza__title">${pizza.nombre.toUpperCase()}</h2>
      <p class="pizza__description">Ingredientes: ${pizza.ingredientes.join(", ")}.</p>
      <h3 class="pizza__price"> Precio: $${pizza.precio} </h3>
      <p class="pizza__p">Busca otro número de pizza para ver si la tenemos.</p>
      </div>
      `
    }
}

const submitSearch = (e) => {
    e.preventDefault()
    const searchValue = input.value;
    if (!searchValue) {
        showEmptyError(searchValue);
        return;
    }
    const searchedPizza = searchPizza(Number(searchValue))
    renderResult(searchedPizza);
}

const init = () => {
form.addEventListener("submit", submitSearch)
}

init()
