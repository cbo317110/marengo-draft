export default {
	language: {
		current: 'pt_BR',
		packages: {
			pt_BR: {
				'helloWorld': 'Olá Mundo!',
				'welcome':  'Bem vindo ao projeto {name}'
			},
			en_US: {
				'helloWorld': 'Hello World!',
				'welcome':  'Welcome to the {name} project'
			}
		}
	},
	requests: {
		igsearch: {
			base: 'https://www.instagram.com/web/search/topsearch/?context=blended&query='
		}
	},
	middleware(allow) {
		this.$requests('igsearch').get('Francisco').purpose(allow).fire()
	}
}