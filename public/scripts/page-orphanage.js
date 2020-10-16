const options = {
    dragging:false,
    touchZoon:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}

//get values from html
const lat = document.querySelector('span[datalat]').dataset.lat
const lng = document.querySelector('span[datalng]').dataset.lng

//create map
const map = L.map('mapid', options).setView([lat,lng], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]
})


//create and add marker
L
.marker([lat, lng], {icon})
.addTo(map)

/*image gallery*/

function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    //atualizar o container de imagem
    imageContainer.src = image.src
    //add a classe .active para esse botao
    button.classList.add("active")
}