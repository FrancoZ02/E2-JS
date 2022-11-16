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

 let pizza = JSON.parse(localStorage.getItem("pizza")) || [];

 const saveLocalStorage = (pizzas) => {
    localStorage.setItem("pizza", JSON.stringify(pizzas))
 }

const resultSection = document.getElementById("result-section")
const form = document.getElementById("form")
const input = document.querySelector(".form-input")

const searchPizza = (value) => pizzas.find((pizza) => pizza.id === value)

const showEmptyError = () => {
    resultSection.innerHTML = `
      <div class="result-error">
      <h2 class="text-error">¡Hola! Necesitas ingresar un número para poder buscar tu pizza.</h2>
      </div>`
}

const renderResult = (pizza) => {
    if (!pizza) {
      resultSection.innerHTML = `
      <div class="pizza-section">
      <h2 class="text-error"> ¡No pudimos encontrar tu pizza! :(</h2>
      <p class="text-error">¡Probá con otro número del 1 al 6!.</p>
      </div>`
    } else {
      resultSection.innerHTML = `
      <div class="pizza-section">
      <img class="pizza-img" src="${ pizza.image}"/>
      <h2 class="pizza-title">${pizza.nombre.toUpperCase()}</h2>
      <p class="pizza-description">Ingredientes: ${pizza.ingredientes.join(", ")}.</p>
      <h3 class="pizza-price"> Precio: $${pizza.precio} </h3>
      <p class="pizza-p">Busca otro número de pizza para ver si la tenemos.</p>
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
    form.reset();
}

const init = () => {
form.addEventListener("submit", submitSearch);
}

pizza = [renderResult];
saveLocalStorage(pizza);

init()


