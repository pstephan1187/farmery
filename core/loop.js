import ReactDOM from 'react-dom';
import React from 'react';

class Loop {
	constructor(){
		this.last_time;
		this.current_time;
		this.callback;
		this.average_fps = [];

		this.step = this.step.bind(this);
	}

	onUpdate(callback){
		this.callback = callback;
	}

	step(){
		this.current_time = Date.now();

		let elapsed = this.current_time - this.last_time;
		this.last_time = this.current_time;
		this._updateFps(elapsed);

		if(this.callback){
			this.callback(elapsed);
		}

		if(process.env.NODE_ENV === 'development'){
			this._renderDev();
		}

		window.requestAnimationFrame(this.step);
	}

	_updateFps(elapsed){
		const fps = Math.round(1000 / elapsed);
		this.average_fps.push(fps);

		if(this.average_fps.length > 10){
			this.average_fps.shift();
		}

		return this;
	}

	getFps(){
		return Math.round(this.average_fps.reduce((sum, fps) => sum += fps, 0) / this.average_fps.length);
	}

	start(){
		this.last_time = Date.now();

		window.requestAnimationFrame(this.step);
	}

	_renderDev(){
		ReactDOM.render(
		    <span>
		        { this.getFps() } FPS
		    </span>,
		    document.getElementById('fps')
		);
	}
}

export default Loop;