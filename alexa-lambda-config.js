module.exports = {
	accessKeyId: process.env['AWS_ACCESS_KEY_ID'],
	secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'],
	region: 'eu-west-1',
	handler: 'alexa-lambda.handler',
	role: 'arn:aws:iam::979779020614:role/ElectronicVeterinaryAssistantRole',
	accountId: 979779020614,
	functionName: 'ElectronicVeterinaryAssistantAlexaSkill',
	timeout: 10,
	memorySize: 128,
	publish: true,
	runtime: 'nodejs6.10'
};