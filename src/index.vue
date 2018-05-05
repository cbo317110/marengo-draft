<template>
<div>
	{{ $('helloWorld') }}
</div>
</template>

<script>	
import m from 'marengo'
import s from './settings'
import p from './plugins'
export default {
	extends: m(s, p),
	methods: {
		log: console.log
	}
}
</script>

<style lang="scss">
body {
	padding: 12px;
	background: red;
	color: white;
}
</style>