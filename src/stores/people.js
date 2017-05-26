import Abigail from "../classes/people/abigail.js";
import state from '../state.js';

class People {
    constructor(){
        this.abigail = new Abigail(state.people.abigail);
    }

    init(){
        this.abigail.init();
    }
}

export default (new People());
