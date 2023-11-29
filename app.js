const locations = [
    '🏤', '🏥', '🏭', '🏢'
]

const people = [{
        name: 'Jimbo',
        picture: '🤵',
        location: '🏤',
        hunter: 'true'
    },
    {
        name: 'Sammy',
        picture: '🙆‍♀️',
        location: '🏤',
        hunter: ''
    },
    {
        name: 'Michael',
        picture: '👷',
        location: '🏤',
        hunter: ''
    },
    {
        name: 'Robert',
        picture: '👷',
        location: '🏥',
        hunter: ''
    },
    {
        name: 'Terry',
        picture: '🤴',
        location: '🏥',
        hunter: ''
    },
    {
        name: 'Bill',
        picture: '🕵️',
        location: '🏥',
        hunter: ''
    },
    {
        name: 'Marie',
        picture: '👩‍🍳',
        location: '🏭',
        hunter: ''
    },
    {
        name: 'Mykeal',
        picture: '💂',
        location: '🏭',
        hunter: ''
    },
    {
        name: 'Phil',
        picture: '🧜‍♂️',
        location: '🏭',
        hunter: ''
    },
    {
        name: 'Wilson',
        picture: '🏐',
        location: '🏢',
        hunter: ''
    },
    {
        name: 'Wendy',
        picture: '👩‍⚕️',
        location: '🏢',
        hunter: ''
    },
    {
        name: 'Jeremy',
        picture: '🦹',
        location: '🏢',
        hunter: ''
    }
]

let gameCounter = 6
document.getElementById("timer").innerText = gameCounter

const bats = [{
    picture: '🦇',
    location: '',
}]

function showAttack(){
    document.getElementById("attack").style.display = 'block'
    document.getElementById("attack1").style.display = 'block'
    document.getElementById("attack2").style.display = 'block'
    document.getElementById("attack3").style.display = 'block'
}

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
        gameCounter--
        document.getElementById("timer").innerText = gameCounter
drawPeople()
movePeople()
winGame() 
}

function movePeople() {
    people.forEach(human => {
        if(human.picture != '🦇') {
            let newLocation = locations[Math.floor(Math.random()*locations.length)]
            human.location = newLocation
        }
    })
}

function makeHunter() {

}

function winGame() {
    if(gameCounter == 0) {
        alert("Game has ended")
        location.reload()
        
    }
}


