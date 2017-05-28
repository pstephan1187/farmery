import Person from "../person.js";
import clock from "../../clock.js";
import bus from "../../event-bus.js";

export default class Abigail extends Person{
    defineMovements(){
        bus.$on('time.tick', function(time){
            if(time.state.hour === 12 && time.state.minute === 2){
                this.goTo('market');
            }
        }.bind(this));

        bus.$on('time.tick', function(time){
            if(time.state.hour === 16 && time.state.minute === 35){
                this.goTo('farm');
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
