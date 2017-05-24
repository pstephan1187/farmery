<template>
	<div>
		{{ time }}
		<button @click="toggleTime">{{ button }}</button>
	</div>
</template>

<script>
const Bus = require("../../event-bus.js");

export default {
	data: () => ({
		time: '',
		button: 'Pause'
	}),
	methods: {
		toggleTime(){
			this.button = this.button === 'Pause' ? 'Play' : 'Pause';
			Bus.$emit('time.toggle');
		}
	},
	created: function(){
	    Bus.$on('time', function(clock){
	        this.time = clock.getFormattedDateTime();
	    }.bind(this));
	}
}
</script>