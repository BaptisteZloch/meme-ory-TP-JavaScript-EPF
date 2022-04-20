import { Component } from "../../utils/component";
import template from "./welcome.component.html";

export class WelcomeComponent extends Component {

  constructor(){
    super("welcome");
  }
  /* method WelcomeComponent.init */
  init() {
    const form = document.querySelector("form.form-signin");
    form.addEventListener(
      "submit",
      (event) => {
        // TODO Step 3.2: use arrow function
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
          form.classList.add("was-validated");
        } else {
          var name = event.srcElement.querySelector("#nickname").value;
          var size = parseInt(event.srcElement.querySelector("#size").value);

          _startGame(name, size);
        }
      },
      false
    );
    return this;
  }

  getTemplate() { return template; }
}

// TODO Step 7 implement

function _startGame(name, size) {
  window.location.hash = `game?name=${name}=name&size=${size}`;
}

// put component in global scope, to be runnable right from the HTML.
