var _DICT = {
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
		"angles": [0, Math.PI/2] //TODO
	},
	"i": {
		"angles": [Math.PI/8, 7*Math.PI/8] //TODO
	},
	"we": {
		"angles": [0, Math.PI, Math.PI/8, 7*Math.PI/8] //TODO
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
	/*
	"joy/bliss/transcendence": { // these should be many composites, their emotional vocabulary should be vast
		"composite": ["we", "after", "being-time"],
		"synonyms": ["son", "daughter", "child"],
		"loro": true,//TODO maybe synonyms could be more general "relationships" and be dicts w additional metadata
		"meta": "lexember day 1"
	},
	"despair/sorrow/anger": {
		"composite": ["we", "after", "being-time"],
		"synonyms": ["son", "daughter", "child"],
		"loro": true,//TODO
		"meta": "lexember day 1"
	}*/

/*
	DAY 2
square root
fraction
power
measurement
Food and cooking

to gather
to pick (berries)
to hunt
to filet
to chop
Family and relationships

loved one(s)
partner
lover
friend
friendship
Emotions

Terror
Nervousness
Worry
Confidence
Hope
Day 5

Nature & outdoors

river
bank
stream
lake
sea/ocean
Astronomy

black hole
satellite
asteroid
comet
Animals

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
					// TODO this test should be recursive, to test that no circular
					// definitions or definitions without angles exist.
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
			// TODO this normalization ought to happen as a pre-processing step?
			let normalized = [];
		
			for (var i in _DICT[word].angles) {
				let a = _DICT[word].angles[i];
				if (a < 0){ // add 2*Math.PI to every negative angle
					normalized.push(a + Math.PI * 2); 
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
				normalized[i] = normalized[i] - normalized[0];
			}
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
}