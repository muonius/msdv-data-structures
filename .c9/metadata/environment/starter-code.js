{"changed":true,"filter":false,"title":"starter-code.js","tooltip":"/starter-code.js","value":"// npm install got\n// mkdir data\n// npm install cheerio\n\nconst fs = require('fs');\nconst got = require('got');\n\n(async () => {\n\ttry {\n\t\tconst response = await got('https://parsons.nyc/thesis-2020/');\n\t\tconsole.log(response.body);\n\t\tfs.writeFileSync('/home/ec2-user/environment/data/thesis.txt', response.body);\n\t\t//=> '<!doctype html> ...'\n\t} catch (error) {\n\t\tconsole.log(error.response.body);\n\t\t//=> 'Internal server error ...'\n\t}\n})();\n\n\n\n","undoManager":{"mark":2,"position":9,"stack":[[{"start":{"row":0,"column":0},"end":{"row":24,"column":56},"action":"insert","lines":["/ npm install cheerio","","var fs = require('fs');","var cheerio = require('cheerio');","","// load the thesis text file into a variable, `content`","// this is the file that we created in the starter code from last week","var content = fs.readFileSync('data/thesis.txt');","","// load `content` into a cheerio object","var $ = cheerio.load(content);","","// print (to the console) names of thesis students","$('h3').each(function(i, elem) {","    console.log($(elem).text());","});","","// write the project titles to a text file","var thesisTitles = ''; // this variable will hold the lines of text","","$('.project .title').each(function(i, elem) {","    thesisTitles += ($(elem).text()).trim() + '\\n';","});","","fs.writeFileSync('data/thesisTitles.txt', thesisTitles);"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":16,"column":5},"action":"insert","lines":["// npm install got","// mkdir data","","const fs = require('fs');","const got = require('got');","","(async () => {","\ttry {","\t\tconst response = await got('https://parsons.nyc/thesis-2021/');","\t\tconsole.log(response.body);","\t\tfs.writeFileSync('/home/ec2-user/environment/data/thesis.txt', response.body);","\t\t//=> '<!doctype html> ...'","\t} catch (error) {","\t\tconsole.log(error.response.body);","\t\t//=> 'Internal server error ...'","\t}","})();"],"id":3}],[{"start":{"row":8,"column":60},"end":{"row":8,"column":61},"action":"remove","lines":["1"],"id":4}],[{"start":{"row":8,"column":60},"end":{"row":8,"column":61},"action":"insert","lines":["0"],"id":5}],[{"start":{"row":19,"column":0},"end":{"row":19,"column":21},"action":"remove","lines":["/ npm install cheerio"],"id":6}],[{"start":{"row":1,"column":13},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":7}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":21},"action":"insert","lines":["/ npm install cheerio"],"id":8}],[{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["/"],"id":9}],[{"start":{"row":21,"column":0},"end":{"row":44,"column":56},"action":"remove","lines":["","var fs = require('fs');","var cheerio = require('cheerio');","","// load the thesis text file into a variable, `content`","// this is the file that we created in the starter code from last week","var content = fs.readFileSync('data/thesis.txt');","","// load `content` into a cheerio object","var $ = cheerio.load(content);","","// print (to the console) names of thesis students","$('h3').each(function(i, elem) {","    console.log($(elem).text());","});","","// write the project titles to a text file","var thesisTitles = ''; // this variable will hold the lines of text","","$('.project .title').each(function(i, elem) {","    thesisTitles += ($(elem).text()).trim() + '\\n';","});","","fs.writeFileSync('data/thesisTitles.txt', thesisTitles);"],"id":10}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":21,"column":0},"end":{"row":21,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1631307474868}