const baseURL = "http://localhost:7000"
const propertyURL = `${baseURL}/properties`
const arrivalURL = `${baseURL}/arrivals`
const reservationURL = `${baseURL}/reservations`
const propertyContainer = document.querySelector('.property-container')
const asideContainer = document.querySelector('aside')
const reservationDates = document.querySelector('.reservation-dates')
const arrivalInfo = document.querySelector('.arrival-info')
const departureInfo = document.querySelector('.departure-info')
const propertyInfo = document.querySelector('.property-info')
const single = document.querySelector('.single')
const buttonPrimary = document.querySelector('#btn-primary')

asideContainer.append(buttonPrimary)

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

    const month = document.createElement('div')
    month.className = 'month'
    
    const liMonth = document.createElement('li')
    liMonth.textContent = 'November'
    month.append(liMonth)

    const weekdays = document.createElement('ul')
    weekdays.className = 'weekdays'
    
    const liSun = document.createElement('li')
    liSun.textContent = 'Su'
    const liMon = document.createElement('li')
    liMon.textContent = 'Mo'
    const liTue = document.createElement('li')
    liTue.textContent = 'Tu'
    const liWed = document.createElement('li')
    liWed.textContent = 'We'
    const liThur = document.createElement('li')
    liThur.textContent = 'Th'
    const liFri = document.createElement('li')
    liFri.textContent = 'Fr'
    const liSat = document.createElement('li')
    liSat.textContent = 'Sa'
    
    weekdays.append(liSun, liMon, liTue, liWed, liThur, liFri, liSat)

    const days = document.createElement('ul')
    days.className = 'days'
    days.addEventListener('click', () => addDate(property, event))
    
    const li1 = document.createElement('li')
    const li1Button = document.createElement('button')
    li1Button.className = 'month-button'
    li1Button.textContent = 1
    li1.append(li1Button)

    const li2 = document.createElement('li')
    const li2Button = document.createElement('button')
    li2Button.className = 'month-button'
    li2Button.textContent = 2
    li2.append(li2Button)
    
    const li3 = document.createElement('li')
    const li3Button = document.createElement('button')
    li3Button.className = 'month-button'
    li3Button.textContent = 3
    li3.append(li3Button)

    const li4 = document.createElement('li')
    const li4Button = document.createElement('button')
    li4Button.className = 'month-button'
    li4Button.textContent = 4
    li4.append(li4Button)

    const li5 = document.createElement('li')
    const li5Button = document.createElement('button')
    li5Button.className = 'month-button'
    li5Button.textContent = 5
    li5.append(li5Button)

    const li6 = document.createElement('li')
    const li6Button = document.createElement('button')
    li6Button.className = 'month-button'
    li6Button.textContent = 6
    li6.append(li6Button)

    const li7 = document.createElement('li')
    const li7Button = document.createElement('button')
    li7Button.className = 'month-button'
    li7Button.textContent = 7
    li7.append(li7Button)

    const li8 = document.createElement('li')
    const li8Button = document.createElement('button')
    li8Button.className = 'month-button'
    li8Button.textContent = 8
    li8.append(li8Button)

    const li9 = document.createElement('li')
    const li9Button = document.createElement('button')
    li9Button.className = 'month-button'
    li9Button.textContent = 9
    li9.append(li9Button)

    const li10 = document.createElement('li')
    const li10Button = document.createElement('button')
    li10Button.className = 'month-button'
    li10Button.textContent = 10
    li10.append(li10Button)

    const li11 = document.createElement('li')
    const li11Button = document.createElement('button')
    li11Button.className = 'month-button'
    li11Button.textContent = 11
    li11.append(li11Button)

    const li12 = document.createElement('li')
    const li12Button = document.createElement('button')
    li12Button.className = 'month-button'
    li12Button.textContent = 12
    li12.append(li12Button)

    const li13 = document.createElement('li')
    const li13Button = document.createElement('button')
    li13Button.className = 'month-button'
    li13Button.className = 'active'
    li13Button.textContent = 13
    li13.append(li13Button)

    const li14 = document.createElement('li')
    const li14Button = document.createElement('button')
    li14Button.className = 'month-button'
    li14Button.textContent = 14
    li14.append(li14Button)

    const li15 = document.createElement('li')
    const li15Button = document.createElement('button')
    li15Button.className = 'month-button'
    li15Button.textContent = 15
    li15.append(li15Button)

    const li16 = document.createElement('li')
    const li16Button = document.createElement('button')
    li16Button.className = 'month-button'
    li16Button.textContent = 16
    li16.append(li16Button)

    const li17 = document.createElement('li')
    const li17Button = document.createElement('button')
    li17Button.className = 'month-button'
    li17Button.textContent = 17
    li17.append(li17Button)

    const li18 = document.createElement('li')
    const li18Button = document.createElement('button')
    li18Button.className = 'month-button'
    li18Button.textContent = 18
    li18.append(li18Button)

    const li19 = document.createElement('li')
    const li19Button = document.createElement('button')
    li19Button.className = 'month-button'
    li19Button.textContent = 19
    li19.append(li19Button)

    const li20 = document.createElement('li')
    const li20Button = document.createElement('button')
    li20Button.className = 'month-button'
    li20Button.textContent = 20
    li20.append(li20Button)

    const li21 = document.createElement('li')
    const li21Button = document.createElement('button')
    li21Button.className = 'month-button'
    li21Button.textContent = 21
    li21.append(li21Button)

    const li22 = document.createElement('li')
    const li22Button = document.createElement('button')
    li22Button.className = 'month-button'
    li22Button.textContent = 22
    li22.append(li22Button)

    const li23 = document.createElement('li')
    const li23Button = document.createElement('button')
    li23Button.className = 'month-button'
    li23Button.textContent = 23
    li23.append(li23Button)

    const li24 = document.createElement('li')
    const li24Button = document.createElement('button')
    li24Button.className = 'month-button'
    li24Button.textContent = 24
    li24.append(li24Button)

    const li25 = document.createElement('li')
    const li25Button = document.createElement('button')
    li25Button.className = 'month-button'
    li25Button.textContent = 25
    li25.append(li25Button)

    const li26 = document.createElement('li')
    const li26Button = document.createElement('button')
    li26Button.className = 'month-button'
    li26Button.textContent = 26
    li26.append(li26Button)

    const li27 = document.createElement('li')
    const li27Button = document.createElement('button')
    li27Button.className = 'month-button'
    li27Button.textContent = 27
    li27.append(li27Button)

    const li28 = document.createElement('li')
    const li28Button = document.createElement('button')
    li28Button.className = 'month-button'
    li28Button.textContent = 28
    li28.append(li28Button)

    const li29 = document.createElement('li')
    const li29Button = document.createElement('button')
    li29Button.className = 'month-button'
    li29Button.textContent = 29
    li29.append(li29Button)

    const li30 = document.createElement('li')
    const li30Button = document.createElement('button')
    li30Button.className = 'month-button'
    li30Button.textContent = 30
    li30.append(li30Button)

    const li31 = document.createElement('li')
    const li32 = document.createElement('li')
    const li33 = document.createElement('li')
    const li34 = document.createElement('li')
    const li35 = document.createElement('li')

    days.append(li1, li2, li3, li4, li5, li6, li7, li8, li9, li10, li11, li12, li13, li14, li15, li16, li17, li18, li19, li20, li21, li22, li23, li24, li25, li26, li27, li28, li29, li30, li31, li32, li33, li34, li35)

    const propertyName = document.createElement('h2')
    propertyName.textContent = property.name
    
    const propertyImage = document.createElement('img')
    propertyImage.src = property.image
    
    const propertyPrice = document.createElement('h3')
    propertyPrice.className = 'prop-price'
    propertyPrice.textContent = `Price per night $${property.price}`
    
    flipCardBack.append(month, weekdays, days, propertyPrice)
    flipCardFront.append(propertyName, propertyImage)
    flipCardInner.append(flipCardFront, flipCardBack)
    flipCard.append(flipCardInner)
    
    propertyContainer.append(flipCard)
}

function addDate(property, event) {
    const checkinDate = document.querySelector('#checkin')
    const propertyStay = document.querySelector('#property-stay')
    const checkoutDate = document.querySelector('#checkout')

        if(checkinDate.value === ""){
            checkinDate.value = "November" + ' ' + event.target.textContent + ' ' + 2020;
        } else {
            checkoutDate.value = "November" + ' ' + event.target.textContent + ' ' + 2020;
            propertyStay.value = property.name
        }
    
    reservationDates.addEventListener('submit', event => {
        event.preventDefault()
        
        const newReservationDates = new FormData(reservationDates)
        
        const checkin = newReservationDates.get('checkin-date')
        const checkout = newReservationDates.get('checkout-date')
        const propertyOutPut = newReservationDates.get('property')

        const newReso = {
            checkin: checkin,
            checkout: checkout,
        }
        const configObject= {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newReso)
        }
        
        fetch(arrivalURL, configObject)
        .then(parseJSON)
        .then(renderReservation)

        function renderReservation(reso){
            const renderArrival = document.createElement('h3')
            renderArrival.textContent = reso.checkin

            const renderDeparture = document.createElement('h3')
            renderDeparture.textContent = reso.checkout

            arrivalInfo.append(renderArrival)
            departureInfo.append(renderDeparture)
            propertyInfo.append(propertyOutPut)

        }

        event.target.reset(reservationDates)
        
    })
}
function parseJSON(response) {
    return response.json()
}