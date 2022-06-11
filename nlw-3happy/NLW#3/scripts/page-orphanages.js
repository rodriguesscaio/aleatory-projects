//Tipos de dados
//String ""
//Number 01
// Object {}
// Boolean True or Falsey
// Array 


const map = L.map('mapid').setView([-23.2334584,-45.908704], 16);

//create and titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    IconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create popup overlay
const popup= L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html" class="choose-orphanages"> <img src="./public/images/arrow-white.svg" </a>')

//creat and add marker

L.marker([-23.2334584,-45.908704], {icon} )
.addTo(map)
.bindPopup(popup)