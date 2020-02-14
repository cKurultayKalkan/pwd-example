const container = document.querySelector(".container")
const coffees = [
    {name: "Perspiciatis", image: "images/coffee-1.jpg"},
    {name: "Voluptatem", image: "images/coffee-2.jpg"},
    {name: "Explicabo", image: "images/coffee-1.jpg"},
    {name: "Rchitecto", image: "images/coffee-2.jpg"},
    {name: " Beatae", image: "images/coffee-1.jpg"},
    {name: " Vitae", image: "images/coffee-2.jpg"},
    {name: "Inventore", image: "images/coffee-1.jpg"},
    {name: "Veritatis", image: "images/coffee-2.jpg"},
    {name: "Accusantium", image: "images/coffee-1.jpg"},
];

const showCoffees = () => {
    let output = ""
    coffees.forEach(
        ({name, image}) =>
            (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees);
