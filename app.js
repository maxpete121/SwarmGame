const locations = [
    '🏤', '🏥', '🏭', '🏢'
]

const people = [{
        name: 'Jimbo',
        picture: '🤵',
        location: '🏤'
    },
    {
        name: 'Sammy',
        picture: '🙆‍♀️',
        location: '🏤'
    },
    {
        name: 'Michael',
        picture: '👷',
        location: '🏤'
    },
    {
        name: 'Robert',
        picture: '👷',
        location: '🏥'
    },
    {
        name: 'Terry',
        picture: '🤴',
        location: '🏥',
    },
    {
        name: 'Bill',
        picture: '🕵️',
        location: '🏥',
    },
    {
        name: 'Marie',
        picture: '👩‍🍳',
        location: '🏭',
    },
    {
        name: 'Mykeal',
        picture: '💂',
        location: '🏭',
    },
    {
        name: 'Phil',
        picture: '🧜‍♂️',
        location: '🏭',
    },
    {
        name: 'Wilson',
        picture: '🏐',
        location: '🏢',
    },
    {
        name: 'Wendy',
        picture: '👩‍⚕️',
        location: '🏢',
    },
    {
        name: 'Jeremy',
        picture: '🦹',
        location: '🏢',
    }
]

let gameCounter = 0

const bats = [{
    picture: '🦇',
    location: '',
}]

function drawPeople() {
    locations.forEach(location => {
        console.log(location)
        let filterPeople = people.filter(peoples => peoples.location == location)
        console.log(filterPeople)
        let locationElm = document.getElementById(location)
        let peoplePicture = filterPeople.map(peoples => peoples.picture)
        
        locationElm.innerText = peoplePicture.join(' ')
    })
}


function murder(currentSite) {
        let peopleInRoom = people.filter(peoples => peoples.location == currentSite)
        console.log(peopleInRoom)
        peopleInRoom.forEach(person => {
            person.picture =  '🦇'
            console.log(person)
        })
        gameCounter++
drawPeople()
winGame() 
}

function winGame() {
    if(gameCounter == 4) {
        alert("Game has ended")
        
    }
}


