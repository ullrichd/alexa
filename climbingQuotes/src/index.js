/* climbersLife
 *
 * This AWS Lambda function will
 * tell a quote related to climbing
 *
 * Intents:
 * 		ClimbingQuoteIntent
 * 		ClimbingQuoteIndexIntent
 */

'use strict';

const Alexa = require('alexa-sdk');
const quotes = require('./quotes');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
	"en": {
		"translation": {
			"QUOTES": quotes.QUOTES_EN,
			"ANSWER_INTRO": [
				"Here is your quote: ... ",
				"Here you go: ... ",
				"A climbing quote is: ... "
			],
			"QUOTE_AUTHOR_SEPARATOR": "\n\t - ",
			"SKILL_NAME": "Climbing Quotes",
			"HELP_MESSAGE": "You can say tell me a quote, or, you can say exit... What can I help you with?",
			"HELP_REPROMPT": "What can I help you with?",
			"INDEX_ERROR": "Sorry, I can\'t find a quote with this number. Please try again",
			"STOP_MESSAGE": "Goodbye!"
		}
	}
};

const handlers = {
	'LaunchRequest': function() {
		this.emit('ClimbingQuoteIntent');
	},
	'ClimbingQuoteIntent': function() {
		var quotesArr = this.t('QUOTES');
		var factIndex = Math.floor(Math.random() * quotesArr.length);
		var randomQuote = quotesArr[factIndex];

		var introArr = this.t('ANSWER_INTRO');
		var introIndex = Math.floor(Math.random() * introArr.length);
		var randomIntro = introArr[introIndex];

		// Create speech output
		var speechOutput = randomIntro + randomQuote[1] + " ... " + randomQuote[0];
		var cardOutput = randomQuote[1] + this.t('QUOTE_AUTHOR_SEPARATOR') + randomQuote[0];
		this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), cardOutput);
	},
	'ClimbingQuoteIndexIntent': function() {
		var indexSlot = this.event.request.intent.slots.Index,
			index;
		if (indexSlot) {
			index = indexSlot.value;
		}

		var quotesArr = this.t('QUOTES');
		if (!index || index === "?" || index < 1 || index > quotesArr.length) {
			var output = this.t('INDEX_ERROR');
			var reprompt = this.t('HELP_MESSAGE');
			this.emit(':ask', output, reprompt);
		}
		var introArr = this.t('ANSWER_INTRO');
		var introIndex = Math.floor(Math.random() * introArr.length);
		var randomIntro = introArr[introIndex];
		var quote = quotesArr[index - 1];

		// Create speech output
		var speechOutput = randomIntro + quote[1] + "..." + quote[0];
		var cardOutput = quote[1] + this.t('QUOTE_AUTHOR_SEPARATOR') + quote[0];
		this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), cardOutput);
	},
	'AMAZON.HelpIntent': function() {
		var speechOutput = this.t('HELP_MESSAGE');
		var reprompt = this.t('HELP_MESSAGE');
		this.emit(':ask', speechOutput, reprompt);
	},
	'AMAZON.CancelIntent': function() {
		this.emit(':tell', this.t('STOP_MESSAGE'));
	},
	'AMAZON.StopIntent': function() {
		this.emit(':tell', this.t('STOP_MESSAGE'));
	},
	'SessionEndedRequest': function() {
		this.emit(':tell', this.t('STOP_MESSAGE'));
	},
};

exports.handler = function(event, context) {
	const alexa = Alexa.handler(event, context);
	alexa.appId = APP_ID;
	alexa.resources = languageStrings;
	alexa.registerHandlers(handlers);
	alexa.execute();
};
