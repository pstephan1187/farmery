import Abigail from "../classes/people/abigail.js";

class People {
    constructor(people){
        this.state = people;

    	this.people = {};
    }

    init(location_store){
        this.people.abigail = new Abigail(this.state.abigail, location_store);

    	this._iterate(function(person){
    		person.init();
    	});
    }

    getPerson(key){
    	return this.people[key];
    }

    getPeopleAt(location_key){
        const people = [];

        this._iterate(function(person){
            if(location_key === person.state.location){
                people.push(person);
            }
        });

        return people;
    }

    _iterate(callback){
    	for(var i in this.people){
    		callback(this.people[i], i);
    	}
    }
}

export default People;
