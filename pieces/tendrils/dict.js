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
		"loro": true,//TODO
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