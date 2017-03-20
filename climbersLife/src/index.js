/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
	"en": {
		"translation": {
			"SIGNS": [
				'you would never take a job and move to a city that is not at an acceptable proximity to a climbing spot.',
				'you have used an ice axe to chop weeds in your garden.',
				'you nearly crash the car because you are looking at a climbing crag instead of the road.',
				'you use a combination of a mantle shelf and bridging to get onto the kitchen worktop to reach the top shelf cupboards.',
				'you have got stuck in clothes in a changing room... because when trying to remove the top you had to use your back muscles, so your back expanded and you got stuck.',
				'you nearly crash the car because you are too pumped to hold the steering wheel.',
				'you have cleared your desk at work to show a mate the desk traverse.',
				'you have to explain to a colleague why you have bloody knuckles... And then you have to explain what \"hand jamming\" is... And then you have to explain why anyone would do that.​',
				'you sleep with straight arms because of tennis elbow.',
				'the name hillary makes you think of the everest, not Mrs Clinton.',
				'you traverse the bumpers at the gas station while waiting for your car to fill.',
				'you have carabiners on everything - such as keys or backpacks.',
				'you leave minging public toilets by pulling on the handle with a mono.',
				'use words in another language that you do not speak. Such as \"Allez!\" or \"Venga!\".',
				'you walk across the office pinch gripping 2 reams of paper per hand when topping up the supplies at the photocopier.',
				'it is totally normal to hang out half naked and in some sort of bondage gear with a bunch of guys.',
				'you wonder why other \'sports people\' don\'t go to the pub after they\'ve done their exercise.',
				'what you are wearing right now has chalk on it.',
				'five fivteen is not a time.',
				'sending does not involve the postal service.',
				'a colleague that heard you lost a friend offers his condolences, but you just say… It\'s okay, i already bought a new one.',
				'you drop something at work and shout \"ROCK!\" before thinking.',
				'your phone doesn\'t react to your touch because chalk has dried out your finger tips and the rock has worn them smooth.',
				'old rusted chunks of metal and wires are keepsakes, because they were booty.',
				'if you hear five ten you are confused if the grade or the brand is meant… surely it can\'t mean ten past five.',
				'reaching for a far away item on the table reminds you of stretching for a hold.',
				'you have bragged about taking a whipper.',
				'you have used a piton as a bottle opener, can opener, spoon, fork, or knife.',
				'you know the words for rock, rope, belay, take and slack in more than 2 languages.',
				'you’re psyched about the word psyched.',
				'you walk past stone walls and feel their rock texture.',
				'the tan on your neck and back is much darker than that on your face and chest.',
				'you no longer seek validation as a climber.',
				'an Elvis leg has nothing to do with dancing.',
				'you know more than ten different knots, but aren\'t a sailor.',
				'your friends ask you why your car smells like feet.',
				'you think food tastes better with chalk on it.',
				'you let your 2 year old kid attempt to cross a playground rope bridge 5 foot off the ground with gaps bigger than your kid and you just stand there spotting and yell to flag out the leg.',
				'you either do yoga or have seriously considered doing it.',
				'you still wear lycra regularly (or know people who do).',
				'most of the saved locations in your weather app are climbing spots.',
				'the gear in your trunk is worth more than car.',
				'there is spilled chalk in some area of your home or car.',
				'you read guide books on the toilet.',
				'you use climbing tape or superglue instead of a Band-Aid... or actual medical attention.',
				'you own more climbing shoes than regular shoes.',
				'you always have climbing shoes, harness, rope and quickdraws in your car, just to be ready.',
				'he is proposing and you say...\"Get off your knees!\".',
				'you try to hand jam between the banister and the wall rather than just holding on like a normal person. ',
				'instead of taking another step so you can reach something, you toe hook.',
				'you don\'t care anymore if your street shoes fit well, they are anyway comfortable.',
				'you use a toe hook to help get up off the sofa.',
				'you can get on your roof without a ladder.',
				'it is normal to stare at someones butt for hours.',
				'you only see your non climbing friends during bad weather.',
				'you notice good gear placements in the cracks between paving stones and kerbs.',
				'a hangboard or pull up bar doesn\'t look weird in a living room',
				'you find yourself suddenly very interested in geology. When you see a mountain, you must know its rock type, and the best temps for prime conditions.',
				'you have considered turning your garage into a bouldering gym.',
				'you try to climb forbidden walls.',
				'your ideal girlfriend has a set of nuts.',
				'your pocket money is actually spent on petrol to go climbing rather than on random climbing gear.',
				'you carry your shopping bags using only 1 finger.',
				'you haven\'t climbed for a week, but it feels like months.',
				'the only things that you worry about when buying a new used car are… \"Can i sleep in it?\" and \"Can I fit more than one bouldering mat in it?\"',
				'you leave work early to get an extra hour of climbing time in.',
				'you dropknee to put something in the fridge.',
				'you have more climbing pictures than pictures of your family.',
				'you are climbing with a random guy and you call down... \"Is it ok if I put your nuts in my mouth?\"',
				'you consider he term \"Dirtbag\" a badge of honour.',
				'your gear closet is bigger than your clothes closet, and much better organized.',
				'a flapper is the most cruel injury there is.',
				'you look forward to a \"bad\" winter. ',
				'you tie your partner to the bed using clove hitches.',
				'you shake hands with someone and they remark on the rough, leather-like texture of your palms.',
				'you have considered gluing sandpaper to your keyboard to develop more calluses.',
				'last-minute social events irritate you because you had a session planned on the 45 degree board.',
				'your playlist contains songs from climbing vids, and every time these come up you get psyched.',
				'you enjoy Mondays so you can rest.',
				'waking up for work feels impossible, but waking up to climb is no big deal.',
				'you wear a beanie in the gym but not outside.',
				'your favorite shoes are smaller than your feet.',
				'you are not capable of having a conversation unless it is about crags, routes or grades.',
				'you cancel your indoor session in the morning because of a bad back and then you go bouldering in the evening because you just can\'t help it.',
				'you reach behind you whenever your hands start to get sweaty.',
				'you can\'t remember the last time you went on a non-climbing holiday.',
				'you open the fridge by crimping the edge of the door and making it unbelievably difficult for yourself.',
				'you look at a building with a stone face and start to drool a little.',
				'you sandpaper your hands.',
				'you know how euphoric it feels to send a hard climb.',
				'you keep your stinky shoes in your trunk… just in case.',
				'you have tried moving around parts of your home without touching the floor, by using door frames, skirting boards, dado rails and the wall shapes as hand and foot holds.',
				'one of your recent clothing purchases has been from either an outdoor-focused brand, or with the consideration \"Could I climb in this?\".',
				'you can see a viable line up the outside of your house, the nearby monument or any other structure that you pass.',
				'your car is a mess, since you haven\'t cleaned it out from your last trip... which was three months ago... but you\'ll make sure to clean it the day before your next trip.',
				'you throw your climbing shoes in the bag when going anywhere \"Just in case.\"',
				'the \"What have you been up to?\" conversations with you are just as boring as the next man\'s because all you ever respond with is \"climbing\".',
				'you don\'t need oven mitts when carrying hot plates… your calluses suffice.',
				'have a bookshelf that is filled with nothing but climbing, Rock and Ice or guidebooks.',
				'there is scar tissue on the back of your hand.',
				'you practice edging on all stairs you climb.',
				'you tie unnecessarily complicated knots for the simplest tasks.',
				'you go to a shoe shop and they ask your size... and you reply, \"9, but I can stand a 7 for 10 minutes.\"',
				'your stories involve a lot of crazy hand gestures and out-of-control arm waving, and you do not care about the public spectacle it makes of you.',
				'you inspect bridges, stairways and bus stops for bouldering potential.',
				'you use the banister to pull yourself up the stairway when climbing stairs.',
				'you gaze at a part of a building and when someone asks what you\'re looking at you respond with \"I think that could go.\"',
				'your hands are constantly rough.',
				'you have become an expert at driving old, under-powered cars up steep and treacherous terrain.',
				'you can\'t get clothes that fit comfortably over your forearms.',
				'you check the 5 day forecast about 3 times an hour and all your non-climbing friends and colleagues ask you what the weather is going to do.',
				'you have done something on grit.',
				'you are always flagging to reach for stuff.',
				'the only books you own are guidebooks.',
				'you think that almost all injuries can be cured with tape.',
				'you have climbing stickers placed on EVERYTHING. There is a direct correlation between how many climbing stickers you have on your car and how hard you climb.',
				'your hands are always coated in a fine, white layer of chalk.',
				'you refer to the difficult part of any activity as the \"crux\".',
				'you carry, lift, and pull items with as few fingers as possible to strengthen yourself.',
				'the word “highball” doesn\'t refer to a cocktail.',
				'you check where the next climbing gym is before going on a business trip.',
				'bomber is never used as a noun.',
				'people wonder what kind of relationship you are in because of the bruises all over your legs and cuts on your hands.',
				'you are excited when there are new routes up at your gym.',
				'you think wearing flip flops, a beanie hat and a down jacket looks cool.',
				'you hear the the metallic sound of carabiners touching andt your hands start to sweat.',
				'your clothing has ducktape on it to cover holes.',
				'you live in your van for several months a year.',
				'your phones most used app is mountain project.',
				'on some of your best vacations you have been wet, cold, and miserable'
			],
			"ANSWER_INTRO": [
				"You might be a climber, when ",
				"You may be a climber, when ",
				"You're probably a climber, when "
			],
			"SKILL_NAME": "Climbers Life",
			"HELP_MESSAGE": "You can say tell me a sign that i am a climber, or, you can say exit... What can I help you with?",
			"HELP_REPROMPT": "What can I help you with?",
			"INDEX_ERROR": "Sorry, I can\'t find a sign with this number. Please try again",
			"STOP_MESSAGE": "Goodbye!"
		}
	}
};

const handlers = {
	'LaunchRequest': function() {
		this.emit('ClimberSignIntent');
	},
	'ClimberSignIntent': function() {
		// Get a random space fact from the space facts list
		// Use this.t() to get corresponding language data
		var factArr = this.t('SIGNS');
		var factIndex = Math.floor(Math.random() * factArr.length);
		var randomFact = factArr[factIndex];

		var introArr = this.t('ANSWER_INTRO');
		var introIndex = Math.floor(Math.random() * introArr.length);
		var randomIntro = introArr[introIndex];

		// Create speech output
		var output = randomIntro + randomFact;
		this.emit(':tellWithCard', output, this.t('SKILL_NAME'), output);
	},
	'ClimberSignIndexIntent': function() {
		var indexSlot = this.event.request.intent.slots.Index,
			index;
		if (indexSlot) {
			index = indexSlot.value;
		}

		var factArr = this.t('SIGNS');

		if (!index || index === "?" || index < 1 || index > factArr.length) {
			var output = this.t('INDEX_ERROR');
			var reprompt = this.t('HELP_MESSAGE');
			this.emit(':ask', output, reprompt);
		}
		var introArr = this.t('ANSWER_INTRO');
		var introIndex = Math.floor(Math.random() * introArr.length);
		var randomIntro = introArr[introIndex];
		var fact = factArr[index - 1];

		// Create speech output
		var output = randomIntro + fact;
		this.emit(':tellWithCard', output, this.t('SKILL_NAME'), output);
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
	alexa.APP_ID = APP_ID;
	// To enable string internationalization (i18n) features, set a resources object.
	alexa.resources = languageStrings;
	alexa.registerHandlers(handlers);
	alexa.execute();
};
