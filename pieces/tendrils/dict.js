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
	"measure": {
		"composite": ["discovery", "manyness"],
		"synonyms": ["count"]
	},
	"subtract": {
		"angles": [0, Math.PI/8, Math.PI, Math.PI/2]
	},
	"add": {
		"composite": ["subtract", "negation"]
	},
}

function dict(word){
	let output = [];
	if (word in _DICT){
		// first, check if there are angles.
		if ("angles" in _DICT[word]){
			output.push(_DICT[word].angles);
		}
		// second, add anything in the composites.
		if ("composite" in _DICT[word]){
			console.log("composite:")
			console.log(_DICT[word].composite)
			for (var i in _DICT[word].composite) {
				add_list = dict(_DICT[word].composite[i]);
				console.log(add_list)
				for (var j in add_list){
					output.push(add_list[j]);
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