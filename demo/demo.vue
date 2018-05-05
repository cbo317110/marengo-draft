<template>
	<demo :env="marengo"/>
</template>
<script>
	import Demo from 'demo-component'
	export default {
		components: {
			Demo
		},
		data() {
			return {
				marengo: {
					language: {
						current: 'en_US'
					}
				}
			}
		}
	}
</script>