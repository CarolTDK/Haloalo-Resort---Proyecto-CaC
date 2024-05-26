let formRegistro = document.querySelector("#formRegistro");

// validar nombre
let validarDatos = (event) => {
  event.preventDefault();

  let validacion = true;

  let inputName = document.querySelector("#fname");

  let inputLastName = document.querySelector("#lname");

  let inputEmail = document.querySelector("#email");

  let inputMoreInfo = document.querySelector("#info");

  let inputCheckbox = document.querySelector("#terms");

  if (inputName.value === "") {
    let divError = document.querySelector("#error");
    divError.textContent = "Complete all the fields";

    inputName.classList.add("error");

    validacion = false;
  }

  if (inputLastName.value === "") {
    let divError = document.querySelector("#error");
    divError.textContent = "Complete all the fields";

    inputLastName.classList.add("error");

    validacion = false;
  }

  if (inputEmail.value === "") {
    let divError = document.querySelector("#error");
    divError.textContent = "Complete all the fields";

    inputEmail.classList.add("error");

    validacion = false;
  }
  if (info.value === "" || info.value === "no-info") {
    let divError = document.querySelector("#error");
    divError.textContent = "Complete all the fields";

    inputMoreInfo.classList.add("error");

    validacion = false;
  }

  if (!inputCheckbox.checked) {
    let divError = document.querySelector("#error");
    divError.textContent = "Complete all the fields";

    inputCheckbox.classList.add("error");

    validacion = false;
  }

  if (validacion) {
    formRegistro.submit();
  }
};

formRegistro.addEventListener("submit", validarDatos);

function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}
