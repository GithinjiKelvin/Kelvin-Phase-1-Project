


for (let i of apartments.data){
    // create card to display houses
    // card is initially hidden
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    // image container
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // container div 
    let container = document.createElement("div");
    container.classList.add("container")

    // house name & category
    let name = document.createElement("h5");
    name.classList.add("house-name");
    name.innerText = `${i.name.toUpperCase()} 
                        ${i.category.toUpperCase()}`;
    container.appendChild(name);


    // location
    let location = document.createElement("h5");
    location.classList.add("location");
    location.innerText = i.location.toUpperCase();
    container.appendChild(location);

    let price = document.createElement("h6");
    price.innerText = "Ksh: " +i.price;
    container.appendChild(price)

    let book = document.createElement("button")
    book.classList.add("btn");
    book.innerText = "Book The Space";
    container.appendChild(book);

    card.appendChild(container);
    document.getElementById("houses").appendChild(card)
}

// filtering 
function filterHouses(value){
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        if (value.toUpperCase() === button.innerText.toUpperCase()){
            button.classList.add("active");
        }else{
            button.classList.remove("active");
        }
    });

    // select all cards
    let elements = document.querySelectorAll(".card");

    elements.forEach((element)=> {
        if(value === "all"){
            element.classList.remove("hide")
        }else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }else{
                element.classList.add("hide");
            }
        }
    })
    
}

// search bar
document.getElementById("search").addEventListener("click", ()=>{
    let searchInput = document.getElementById("search-input").value;

    let elements = document.querySelectorAll(".location");
    let cards = document.querySelectorAll(".card");
    // console.log(searchInput);
    elements.forEach((element, index) => {
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }else{
            cards[index].classList.add("hide");
        }
    })
});

// initially display all the houses
window.onload= () => {
    filterHouses('all');
};


function changeBooked(event){
    event.target.innerText = 'Booked'
    event.target.parentNode.parentNode.remove()
    alert(`You have booked a space`)
}

function bookSpace(){
    let buttons = document.getElementsByClassName("btn");
    for(let button of buttons){
        button.addEventListener('click', changeBooked)
    }
    
}
bookSpace()