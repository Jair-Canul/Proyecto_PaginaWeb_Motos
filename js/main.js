const bikeData =[
    {
        name: "BMW R1300GS",
        type: "ADVENTURE",
        price: 17,
        image: "images/bike-1.png",
        tag: "Free Cancellation",
    },
    {
        name: "BMW R1300GS",
        type: "ADVENTURE",
        price: 17,
        image: "images/bike-2.png",
        tag: "Free Cancellation",
    },
    {
        name: "BMW R1300GS",
        type: "ADVENTURE",
        price: 17,
        image: "images/bike-3.png",
        tag: "Free Cancellation",
    },
    {
        name: "BMW R1300GS",
        type: "ADVENTURE",
        price: 17,
        image: "images/bike-4.png",
        tag: "Free Cancellation",
    },
    {
        name: "BMW R1300GS",
        type: "ADVENTURE",
        price: 17,
        image: "images/bike-5.png",
        tag: "Free Cancellation",
    },
    {
        name: "BMW R1300GS",
        type: "ADVENTURE",
        price: 17,
        image: "images/bike-6.png",
        tag: "Free Cancellation",
    },
    {
        name: "BMW R1300GS",
        type: "ADVENTURE",
        price: 17,
        image: "images/bike-7.png",
        tag: "Free Cancellation",
    },
    {
        name: "BMW R1300GS",
        type: "ADVENTURE",
        price: 17,
        image: "images/bike-8.png",
        tag: "Free Cancellation",
    },
];
// Function to create bike box element
const createBikeBox = (bike) => `
<div class="bike-box">
                <img src="${bike.image}" alt="" class="box-img" />
                <div class="title-price">
                    <div class="title-data">
                        <h2>${bike.name}</h2>
                        <p>${bike.type}</p>
                    </div>
                    <h3 class="bike-price">$${bike.price}<span>/hour</span></h3>
                </div>
                <a href="#" class="book-btn">Book Bike</a>
                <span class="tag">${bike.tag}</span>
               </div>
`;

const bikeContent = document.querySelector('.bikes-content');
// create bike box and show in bikecontent div
bikeData.forEach((bike) => {
    const bikeBoxHtml = createBikeBox(bike);
    bikeContent.insertAdjacentHTML('beforeend', bikeBoxHtml);
});
// Menu
let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle('move')
}