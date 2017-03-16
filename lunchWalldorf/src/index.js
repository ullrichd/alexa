/* lunchWalldorf
 *
 * This AWS Lambda function will
 * read the menu from
 * 'app.sap.eurest.de/mobileajax/data/35785f54c4f0fddea47b6d553e41e987/all.json'
 *
 * Intents:
 * 		GetLunchMenuIntent
 */



// 1. Skill Code =======================================================================================================

var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
	var alexa = Alexa.handler(event, context);

	// alexa.appId = 'amzn1.echo-sdk-ams.app.1234';

	alexa.registerHandlers(handlers);
	alexa.execute();
};

var handlers = {
	'LaunchRequest': function() {
		this.emit('GetLunchMenuIntent');
	},

	'GetLunchMenuIntent': function() {

		var options = {
			host: 'app.sap.eurest.de',
			path: '/mobileajax/data/35785f54c4f0fddea47b6d553e41e987/all.json'
		};

		var that = this;
		httpGet(options, function(sResponseData) {
				var jsonResponse = JSON.parse(sResponseData);
				var oLunchInfo = parseLunch(jsonResponse);
				var speechOutput = "Heute gibt es ";

				if (!oLunchInfo) {
					speechOutput = "Heute gibt es leider kein Essen!";
				} else {
					oLunchInfo.main.forEach(function(elem) {
						speechOutput += elem + ". ";
					});
				}
				that.emit(':tell', speechOutput);

			}
		);

	}
};

function parseLunch(oLunch) {

	var d = new Date();
	var weekday = new Array(7);
	weekday[0] = "sun";
	weekday[1] = "mon";
	weekday[2] = "tue";
	weekday[3] = "wed";
	weekday[4] = "thu";
	weekday[5] = "fri";
	weekday[6] = "sat";

	var weekdayText = weekday[d.getDay()];

	var oLunchInfo = {};
	oLunchInfo.soup = [];
	oLunchInfo.dessert = [];
	oLunchInfo.main = [];

	var oLunchToday = oLunch.menu.filter(function(elem) {
		return elem.weekDay === weekdayText;
	})[0]; // there is just one menu for one day

	// if there is no lunch e. g. on Saturday or Sunday quit
	if (oLunchToday === undefined) {
		return undefined;
	}

	var aSoup = oLunchToday.counters.filter(function(elem) {
		return elem.title.en === "Soup";
	})[0]; // there is just one soup per day

	var aDessert = oLunchToday.counters.filter(function(elem) {
		return elem.title.en === "Dessert";
	})[0]; // there is just one dessert per day

	var aMain = oLunchToday.counters.filter(function(elem) {
		return elem.title.en.indexOf("Main") > -1;
	}); // there are several menues per day

	var sSoup = cutAdditionalInfo(aSoup.dishes[0].title.de);
	oLunchInfo.soup.push(sSoup);

	aDessert.dishes.forEach(function(elem) {
		oLunchInfo.dessert.push(cutAdditionalInfo(elem.title.de));
	});

	aMain.forEach(function(elem) {
		var sMainFull = elem.dishes[0].title.de;
		var sMain = cutAdditionalInfo(sMainFull);
		oLunchInfo.main.push(sMain);
	});

	console.log("dessert", oLunchInfo.dessert);
	console.log("main", oLunchInfo.main);
	console.log("soup", oLunchInfo.soup);

	return oLunchInfo;
}

function cutAdditionalInfo(sString) {
	var bracket = sString.indexOf("(");
	var sWithoutAdditionalInfo = sString.substr(0, bracket - 1);
	return sWithoutAdditionalInfo;
}


// 2. Helper Function  =================================================================================================

var http = require('http');

/**
 * http is a default part of Node.JS.  Read the developer doc at https://nodejs.org/api/http.html
 */
function httpGet(options, fnCallback) {
	var oRequest = http.request(options, function(oResponse) {
		oResponse.setEncoding('utf8');
		var sResponseData = "";

		oResponse.on('data', function(chunk) {
			sResponseData = sResponseData + chunk;
		});

		oResponse.on('end', function() {
			fnCallback(sResponseData);
		});

	});
	oRequest.end();

}

