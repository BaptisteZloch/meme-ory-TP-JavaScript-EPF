import { parseUrl } from "../../utils/utils";
import { Component } from "../../utils/component";
import template from "./score.component.html";

const environment ={
  api:{
    host:"http://localhost:8081"
  }
}

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