// import Clock from './clock.js';

import Loop from './loop.js';
import State from './state.js';

class Game {
	// create a new game object, initialize the loop,
	// and register a loop callback that bubbles down to all bound classes
    constructor(){
        console.log('creating game...');
        this.loop = new Loop();
        this.state = {};
        this.bindings = {};

        this.loop.onUpdate(function(elapsed){
        	for(var i in this.bindings){
        		const binding = this.bindings[i];
        		binding.loop(elapsed);
        	}
        }.bind(this));
    }

    // load the state (a saved game, perhaps?)
    load(data){
    	this.state = new State(data);
    }

    // register bindings to the game
    register(key, class_name){
		this.bindings[key] = new class_name(this.state);
    }

    // start the loop
    start(){
    	this.loop.start();
    //     console.log('initializing game: ', this.state);

    //     this.state.init();
    }

    // render(){
    // 	this.state.location_store.render();
    // }
}

export default Game;
