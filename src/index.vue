<template>
<div>
	{{ $('helloWorld') }}
	<middleware>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</middleware>
	<validation :for="send" :model="validation">
		<div class="form-group">
			<input class="form-control" type="text" valid-by="email">
			<div class="invalid-feedback"></div>
		</div>
		<div class="form-group">
			<input class="form-control" type="text" valid-by="phone">
			<div class="invalid-feedback"></div>
		</div>
		<button type="submit">Enviar</button>
	</validation>
</div>
</template>

<script>	
import m from 'marengo'
import s from './settings'
import p from './plugins'
export default {
	extends: m(s, p),
	data() {
		return {
			validation: {
				email: {
					template: 'email'
				},
				phone: {
					template: 'phone'
				}
			}
		}
	},
	methods: {
		log: console.log,
		send(e) {
			console.log('enviando')
		}
	}
}
</script>

<style lang="scss">
body {
	padding: 12px;
}
</style>