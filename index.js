
let homePoints = document.getElementById("home-points")

let guestPoints = document.getElementById("guest-points")

let notification = document.getElementById("notification-bar")


// homePoints.innerText = 15
// guestPoints.textContent = 20
// notification.textContent = "New Game Started"

homeAddedPoints= 0
guestAddedPoints= 0

function add1Home(){
    homeAddedPoints += 1
    homePoints.innerText = homeAddedPoints
}
function add2Home(){
    homeAddedPoints += 2
    homePoints.innerText = homeAddedPoints
}
function add3Home(){
    homeAddedPoints += 3
    homePoints.innerText = homeAddedPoints
}

function add1Guest(){
    guestAddedPoints += 1
    guestPoints.innerText = guestAddedPoints
}
function add2Guest(){
    guestAddedPoints += 2
    guestPoints.innerText = guestAddedPoints
}
function add3Guest(){
    guestAddedPoints += 3
    guestPoints.innerText = guestAddedPoints
}

function reset(){
    homeAddedPoints=0
    guestAddedPoints=0
    homePoints.innerText = 0
    guestPoints.textContent = 0
    notification.textContent = "New Game Started"
    console.log("Game Reset")

}

function getLeader(){
    if (guestAddedPoints==homeAddedPoints){
        notification.textContent = "Tie"
        console.log("Tie")
    }
    if (guestAddedPoints>homeAddedPoints){
        notification.textContent = "Leader: Guest"
        console.log("Guest")

    }
    if (guestAddedPoints<homeAddedPoints){
        notification.textContent = "Leader: Home"
        console.log("Home")


    }
}