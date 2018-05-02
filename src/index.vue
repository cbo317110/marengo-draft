<template>
	<div>
		<i class="fas fa-globe"/>
		<middleware>
			<div v-html="$('welcome', {name: ['neto', log]})" />
			{{ operations }}
			<button @click="operations = operations + 1">Test</button>
		</middleware>
	</div>
</template>

<script>
	import Marengo from 'marengo'
	import conf from './conf'
	export default Marengo({
		conf,
		data() {
			return {
				operations: 0
			}
		},
		methods: {
			log(value) {
				console.log(value)
			}
		},
		mounted() {
			this.$requests('search').get('larissa').purpose(console.log).fire()
		}
	})
</script>