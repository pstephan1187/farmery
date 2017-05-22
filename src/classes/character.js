export default class Character {
    constructor(){
        window.console.log('creating character...');

        this.character = (require("../state.js")).character;
    }

    init(){
        if(!this.character.name){
            this.character.name = prompt("what is your name?");
        }
    }

    talkTo(person){
        person.converse(this);
    }

    getName(){
        return this.character.name;
    }
}
