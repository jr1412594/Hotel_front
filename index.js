const baseURL = "http://localhost:7000"
const propertyURL = `${baseURL}/properties`
const guestURL = `${baseURL}/guests`
const reservationURL = `${baseURL}/reservations`

const propertyContainer = document.querySelector('.property-container')


fetch(propertyURL)
.then(parseJSON)
.then(renderProperties)

function renderProperties(properties){
    properties.forEach(displayProperties)
}

function displayProperties(property){
    const flipCard = document.createElement('div')
    flipCard.className = 'flip-card'


    const flipCardInner = document.createElement('div')
    flipCardInner.className = 'flip-card-inner'

    const flipCardFront = document.createElement('div')
    flipCardFront.className = 'flip-card-front'

    const flipCardBack = document.createElement('div')
    flipCardBack.className = 'flip-card-back'
    const backCardDescription = document.createElement('h3')
    backCardDescription.textContent = property.description 
    const backButton = document.createElement('button')
    backButton.textContent = "Select Dates"
    backButton.className = 'backButton'
    backButton.addEventListener('click', event => {

        console.log(event.target, 'clicked')
    })

    
    
    const propertyName = document.createElement('h2')
    propertyName.textContent = property.name
    
    const propertyImage = document.createElement('img')
    propertyImage.src = property.image
    
    const propertyPrice = document.createElement('h3')
    propertyPrice.textContent = `$ ${property.price}`
    
    flipCardBack.append(backCardDescription, propertyPrice, backButton)
    flipCardFront.append(propertyName, propertyImage)
    flipCardInner.append(flipCardFront, flipCardBack)
    flipCard.append(flipCardInner)

    propertyContainer.append(flipCard)

}

function parseJSON(response) {
    return response.json()
}