<template>
	<div>
		<div class="col-sm-12">
			<i class="fas fa-globe"/>
			<middleware>
				<div v-html="$('welcome', {name: ['neto', log]})" />
				{{ operations }}
				<button @click="operations = operations + 1">Test</button>
			</middleware>
		</div>
		
		<br>

		<div class="col-sm-6">
			<h5>marengo-form</h5>
			<formContainer v-on:submit="submit">
				<div class="form-group">
					<label>Email</label>
					<input type="text" class="form-control" v-model="form.email" v-validate="{template: 'email'}">
					<div class="invalid-feedback"></div>
				</div>
				
				<div class="form-group">
					<label>Phone</label>
					<input type="text" class="form-control" v-validate="{template: 'phone', required: false}">
					<div class="invalid-feedback"></div>
				</div>
				
				<div class="form-group">
					<label>Minimum Length: <small>3</small></label>
					<input type="text" class="form-control" v-model="form.length" v-validate="{template: { length: 3 }}">
					<div class="invalid-feedback"></div>
				</div>

				<passwordCreation :value.sync="form.password"></passwordCreation>

				<div class="form-group">
					<button class="btn btn-primary" type="submit">submit</button>
				</div>
			</formContainer>
		</div>
	</div>
</template>

<script>
import Marengo from 'marengo'
import config from './config'
export default Marengo({
	marengo: config,
	data() {
		return {
			operations: 0,
			form: {
				email: null,
				phone: null,
				length: null,
				password: null
			}
		}
	},
	methods: {
		log(value) {
			console.log(value)
		},
		submit() {
			console.log(this.form)
		}
	},
	mounted() {
		this.$requests('search').get('larissa').purpose(console.log).fire()
	}
})
</script>