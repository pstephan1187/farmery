import Game from "./game.js";
import State from './state.js';
import data from "../state.json";

const state = new State(data);
const game = new Game(state);

game.init();
game.render();



window.game = game;
window.character = game.character;
window.state = game.state;
