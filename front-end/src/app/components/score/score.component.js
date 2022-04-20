import { parseUrl } from "../../utils/utils";
import { Component } from "../../utils/component";
import template from "./score.component.html";

export class ScoreComponent extends Component {
  constructor() {
    let params = parseUrl();
    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
  }

  /* method ScoreComponent.init */
  init() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;
  }
  getTemplate() {
    return template;
  }
}
// TODO Step 7 implement getTemplate() {}

// TODO Step 6: Move this method to utils.js

// put component in global scope, to be runnable right from the HTML.
