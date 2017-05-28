class Character {
    constructor(state){
        window.console.log('creating character...');

        this.state = state;
    }

    init(location_store){
        this.location_store = location_store;

        if(!this.state.name){
            this.state.name = prompt("what is your name?");
        }

        return this;
    }

    talkTo(person){
        person.converse(this);

        return this;
    }

    getName(){
        return this.state.name;
    }

    getLocation(){
        return this.location_store.getLocation(this.state.location);
    }

    goTo(location_key){
        this.state.location = location_key;

        return this;
    }
}

export default Character;
