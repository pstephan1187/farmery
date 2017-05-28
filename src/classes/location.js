export default class Location {
    constructor(state, people_store){
        window.console.log('creating location: ' + state.name);

        this.state = state;
        this.people_store = people_store;
    }

    getName(){
        return this.state.name;
    }

    getPeople(){
        return this.people_store.getPeopleAt(this.state.id);
    }
}
