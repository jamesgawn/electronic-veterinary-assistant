'use strict';

class BotResponseResolver {
	constructor(log) {
		this.log = log;
		this.log.object = 'BotResponseResolver';
		this.responderMap = {
			placeholder: ''
		};
	}

	add(intent, path) {
		if(this.responderMap.hasOwnProperty(intent))
		{
			this.log.error('add', 'The intent ' + intent + ' has already been added to the resolver');
		}
		else
		{
			this.responderMap[intent] = path;
			this.log.info('add', 'Added resolver for intent: ' + intent);
		}
	}

	resolve(intent) {
		if(!this.responderMap.hasOwnProperty(intent))
		{
			let err = 'The intent ' + intent + ' does not have a resolver registered.';
			this.log.error('resolve', err);
			throw new Error(err);
		}
		else
		{
			this.log.info('resolve', 'Found resolver for intent: ' + intent);
			return this.responderMap[intent];
		}
	}
}

module.exports = BotResponseResolver;