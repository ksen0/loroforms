var _DICT = {
	"NIL": {
		"angles": [0, Math.PI]
	},
	"lack": {
		"angles": [0, Math.PI/2]
	},
	"sustenance": {
		"angles": [Math.PI/3, 2*Math.PI/3, 3*Math.PI/2]
	},
	"hunger": {
		"composite": ["lack", "sustenance"]
	},
	"negation": {
		"angles": [0, Math.PI, 3*Math.PI/2]
	},
	"<emphasis>": {
		"angles": [0, 0.39269908169872414, 0.7853981633974483, 1.1780972450961724, 1.5707963267948966, 1.9634954084936207, 2.748893571891069, 3.141592653589793, 5.890486225480863]
	},
	"manyness": {
		"angles": [0, 2*Math.PI/3, 4*Math.PI/3, Math.PI/8, 2*Math.PI/3 + Math.PI/8, 4*Math.PI/3 + Math.PI/8]
	},
	"discovery": {
		"angles": [0, Math.PI/8]
	},
	"measurement": {
		"composite": ["discovery", "manyness"],
		"synonyms": ["count", "measure"],
		"meta": "lexember day 1"
	},
	"change": {
		"angles": [0, 1.1780972450961724, 2.356194490192345]
	},
	"i": {
		"angles": [Math.PI/8, 7*Math.PI/8],
		"synonyms": ["self"],
		"modifiers": {
			"loro-inhibition": "other being"
		}
	},
	"we": {
		"angles": [0, Math.PI, Math.PI/8, 7*Math.PI/8] //TODO
	},
	"movement": {
		"composite": ["change", "time"]
	},
	"moving-one": {
		"composite": ["i", "negation", "movement"],
		"synonyms": ["animals"]
	},
	"still-one": {
		"composite": ["i", "negation"]
	},
	"time": {
		"angles": [0, 3.9269908169872414, 4.71238898038469, 5.105088062083414]
	},
	"now": {
		"angles": [Math.PI/2, 3*Math.PI/2]
	},
	"here": {
		"angles": [0, 7*Math.PI/8],
		"modifiers": {
			"stonerose": "there"
		}
	},
	"before": {
		"angles": [0, 1.9634954084936207, 2.356194490192345, 3.141592653589793, 4.319689898685965]
	},
	"after": {
		"composite": ["before", "negation"]
	},
	"being-time": {
		"composite": ["we", "time"],
		"related": ["timescale", "time"]
	},
	"division": {
		"composite": ["change", "manyness", "negation", "measurement"],
		"synonyms": ["divide", "fraction"],
		"related": ["reproduction", "measurement"],
		"meta": "lexember day 1"
	},
	"multiplication": {
		"composite": ["change", "manyness", "measurement"],
		"synonyms": ["multiply", "fraction"],
		"related": ["reproduction", "measurement"],
		"meta": "lexember day 1"
	},
	"subtract": {
		"angles": [0, Math.PI/8, Math.PI, Math.PI/2],
		"meta": "lexember day 1"
	},
	"add": {
		"composite": ["subtract", "negation"],
		"meta": "lexember day 1"
	},
	"meat": {
		"composite": ["sustenance", "moving-one"],
		"meta": "lexember day 1"
	},
	"vegetable": {
		"composite": ["sustenance", "still-one"],
		"synonyms": ["fruit", "starch", "cereal"],
		"meta": "lexember day 1"
	},
	"sibling": {
		"composite": ["we", "now"],
		"synonyms": ["brother", "sister"],
		"meta": "lexember day 1"
	},
	"parent": {
		"composite": ["we", "before", "being-time"],
		"synonyms": ["mother", "father"],
		"meta": "lexember day 1"
	},
	"kid": {
		"composite": ["we", "after", "being-time"],
		"synonyms": ["son", "daughter", "child"],
		"meta": "lexember day 1"
	},
	"friend": {
		"composite": ["negation", "i", "joy"],
		"synonyms": ["loved one(s)"]
	},
	"square root": {
		"composite": ["power (math)", "half"]
	},
	"power (math)": {
		"composite": ["multiplication", "recursion"]
	},
	"recursion": {
		"angles": [0, 0.39269908169872414, 4.319689898685965, 5.497787143782139, 5.890486225480863]
	},
	"gathering": {
		"composite": ["vegetable", "accumulation"],
		"synonyms": ["to gather", "to pick (fruit)", "picking (fruit)"]
	},
	"hunting": {
		"composite": ["meat", "accumulation"],
		"synonyms": ["to hunt"]
	},
	"accumulation": {
		"composite": ["add"]
	},
	"preparation (food)": {
		"composite": ["meat", "change", "manyness"],
		"synonyms": ["to filet", "to chop", "to break down (nutrients)"]
	},
	"lover": {
		"composite": ["friend", "reproduction"],
		"synonyms": ["partner"]
	},
	"reproduction": {
		"composite": ["we", "manyness"]
	},
	"river": {
		"composite": ["liquid", "here"],
		"synonyms": ["stream"]
	},
	"liquid": {
		"composite": ["state (chem.)", "medium"]
	},
	"state (chem.)":{
		"angles": [0, 0.7853981633974483, 1.5707963267948966, 3.5342917352885173, 4.319689898685965]
	},
	"half": {
		"angles": [0, 0.7853981633974483, 1.1780972450961724, 1.5707963267948966, 2.356194490192345, 3.5342917352885173, 3.9269908169872414, 4.319689898685965, 5.890486225480863],
		"synonyms": ["medium"]
	},
	"joy": {
		"composite": ["state (chem.)", "i"],
		"modifiers": {
			"loro-inhibition": "transcendence",
			"stonerose": "masochism"
		},
		"angles": [0, 1.1780972450961724, 1.5707963267948966, 1.9634954084936207, 3.141592653589793, 3.5342917352885173, 4.319689898685965, 4.71238898038469]
	},
	"bliss": {
		"composite": ["joy", "unawareness"],
		"synonyms": ["ecstasy"],
		"explanation": "happiness that precludes awareness"
	},
	"unawareness": {
		"composite": ["negation", "perceiving"]
	},
	"perceiving": {
		"synonyms": ["seeing", "awareness", "to be aware"]
	},
	"despair": {
		"composite": ["lack", "bliss"]
	},
	"sorrow": {
		"composite": ["lack", "joy"]
	},
	"anger": {
		"composite": ["change", "wanting"],
		"modifiers": {
			"loro-inhibition": "hope",
			"stonerose": "productivity"
		}
	},
	"terror": {
		"composite": ["unawareness"],
		"angles": [0, 1.1780972450961724, 2.356194490192345, 3.5342917352885173, 5.890486225480863]
	},
	"worry": {
		"composite": ["perceiving", "danger"],
		"synonyms": ["nervousness"]
	},
	"danger": {
		"angles": [0, Math.PI, Math.PI/8, 7*Math.PI/8, Math.PI + Math.PI/8, Math.PI + 7*Math.PI/8]
	},
	"confidence": {
		"composite": ["negation", "worry"]
	},
	"bank (nature)": {
		"composite": ["river", "edge"]
	},
	"edge": {
		"angles": [0, 1.5707963267948966, 2.356194490192345, 3.5342917352885173, 5.105088062083414]
	},
	"wanting": {
		"synonyms": ["desire", "to want", "need", "want"]
	},
	"lake": {
		"composite": ["liquid", "manyness"],
		"synonyms": ["sea", "ocean"]
	},
	"astronomy": {
		"composite": ["discovery", "space"]
	},
	"space": {
		"composite": ["before","i", "manyness"]
	},
	"black hole": {
		"composite": ["hunger", "space"]
	},
	"satellite": {
		"composite": ["moving-one", "space"],
		"synonyms": ["asteroid", "comet"]
	},
	"travel": {
		"composite": ["space", "movement"]
	}


/*

shoot.grow("travel")

shoot.grow("negation")
shoot.grow("movement")

shoot.grow("<emphasis>")
shoot.grow("i", mod="loro-inhibition")


"i": {
		"angles": [Math.PI/8, 7*Math.PI/8],
		"synonyms": ["self"],
		"modifiers": {
			"loro-inhibition": "other being"
		}

For the Lsot Mail Mural

travel not in space but through the eyes of another

Travel
	negation space-movement
	like
		inner-being
		inner-becoming
		other-being
		other-becoming

*/

/*



horn
hoof
mane
claw
fang

Day 3

Mathematics

protractor
ruler
angle
circle
square
triangle
line
Food and cooking

berry
vegetable
fruit
fruit-bearing tree
Family and relationships

aunt
uncle
cousin (male)
cousin (female)
grandfather
grandmother
Emotions

grief
thrill
overwhelmed
blue

Day 4

Nature & outdoors

tree
forest
flower
plain
field
Astronomy

star
moon
planet
space
universe
Animals

dog
cat
horse
pig
sheep
cow
mouse
rat

Day 6

Nature & outdoors

mountain
hill
rift
sky
land
Astronomy

galaxy
telescope
spaceship
rocket
Animals

hide
kibble
cattle
herd
shepherd
donkey

Day 7

School

textbook
desk
teacher
student
Jobs

lawyer
doctor
farmer
driver
Government & Laws

amendment
article
constitution
monarchy
democracy

Day 8

School

homework
schoolbus
substitute teacher
diploma
exam
class
pupil
Jobs

babysitter
nurse
engineer
scribe
Government & Laws

decree
republic
dictatorship
coup
citizen
sovereign
president
king

Days 9 and 10

Apologies for the no-show on day 9 and the late delivery today. I'll make the reason for my absence the topic of that one, it should provide more than enough diversity. Have fun!
beer
rum
whisky
wine
water
raclette
potato
cheese
roquefort
goat cheese
bacon
ham
cured meat
friend
birthday

*/
}

function dict(word){
	let output = {};
	if (word in _DICT){
		// first, check if there are angles.
		if ("angles" in _DICT[word]){
			output[word] = _DICT[word].angles;
		}
		// second, add anything in the composites.
		if ("composite" in _DICT[word]){
			console.log("composite:")
			console.log(_DICT[word].composite)
			for (var i in _DICT[word].composite) {
				add_list = dict(_DICT[word].composite[i]);
				console.log(add_list)
				for (var j in add_list){
					output[j] = add_list[j];
				}
				
			}
		}

	} else { // third, if empty, check if is a synonym for anything.
		for (var i in _DICT) {
			if ("synonyms" in _DICT[i] && _DICT[i].synonyms.indexOf(word) != -1) {
				return dict(i);
			}
		}
	}
	
	// TODO add synonym and composite lookups
	return output;
}


function test_dict() {

	console.log("Testing " + Object.keys(_DICT).length + " dictionary definitions.");

	let passed = true;

	// synsets
	let synpairs = 0;
	for (var word in _DICT) {
		if ("synonyms" in _DICT[word]) {
			for (var syn in _DICT[word].synonyms) {
				if ( syn in _DICT ) {
					if ( ! ("synonyms" in _DICT[syn] && _DICT[syn].indexOf[word]) ) {
						console.log("The synonym " + syn + " for " + word +
							" is defined, but does not name " + word + " as a synonym.");
						passed = false;
					}
					if (syn < word) {
						synpairs --;
					}
				}
				synpairs ++;
				// Note: it is allowed for a synonym to not have its own specificaiton.
				// This is the point of allowing synonyms, to reduce the number of
				// necessary independent entries.
			}
		}
	}

	if (passed) {
		console.log("Passed synset test with " + synpairs + " synonym pairs.");
	}
	
	// composites completeness
	passed = true;
	let ncomps = 0;
	for (var word in _DICT) {
		if ("composite" in _DICT[word]) {
			ncomps ++;
			for (var i in _DICT[word].composite) {
				comp = _DICT[word].composite[i];
				if ( !(comp in _DICT) ){
					console.log("Composite " + comp + " for word " +
						word + " is missing definition.");
					passed = false;
				}
			}
		}
	}

	if (passed) {
		console.log("Passed composite completeness test with " +
			ncomps + " composite expressions.");
	}
	
	// duplicate glyphs
	passed = true;
	let dupdict = {};
	for (var word in _DICT) {
		if ("angles" in _DICT[word]) {
			
			let normalized = [];
		
			for (var i in _DICT[word].angles) {
				let a = _DICT[word].angles[i];
				if (a < 0){ // add 2*Math.PI to every negative angle
					normalized.push(a + (Math.PI * 2)); 
				} else if (a >= Math.PI * 2) { // remainder with 2*Math.PI
					normalized.push(a % (Math.PI * 2) );
				} else {
					normalized.push(a);
				}
			}
			normalized.sort(); // sort angle list
			if (normalized.length < 2) {
				console.log("Angle precets for " + word + " contain too few angles; at least two needed.");
				console.log(normalized);
				passed = false;
				continue;
			}
			for (var i in normalized) { // start angle list at 0
				if (i != 0)
					normalized[i] = normalized[i] - normalized[0];
			}
			normalized[0] = 0;
			//console.log(word);
			//console.log(_DICT[word].angles);
			//console.log(normalized);
			for (var i in normalized) { // check for internal duplicates
				if (normalized.indexOf(normalized[i]) != i) {
					console.log("Angle precets for " + word + " contain a duplicate: " + normalized[i]);
					passed = false;
					continue;
				}
			}
			let dupdict_key = normalized.join(); // // convert to unique string
			if (dupdict_key in dupdict) { // if encounter a collision, report word collision
				console.log("Angle precets for " + word + " are already used by " + dupdict[dupdict_key]);
				passed = false;
				continue;
			} else { // store string in a "seen" dict, from string to initial word
				dupdict[dupdict_key] = word;
			}
		}
	}
	if (passed) {
		console.log("Passed orthographic uniqueness test with " +
			Object.keys(dupdict).length + " composite expressions.");
	}

	return dupdict;
}


function make_new_angle(sensitivity = 1/8, trials = 100) {
	dupdict = test_dict();

	sensitivity = Math.PI * sensitivity;
	let goodangle = false;
	while (!goodangle && trials > 0) {
		trials --;
		let newangle = [0];
		for(var i = sensitivity; i < Math.PI*2; i += sensitivity) {
			if (Math.random() < 0.4) {
				newangle.push(i);
			}
		}
		for (var i in newangle) {
			let newangle_shift = [];
			for (var j in newangle) {
				newangle_shift[j] = ((newangle[j] - newangle[i]) + Math.PI * 2) % (Math.PI*2);
			}
			if (newangle_shift.join() in dupdict) {
				console.log("Ruling out " + newangle);
				return null;
			}			
		}
		goodangle = true;
		console.log("Try out: " + newangle);
		return newangle;
	}
}

