const Twitter = require('twitter')

const twitter = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_TOKEN_SECRET
})

const STATUSES = [
	`Do you need to push yourself to exhaustion to succeed? `,
	`It's okay if you need to take a nap. 😴`,
	`Have you been outside recently? Go and take a nice, fresh breath`,
	`Can we take some time to just breathe?`,
]

twitter.post('statuses/update', { status: STATUSES[Math.floor(Math.random() * STATUSES.length)] })
	.then((s) => {
		console.log(`Tweeting .. `, s)
	})
	.catch((e) => {
		console.error('We have an error', e)
	})

