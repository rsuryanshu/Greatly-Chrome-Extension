//Change Background
function changeBackground() {
    var term = ['natures', 'nature', 'island', 'sunset', 'mountain', 'mountains', 'gradients', 'gradient', 'city', 'islands', 'snow', 'snow-mountain', 'landscape', 'color-gradient', 'wallpaper', 'wallpaper-desktop', 'hd-wallpaper'];
    var termIndex = Math.floor(Math.random() * term.length);
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1920x1080/?" + term[termIndex] + "')";

}

document.getElementById('reloadBack').addEventListener("click", changeBackground);


document.getElementById('greetingText').style.display = "none";
document.getElementById('InputUserName').style.display = "none";
document.getElementById('storeUserNameButton').style.display = "none";

document.getElementById('storeUserNameButton').addEventListener("click", storeUserName);

// function to store user name
function storeUserName() {
    var userName = document.getElementById('InputUserName').value;
    if (!(localStorage.getItem("UserName"))) {
        localStorage.setItem("UserName", userName);
        document.getElementById('InputUserName').style.display = "none";
        document.getElementById('storeUserNameButton').style.display = "none";
        displayGreeting();
    } else {
        localStorage.setItem("UserName", userName);
        document.getElementById('InputUserName').style.display = "none";
        document.getElementById('storeUserNameButton').style.display = "none";
        displayGreeting();
    }

}


// function to showTime
function showTime() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('timeText').innerText = hours + ":" + minutes;

}

// function to display greetings
function displayGreeting() {
    var d = new Date();
    var greeting;
    var hours = d.getHours();
    if (hours >= 6 && hours < 12) {
        greeting = 'Good Morning';
    } else if (hours >= 12 && hours < 17) {
        greeting = 'Good Afternoon';
    } else if (hours >= 17 && hours < 24) {
        greeting = 'Good Evening';
    } else {
        greeting = 'Good Night';
    }

    const userData = localStorage.getItem("UserName");
    if (!userData) {
        document.getElementById('InputUserName').style.display = '';
        document.getElementById('storeUserNameButton').style.display = '';
    } else {
        document.getElementById('greetingText').innerText = greeting + ", " + localStorage.getItem("UserName") + ".";
        document.getElementById('greetingText').style.display = '';
    }

}



//Change UserName
document.getElementById('greetingText').addEventListener('click', changeUserName);

function changeUserName() {
    document.getElementById('greetingText').style.display = "none";
    document.getElementById('InputUserName').style.display = '';
    document.getElementById('storeUserNameButton').style.display = '';

}


//Random Quote Generate
const url = "https://type.fit/api/quotes";

function generateRandomQuote() {
    fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function(data) {
            let index = Math.floor(Math.random() * data.length);
            let quote = data[index].text;
            let author = data[index].author;

            if (!author) {
                author = "Anonymous";
            }

            document.getElementById("quote").innerHTML = quote;
            document.getElementById("author").innerHTML = author;
        })
        .catch(function(err) {
            console.log(err);
        })
}

document.getElementById('like').addEventListener("click", sendEmail);

function sendEmail() {
    window.open("mailto:developerssahani@gmail.com", "_blank");
}

if (navigator.onLine) {
    //Connected to Internet
} else {
    var x = document.getElementById("snackbar");
    x.className = "show";
    x.addEventListener("click", reloadPage);

    function reloadPage() {
        window.location.reload();
    }
}

setInterval(showTime, 1000);
setInterval(displayGreeting, 1000);
changeBackground();
showTime();
displayGreeting();
generateRandomQuote();