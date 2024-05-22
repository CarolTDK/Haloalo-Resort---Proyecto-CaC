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
    divError.textContent = "Ningún campo debe quedar vacío";

    inputName.classList.add("error");

    validacion = false;
  }

  if (inputLastName.value === "") {
    let divError = document.querySelector("#error");
    divError.textContent = "Ningún campo debe quedar vacío";

    inputLastName.classList.add("error");

    validacion = false;
  }

  if (inputEmail.value === "") {
    let divError = document.querySelector("#error");
    divError.textContent = "Ningún campo debe quedar vacío";

    inputEmail.classList.add("error");

    validacion = false;
  }
  if (info.value === "" || info.value === "no-info") {
    let divError = document.querySelector("#error");
    divError.textContent = "Ningún campo debe quedar vacío";

    inputMoreInfo.classList.add("error");

    validacion = false;
  }

  if (!inputCheckbox.checked) {
    let divError = document.querySelector("#error");
    divError.textContent = "Ningún campo debe quedar vacío";

    inputCheckbox.classList.add("error");

    validacion = false;
  }

  if (validacion) {
    formRegistro.submit();
  }
};

formRegistro.addEventListener("submit", validarDatos);
