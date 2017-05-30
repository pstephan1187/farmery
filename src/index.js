import Game from "../core/game.js";
import state from "../state.json";
import Clock from "./clock.js";
// import Loop from "../core/loop.js";
// import State from './state.js';
// import data from "../state.json";

// const state = new State(data);
const game = new Game();

game.load(state);
game.register('clock', Clock);
game.start();

// loop.start();

// game.init();
// game.render();



window.game = game;
// window.character = game.character;
// window.state = game.state;
