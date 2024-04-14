
function getAllAPartments(){
    fetch('http://localhost:3000/apartments')
    .then(res => res.json())
    .then(apartments => apartments.forEach(apartment => displayApartment(apartment)))
}


function displayApartment(apartment){
    let card = document.createElement("div");
    // card is hidden initially
    card.className = 'card'
    card.innerHTML = `
    <div class ="image-container">
    <img src = "${apartment.image}">
    
    </div>
    <div>
        <button type="button" class="btn">BOOK THE SPACE</button>
    </div>
    <div class="container">
        <h5 class = "housename">
        ${(apartment.name).toUpperCase()}
        </h5>
        <h6>KSH: ${apartment.price}</h6>
        <h6>Location: ${apartment.location}</h6>
        <h6>category: ${apartment.category}</h6>
    </div>
    `
    document.querySelector('#fetch').appendChild(card)
}

// let btn =document.querySelectorAll(".btn")
// btn.addEventListener("click", bookSpace)

// function bookSpace(){
//     console.log("booked")
// }

// function filterHouses(value){
//     let buttons = document.querySelectorAll(".button-value");
//     buttons.forEach(button => {
//         if (value.toUpperCase() === button.innerText.toUpperCase()){
//             button.classList.add("active");
//         }else{
//             button.classList.remove("active");
//         }
//     });
//     let elements = document.querySelectorAll(".card");

//     elements.forEach((element)=> {
//         if(value === "all"){
//             element.classList.remove("hide")
//         }else{
//             if(element.classList.contains(value)){
//                 element.classList.remove("hide");
//             }else{
//                 element.classList.add("hide");
//             }
//         }
//     })
    
// }

// document.getElementById("search").addEventListener("click", ()=>{
//     let searchInput = document.getElementById("search-input").value;

//     let elements = document.querySelectorAll(".housename");
//     let cards = document.querySelectorAll(".card");
//     // console.log(searchInput);
//     elements.forEach((element, index) => {
//         if(element.innerText.includes(searchInput.toUpperCase())){
//             cards[index].classList.remove("hide");
//         }else{
//             cards[index].classList.add("hide");
//         }
//     })
// });

// initially load all houses
// window.onload = () => {
//     filterHouses('all');
// };


function initialize(){
    getAllAPartments()
}

initialize()


// fetch("http://localhost:3000/apartments")
// .then(res => res.json())
// .then(apartments => console.log(apartments))


// for (let i of apartments){
//     let card = document.createElement("div");

//     card.classList.add("card", "i.category");

//     let imgContainer = document.createElement("div");
//     imgContainer.classList.add("image-container");

//     let image = document.createElement("img");
//     image.setAttribute("src", i.image);
//     imgContainer.appendChild(image);
//     card.appendChild(imgContainer);

//     document.getElementById("houses").appendChild(card)
// }