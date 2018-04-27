<template>
	<div>
		{{ $trans('helloWorld') }} <i class="fas fa-globe"/>
	</div>
</template>

<script>
	import Marengo from 'marengo'
	import config from './config'
	export default Marengo({
		config
	})
</script>