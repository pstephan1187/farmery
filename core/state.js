import objectPath from "object-path";

class State {
	constructor(data){
		this.state = data;
	}

	get(key){
		return objectPath.get(this.state, key);
	}

	set(key, value){
		objectPath.set(this.state, key, value);

		return this;
	}

	increment(key){
		var value = this.get(key);
		value += 1;

		return this.set(key, value);
	}
}

export default State;
