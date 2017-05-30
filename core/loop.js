class Loop {
	constructor(){
		this.last_time;
		this.current_time;
		this.callback;

		this.step = this.step.bind(this);
	}

	onUpdate(callback){
		this.callback = callback;
	}

	step(){
		this.current_time = Date.now();

		let elapsed = this.current_time - this.last_time;
		this.last_time = this.current_time;

		if(this.callback){
			this.callback(elapsed);
		}

		window.requestAnimationFrame(this.step);
	}

	start(){
		this.last_time = Date.now();

		window.requestAnimationFrame(this.step);
	}
}

export default Loop;