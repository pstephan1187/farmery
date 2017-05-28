import ReactDOM from 'react-dom';
import React from 'react';
import Market from "../classes/locations/market.js";
import Farm from "../classes/locations/farm.js";

class LocationStore {
    constructor(){
    	console.log('constructing location store');

    	this.locations = {};
    }

    init(people_store){
    	this.locations.market = new Market({id: 'market', name: 'Market'}, people_store);
    	this.locations.farm = new Farm({id:'farm', name: 'Farm'}, people_store);
    }

    render(){
        const keys = Object.keys(this.locations);

        const location_jsx = keys.map(function(key){
            const location = this.locations[key];
            const people_jsx = location.getPeople().map(function(person){
                return <li key={ person.getName() }>{ person.getName() }</li>;
            });

            return <div key={key}>
                { location.getName() }
                <ul>{ people_jsx }</ul>
            </div>;
        }.bind(this));

        ReactDOM.render(
            <div>
                <div className="header">Locations</div>
                <div>{ location_jsx }</div>
            </div>,
            document.getElementById('locations')
        );
    }

    getLocation(key){
        return this.locations[key];
    }
}

export default LocationStore;
