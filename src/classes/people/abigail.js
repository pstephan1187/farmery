import Person from "../person.js";
const Bus = require("../../event-bus.js");

export default class Abigail extends Person{
    defineMovements(){
        Bus.$on('time', function(time){
            if(time.state.hour === 12 && time.state.minute === 2){
                this.goTo('market');
            }
        }.bind(this));
    }

    converse(character){
        if(!this.state.has_met){
            console.log('Hello! What is your name?');
            console.log(character.getName() + '? That\'s a nice name. I am ' + this.state.name + '. It\'s a pleasure to meet you!');

            this.state.has_met = true;
            this.state.relationship++;

            console.log(this);
            return;
        }

        if(this.state.relationship < 10){
            console.log('Hello, ' + character.getName() + '.');

            this.state.relationship++;

            console.log(this);
            return;
        }

        if(this.state.relationship >= 10){
            console.log('Hi, ' + character.getName() + '! How are you doing?');

            this.state.relationship++;

            console.log(this);
            return;
        }
    }
}
