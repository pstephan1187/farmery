import ReactDOM from 'react-dom';
import React from 'react';
import Market from "../classes/locations/market.js";
import Farm from "../classes/locations/farm.js";

class Locations {
    constructor(){
        this.state = {
            locations: {
                market: new Market({name: 'Market'}),
                farm: new Farm({name: 'Farm'})
            }
        };
    }

    getLocation(key){
        return this.state.locations[key];
    }

    init(){
        this.state.locations.market.init();
        this.state.locations.farm.init();

        const keys = Object.keys(this.state.locations);

        const location_jsx = keys.map(function(key){
            const location = this.state.locations[key];
            return <div key={key}>{ location.getName() }</div>;
        }.bind(this));

        ReactDOM.render(
            <div>
                <div className="header">Locations</div>
                <div>{ location_jsx }</div>
            </div>,
            document.getElementById('locations')
        );
    }
}

export default (new Locations());
