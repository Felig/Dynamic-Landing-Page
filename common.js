const time = document.getElementById("time"),
  greeteng = document.getElementById("greeteng"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `<p class="hour">${hour}</p><span>:</span><p class="min">${addZero(min)}</p><span>:</span><p class="sec">${addZero(sec)}</p><p class="ampm">${amPm}</p>`;

  setTimeout(showTime, 1000);
}

//Add zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//Set Background
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //Morning
    document.body.style.backgroundImage = "url('./img/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    //Evening
    document.body.style.backgroundImage = "url('./img/evening.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}


//Get name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

//Set name
function setName(e) {
  if (e.type === "keypress") {
    if (e.witch == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}


//Get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

//Set focus

function setFocus(e) {
  if (e.type === "keypress") {
    if (e.witch == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}


name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);


//Run
showTime();
setBgGreet();
getName();
getFocus();

