<template>
	<div>
		{{ $trans('helloWorld') }}
	</div>
</template>

<script>
	import Marengo from 'marengo'
	import config from './config'
	export default Marengo({
		config
	})
</script>