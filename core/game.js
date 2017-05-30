// import Clock from './clock.js';

import Loop from './loop.js';
import State from './state.js';
import Bus from './event-bus.js';

class Game {
	// create a new game object, initialize the loop,
	// and register a loop callback that bubbles down to all bound classes
    constructor(){
        console.log('creating game...');
        this.loop = new Loop();
        this.state = {};
        this.bindings = {};
        this.bus = new Bus();

        this.loop.onUpdate(function(elapsed){
            this._iterate(function(binding){
                binding.loop(elapsed);
            });
        }.bind(this));
    }

    // load the state (a saved game, perhaps?)
    load(data){
    	this.state = new State(data);
    }

    // register bindings to the game
    register(key, class_name){
		this.bindings[key] = new class_name(this.state, this.bus);
    }

    // start the loop
    start(){
        this._iterate(function(binding){
            binding.init();
        });

    	this.loop.start();
    }

    _iterate(callback){
        for(var i in this.bindings){
            callback(this.bindings[i]);
        }
    }

    // render(){
    // 	this.state.location_store.render();
    // }
}

export default Game;
