const bikeData =[   // Array de objetos que contiene la información de las motocicletas
    {
        name: "CRF 1100L",
        type: "AVENTURA",
        price: 350.00,
        image: "images/bike-1.png",
        tag: "Cancelación gratuita",
    },
    {
        name: "BMW R1300GS",
        type: "AVENTURA",
        price: 350.00,
        image: "images/bike-2.png",
        tag: "Cancelación gratuita",
    },
    {
        name: "HONDA CB125E",
        type: "AVENTURA",
        price: 350.00,
        image: "images/bike-3.png",
        tag: "Cancelación gratuita",
    },
    {
        name: "DUCATI C-V2X",
        type: "AVENTURA",
        price: 350.00,
        image: "images/bike-4.png",
        tag: "Cancelación gratuita",
    },
    {
        name: "HONDA SCOOPY",
        type: "AVENTURA",
        price: 350.00,
        image: "images/bike-5.png",
        tag: "Cancelación gratuita",
    },
    {
        name: "BMW R1200GS",
        type: "AVENTURA",
        price: 350.00,
        image: "images/bike-6.png",
        tag: "Cancelación gratuita",
    },
    {
        name: "YAMAHA XMAX125",
        type: "AVENTURA",
        price: 350.00,
        image: "images/bike-7.png",
        tag: "Cancelación gratuita",
    },
    {
        name: "ITALIKA DM250",
        type: "AVENTURA",
        price: 350.00,
        image: "images/bike-8.png",
        tag: "Cancelación gratuita",
    },
];
// Function to create bike box element  // Función para crear el elemento HTML de cada motocicleta
const createBikeBox = (bike) => `
<div class="bike-box">
          <img src="${bike.image}" alt="" class="box-img" />
          <div class="title-price">
            <div class="title-data">
               <h2>${bike.name}</h2>
                <p>${bike.type}</p>
            </div>
            <h3 class="bike-price">$${bike.price}<span>/hora</span></h3>
          </div>
          <a href="#" class="book-btn">Reservar Motocicleta</a>
          <span class="tag">${bike.tag}</span>
        </div>
`;
// Seleccionamos el contenedor donde se mostrarán las motocicletas
const bikeContent = document.querySelector('.bikes-content');
// create bike box and show in bikecontent div // Iteramos sobre el array de motocicletas y agregamos cada una al DOM
bikeData.forEach((bike) => {
    const bikeBoxHtml = createBikeBox(bike);
    bikeContent.insertAdjacentHTML('beforeend', bikeBoxHtml);
});
// Swiper               // Inicialización del carrusel Swiper
var swiper = new Swiper(".destination-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,      // Intervalo de tiempo para el cambio automático de diapositivas
      disableOnInteraction: false,  // Permite la interacción sin detener el autoplay
    },
    pagination: {
      el: ".swiper-pagination", // Selector del elemento de paginación
      dynamicBullets: true,     // Habilita balas dinámicas en la paginación
      clickable: true,          // Permite hacer clic en la paginación para navegar
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});
// Menu         // Menú desplegable para la navegación
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
// Agrega evento de clic al icono del menú para abrir/cerrar la barra de navegación
menu.onclick = () => {
    navbar.classList.toggle("open-menu");   // Alterna la clase para mostrar u ocultar el menú
    menu.classList.toggle('move')   // Agrega una animación al icono del menú
}