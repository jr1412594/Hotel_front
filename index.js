const baseURL = "http://localhost:7000"
const propertyURL = `${baseURL}/properties`
const guestURL = `${baseURL}/guests`
const reservationURL = `${baseURL}/reservations`

const propertyContainer = document.querySelector('.property-container')

fetch(propertyURL)
.then(response => response.json())
.then(renderProperties)

function renderProperties(properties){
    properties.forEach(displayProperties)
}

function displayProperties(property){
    console.log(property)
    const propertyCard = document.createElement('div')

    const propertyName = document.createElement('h2')
    propertyName.textContent = property.name

    const propertyImage = document.createElement('img')
    propertyImage.src = property.image

    const propertyPrice = document.createElement('h3')
    propertyPrice.textContent = property.price

    propertyCard.append(propertyName, propertyImage, propertyPrice)

    propertyContainer.appendChild(propertyCard)
}