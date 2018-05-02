import pt_BR from './lang/pt_BR'
import en_US from './lang/en_US'

import language from 'marengo-language'
import requests from 'marengo-requests'
import middleware from 'marengo-middleware'

export default {
	env: {
		language: 'en_US',
	},
	kext: {
		language,
		requests,
		middleware
	},
	body: {
		language: {
			pt_BR,
			en_US
		},
		requests: {
			search: {
				base: 'https://www.instagram.com/web/search/topsearch/?context=blended&query=',
				acceptor: {
					purpose: res => res.data
				}
			}
		},
		middleware: function (allowed) {
			setTimeout(allowed, 1500)
		}
	}
}