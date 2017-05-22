// import state from "./state.js";
import Game from "./classes/game.js";

const state = require("./state.js");

const game = new Game();

game.init();

window.game = game;
window.character = game.character;
window.state = state;
