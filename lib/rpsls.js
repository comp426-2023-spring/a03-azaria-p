const rules = {
	'rock': {
		'rock': 'tie',
		'paper': 'lose',
		'scissors': 'win',
		'lizard': 'win',
		'spock': 'lose'},
	'paper': {
		'rock': 'win',
		'paper': 'tie',
		'scissors': 'lose',
		'lizard': 'lose',
		'spock': 'win'},
	'scissors': {
		'rock': 'lose',
		'paper': 'win',
		'scissors': 'tie',
		'lizard': 'win',
		'spock': 'lose'},
	'lizard': {
		'rock': 'lose',
		'paper': 'win',
		'scissors': 'lose',
		'lizard': 'tie',
		'spock': 'win'},
	'spock': {
		'rock': 'win',
		'paper': 'lose',
		'scissors': 'win',
		'lizard': 'lose',
		'spock': 'tie'}
};

export function rps(shoot){
	const valid = ['rock', 'paper', 'scissors'];
	if  (shoot == undefined)
		return {player: valid[Math.floor(Math.random() * 3)]};
	shoot = shoot.toLowerCase();
	if (!valid.includes(shoot)){
		console.error(`{shoot} is out of range.`);
		throw new RangeError(`${shoot} is out of range.`);
	}
	const opp = valid[Math.floor(Math.random() * 3)];
	return {player: shoot, opponent: opp, result: RULES[shoot][opp]}
}

export function rpsls(shoot){
	const valid = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
	if  (shoot == undefined)
		return {player: valid[Math.floor(Math.random() * 5)]};
	shoot = shoot.toLowerCase();
	if (!valid.includes(shoot)){
		console.error(`{shoot} is out of range.`);
		throw new RangeError(`${shoot} is out of range.`);
	}
	const opp = valid[Math.floor(Math.random() * 5)];
	return {player: shoot, opponent: opp, result: RULES[shoot][opp]}
}

