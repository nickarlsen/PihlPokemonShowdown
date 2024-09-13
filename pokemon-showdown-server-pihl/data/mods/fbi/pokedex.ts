// export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = {
// 	bulbasaur: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	ivysaur: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	venusaur: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	charmander: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	charmeleon: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	charizard: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	squirtle: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	wartortle: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	blastoise: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	butterfree: {
// 		inherit: true,
// 		baseStats: {hp: 60, atk: 45, def: 50, spa: 80, spd: 80, spe: 70},
// 	},
// 	beedrill: {
// 		inherit: true,
// 		baseStats: {hp: 65, atk: 80, def: 40, spa: 45, spd: 80, spe: 75},
// 	},
// 	pidgeot: {
// 		inherit: true,
// 		baseStats: {hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 91},
// 	},
// 	pikachu: {
// 		inherit: true,
// 		baseStats: {hp: 35, atk: 55, def: 30, spa: 50, spd: 40, spe: 90},
// 	},
// 	raichu: {
// 		inherit: true,
// 		baseStats: {hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 100},
// 	},
// 	nidoqueen: {
// 		inherit: true,
// 		baseStats: {hp: 90, atk: 82, def: 87, spa: 75, spd: 85, spe: 76},
// 	},
// 	nidoking: {
// 		inherit: true,
// 		baseStats: {hp: 81, atk: 92, def: 77, spa: 85, spd: 75, spe: 85},
// 	},
// 	clefairy: {
// 		inherit: true,
// 		types: ["Normal"],
// 	},
// 	clefable: {
// 		inherit: true,
// 		types: ["Normal"],
// 		baseStats: {hp: 95, atk: 70, def: 73, spa: 85, spd: 90, spe: 60},
// 	},
// 	jigglypuff: {
// 		inherit: true,
// 		types: ["Normal"],
// 		abilities: {0: "Cute Charm", H: "Friend Guard"},
// 	},
// 	wigglytuff: {
// 		inherit: true,
// 		types: ["Normal"],
// 		baseStats: {hp: 140, atk: 70, def: 45, spa: 75, spd: 50, spe: 45},
// 		abilities: {0: "Cute Charm", H: "Frisk"},
// 	},
// 	vileplume: {
// 		inherit: true,
// 		baseStats: {hp: 75, atk: 80, def: 85, spa: 100, spd: 90, spe: 50},
// 	},
// 	poliwrath: {
// 		inherit: true,
// 		baseStats: {hp: 90, atk: 85, def: 95, spa: 70, spd: 90, spe: 70},
// 	},
// 	alakazam: {
// 		inherit: true,
// 		baseStats: {hp: 55, atk: 50, def: 45, spa: 135, spd: 85, spe: 120},
// 	},
// 	victreebel: {
// 		inherit: true,
// 		baseStats: {hp: 80, atk: 105, def: 65, spa: 100, spd: 60, spe: 70},
// 	},
// 	golem: {
// 		inherit: true,
// 		baseStats: {hp: 80, atk: 110, def: 130, spa: 55, spd: 65, spe: 45},
// 	},
// 	mrmime: {
// 		inherit: true,
// 		types: ["Psychic"],
// 	},
// 	articuno: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	zapdos: {
// 		inherit: true,
// 		abilities: {0: "Pressure", H: "Lightning Rod"},
// 		unreleasedHidden: true,
// 	},
// 	moltres: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	chikorita: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	bayleef: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	meganium: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	cyndaquil: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	quilava: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	typhlosion: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	totodile: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	croconaw: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	feraligatr: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	igglybuff: {
// 		inherit: true,
// 		types: ["Normal"],
// 		abilities: {0: "Cute Charm", H: "Friend Guard"},
// 	},
// 	togepi: {
// 		inherit: true,
// 		types: ["Normal"],
// 	},
// 	togetic: {
// 		inherit: true,
// 		types: ["Normal", "Flying"],
// 	},
// 	cleffa: {
// 		inherit: true,
// 		types: ["Normal"],
// 	},
// 	ampharos: {
// 		inherit: true,
// 		baseStats: {hp: 90, atk: 75, def: 75, spa: 115, spd: 90, spe: 55},
// 	},
// 	bellossom: {
// 		inherit: true,
// 		baseStats: {hp: 75, atk: 80, def: 85, spa: 90, spd: 100, spe: 50},
// 	},
// 	marill: {
// 		inherit: true,
// 		types: ["Water"],
// 	},
// 	azumarill: {
// 		inherit: true,
// 		types: ["Water"],
// 		baseStats: {hp: 100, atk: 50, def: 80, spa: 50, spd: 80, spe: 50},
// 	},
// 	jumpluff: {
// 		inherit: true,
// 		baseStats: {hp: 75, atk: 55, def: 70, spa: 55, spd: 85, spe: 110},
// 	},
// 	snubbull: {
// 		inherit: true,
// 		types: ["Normal"],
// 	},
// 	granbull: {
// 		inherit: true,
// 		types: ["Normal"],
// 	},
// 	tyrogue: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	hitmonlee: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	hitmonchan: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	hitmontop: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	treecko: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	grovyle: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	sceptile: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	torchic: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	combusken: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	blaziken: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	mudkip: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	marshtomp: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	swampert: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	beautifly: {
// 		inherit: true,
// 		baseStats: {hp: 60, atk: 70, def: 50, spa: 90, spd: 50, spe: 65},
// 	},
// 	ralts: {
// 		inherit: true,
// 		types: ["Psychic"],
// 	},
// 	kirlia: {
// 		inherit: true,
// 		types: ["Psychic"],
// 	},
// 	gardevoir: {
// 		inherit: true,
// 		types: ["Psychic"],
// 	},
// 	exploud: {
// 		inherit: true,
// 		baseStats: {hp: 104, atk: 91, def: 63, spa: 91, spd: 63, spe: 68},
// 	},
// 	azurill: {
// 		inherit: true,
// 		types: ["Normal"],
// 	},
// 	mawile: {
// 		inherit: true,
// 		types: ["Steel"],
// 	},
// 	plusle: {
// 		inherit: true,
// 		abilities: {0: "Plus"},
// 	},
// 	minun: {
// 		inherit: true,
// 		abilities: {0: "Minus"},
// 	},
// 	kecleon: {
// 		inherit: true,
// 		abilities: {0: "Color Change"},
// 	},
// 	feebas: {
// 		inherit: true,
// 		abilities: {0: "Swift Swim", H: "Adaptability"},
// 	},
// 	milotic: {
// 		inherit: true,
// 		abilities: {0: "Marvel Scale", H: "Cute Charm"},
// 	},
// 	duskull: {
// 		inherit: true,
// 		abilities: {0: "Levitate"},
// 	},
// 	dusclops: {
// 		inherit: true,
// 		abilities: {0: "Pressure"},
// 	},
// 	regirock: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	regice: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	registeel: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	turtwig: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	grotle: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	torterra: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	chimchar: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	monferno: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	infernape: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	piplup: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	prinplup: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	empoleon: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	starly: {
// 		inherit: true,
// 		abilities: {0: "Keen Eye"},
// 	},
// 	staraptor: {
// 		inherit: true,
// 		baseStats: {hp: 85, atk: 120, def: 70, spa: 50, spd: 50, spe: 100},
// 	},
// 	roserade: {
// 		inherit: true,
// 		baseStats: {hp: 60, atk: 70, def: 55, spa: 125, spd: 105, spe: 90},
// 	},
// 	mimejr: {
// 		inherit: true,
// 		types: ["Psychic"],
// 	},
// 	togekiss: {
// 		inherit: true,
// 		types: ["Normal", "Flying"],
// 	},
// 	dusknoir: {
// 		inherit: true,
// 		abilities: {0: "Pressure"},
// 	},
// 	snivy: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	servine: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	serperior: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	tepig: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	pignite: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	emboar: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	oshawott: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	dewott: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	samurott: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	stoutland: {
// 		inherit: true,
// 		baseStats: {hp: 85, atk: 100, def: 90, spa: 45, spd: 90, spe: 80},
// 	},
// 	pansage: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	simisage: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	pansear: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	simisear: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	panpour: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	simipour: {
// 		inherit: true,
// 		maleOnlyHidden: true,
// 	},
// 	unfezant: {
// 		inherit: true,
// 		baseStats: {hp: 80, atk: 105, def: 80, spa: 65, spd: 55, spe: 93},
// 	},
// 	gigalith: {
// 		inherit: true,
// 		baseStats: {hp: 85, atk: 135, def: 130, spa: 60, spd: 70, spe: 25},
// 	},
// 	seismitoad: {
// 		inherit: true,
// 		baseStats: {hp: 105, atk: 85, def: 75, spa: 85, spd: 75, spe: 74},
// 	},
// 	leavanny: {
// 		inherit: true,
// 		baseStats: {hp: 75, atk: 103, def: 80, spa: 70, spd: 70, spe: 92},
// 	},
// 	venipede: {
// 		inherit: true,
// 		abilities: {0: "Poison Point", 1: "Swarm", H: "Quick Feet"},
// 	},
// 	whirlipede: {
// 		inherit: true,
// 		abilities: {0: "Poison Point", 1: "Swarm", H: "Quick Feet"},
// 	},
// 	scolipede: {
// 		inherit: true,
// 		baseStats: {hp: 60, atk: 90, def: 89, spa: 55, spd: 69, spe: 112},
// 		abilities: {0: "Poison Point", 1: "Swarm", H: "Quick Feet"},
// 	},
// 	cottonee: {
// 		inherit: true,
// 		types: ["Grass"],
// 	},
// 	whimsicott: {
// 		inherit: true,
// 		types: ["Grass"],
// 	},
// 	basculinbluestriped: {
// 		inherit: true,
// 		abilities: {0: "Rock Head", 1: "Adaptability", H: "Mold Breaker", S: "Reckless"},
// 	},
// 	krookodile: {
// 		inherit: true,
// 		baseStats: {hp: 95, atk: 117, def: 70, spa: 65, spd: 70, spe: 92},
// 	},
// 	gothita: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	gothorita: {
// 		inherit: true,
// 		abilities: {0: "Frisk", H: "Shadow Tag"},
// 		maleOnlyHidden: true,
// 	},
// 	gothitelle: {
// 		inherit: true,
// 		abilities: {0: "Frisk", H: "Shadow Tag"},
// 		maleOnlyHidden: true,
// 	},
// 	ferrothorn: {
// 		inherit: true,
// 		abilities: {0: "Iron Barbs"},
// 	},
// 	klink: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	litwick: {
// 		inherit: true,
// 		abilities: {0: "Flash Fire", 1: "Flame Body", H: "Shadow Tag"},
// 		unreleasedHidden: true,
// 	},
// 	lampent: {
// 		inherit: true,
// 		abilities: {0: "Flash Fire", 1: "Flame Body", H: "Shadow Tag"},
// 		unreleasedHidden: true,
// 	},
// 	chandelure: {
// 		inherit: true,
// 		abilities: {0: "Flash Fire", 1: "Flame Body", H: "Shadow Tag"},
// 		unreleasedHidden: true,
// 	},
// 	rufflet: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	larvesta: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// 	volcarona: {
// 		inherit: true,
// 		unreleasedHidden: true,
// 	},
// };

// FBI fire red pokedex.ts:
// All pokemon from gen one

export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = {
	bulbasaur: {
		inherit: true,
		types: ["Grass"]
		
	},
	ivysaur: {
		inherit: true,
		maleOnlyHidden: true,
	},
	venusaur: {
		inherit: true,
		maleOnlyHidden: true,
	},
	charmander: {
		inherit: true,
		maleOnlyHidden: true,
	},
	charmeleon: {
		inherit: true,
		maleOnlyHidden: true,
	},
	charizard: {
		inherit: true,
		maleOnlyHidden: true,
		baseStats: {hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100},
	},
	squirtle: {
		inherit: true,
		maleOnlyHidden: true,
	},
	wartortle: {
		inherit: true,
		maleOnlyHidden: true,
	},
	blastoise: {
		inherit: true,
		maleOnlyHidden: true,
	},
	caterpie: {
		inherit: true,
		maleOnlyHidden: true,
	},
	metapod: {
		inherit: true,
		maleOnlyHidden: true,
	},
	butterfree: {
		inherit: true,
		maleOnlyHidden: true,
	},
	weedle: {
		inherit: true,
		maleOnlyHidden: true,
	},
	kakuna: {
		inherit: true,
		maleOnlyHidden: true,
	},
	beedrill: {
		inherit: true,
		maleOnlyHidden: true,
	},
	pidgey: {
		inherit: true,
		maleOnlyHidden: true,
	},
	pidgeotto: {
		inherit: true,
		maleOnlyHidden: true,
	},
	pidgeot: {
		inherit: true,
		maleOnlyHidden: true,
	},
	rattata: {
		inherit: true,
		maleOnlyHidden: true,
	},
	raticate: {
		inherit: true,
		maleOnlyHidden: true,
	},
	spearow: {
		inherit: true,
		maleOnlyHidden: true,
	},
	fearow: {
		inherit: true,
		maleOnlyHidden: true,
	},
	ekans: {
		inherit: true,
		maleOnlyHidden: true,
	},
	arbok: {
		inherit: true,
		maleOnlyHidden: true,
	},
	pikachu: {
		inherit: true,
		maleOnlyHidden: true,
	},
	raichu: {
		inherit: true,
		maleOnlyHidden: true,
	},
	sandshrew: {
		inherit: true,
		maleOnlyHidden: true,
	},
	sandslash: {
		inherit: true,
		maleOnlyHidden: true,
	},
	nidoranm: {
		inherit: true,
		maleOnlyHidden: true,
	},
	nidorina: {
		inherit: true,
		maleOnlyHidden: true,
	},
	nidoqueen: {
		inherit: true,
		maleOnlyHidden: true,
	},
	nidoranf: {
		inherit: true,
		maleOnlyHidden: true,
	},
	nidorino: {
		inherit: true,
		maleOnlyHidden: true,
	},
	nidoking: {
		inherit: true,
		maleOnlyHidden: true,
	},
	clefairy: {
		inherit: true,
		maleOnlyHidden: true,
	},
	clefable: {
		inherit: true,
		maleOnlyHidden: true,
	},
	vulpix: {
		inherit: true,
		maleOnlyHidden: true,
	},
	ninetales: {
		inherit: true,
		maleOnlyHidden: true,
	},
	jigglypuff: {
		inherit: true,
		maleOnlyHidden: true,
	},
	wigglytuff: {
		inherit: true,
		maleOnlyHidden: true,
	},
	zubat: {
		inherit: true,
		maleOnlyHidden: true,
	},
	golbat: {
		inherit: true,
		maleOnlyHidden: true,
	},
	oddish: {
		inherit: true,
		maleOnlyHidden: true,
	},
	gloom: {
		inherit: true,
		maleOnlyHidden: true,
	},
	vileplume: {
		inherit: true,
		maleOnlyHidden: true,
	},
	paras: {
		inherit: true,
		maleOnlyHidden: true,
	},
	parasect: {
		inherit: true,
		maleOnlyHidden: true,
	},
	venonat: {
		inherit: true,
		maleOnlyHidden: true,
	},
	venomoth: {
		inherit: true,
		maleOnlyHidden: true,
	},
	diglett: {
		inherit: true,
		maleOnlyHidden: true,
	},
	dugtrio: {
		inherit: true,
		maleOnlyHidden: true,
	},
	meowth: {
		inherit: true,
		maleOnlyHidden: true,
	},
	persian: {
		inherit: true,
		maleOnlyHidden: true,
	},
	psyduck: {
		inherit: true,
		maleOnlyHidden: true,
	},
	golduck: {
		inherit: true,
		maleOnlyHidden: true,
	},
	mankey: {
		inherit: true,
		maleOnlyHidden: true,
	},
	primeape: {
		inherit: true,
		maleOnlyHidden: true,
	},
	growlithe: {
		inherit: true,
		maleOnlyHidden: true,
	},
	arcanine: {
		inherit: true,
		maleOnlyHidden: true,
	},
	poliwag: {
		inherit: true,
		maleOnlyHidden: true,
	},
	poliwhirl: {
		inherit: true,
		maleOnlyHidden: true,
	},
	poliwrath: {
		inherit: true,
		maleOnlyHidden: true,
	},
	abra: {
		inherit: true,
		maleOnlyHidden: true,
	},
	kadabra: {
		inherit: true,
		maleOnlyHidden: true,
	},
	alakazam: {
		inherit: true,
		maleOnlyHidden: true,
	},
	machop: {
		inherit: true,
		maleOnlyHidden: true,
	},
	machoke: {
		inherit: true,
		maleOnlyHidden: true,
	},
	machamp: {
		inherit: true,
		maleOnlyHidden: true,
	},
	bellsprout: {
		inherit: true,
		maleOnlyHidden: true,
	},
	weepinbell: {
		inherit: true,
		maleOnlyHidden: true,
	},
	victreebel: {
		inherit: true,
		maleOnlyHidden: true,
	},
	tentacool: {
		inherit: true,
		maleOnlyHidden: true,
	},
	tentacruel: {
		inherit: true,
		maleOnlyHidden: true,
	},
	geodude: {
		inherit: true,
		maleOnlyHidden: true,
	},
	graveler: {
		inherit: true,
		maleOnlyHidden: true,
	},
	golem: {
		inherit: true,
		maleOnlyHidden: true,
	},
	ponyta: {
		inherit: true,
		maleOnlyHidden: true,
	},
	rapidash: {
		inherit: true,
		maleOnlyHidden: true,
	},
	slowpoke: {
		inherit: true,
		maleOnlyHidden: true,
	},
	slowbro: {
		inherit: true,
		maleOnlyHidden: true,
	},
	magnemite: {
		inherit: true,
		maleOnlyHidden: true,
	},
	magneton: {
		inherit: true,
		maleOnlyHidden: true,
	},
	farfetchd: {
		inherit: true,
		maleOnlyHidden: true,
	},
	doduo: {
		inherit: true,
		maleOnlyHidden: true,
	},
	dodrio: {
		inherit: true,
		maleOnlyHidden: true,
	},
	seel: {
		inherit: true,
		maleOnlyHidden: true,
	},
	dewgong: {
		inherit: true,
		maleOnlyHidden: true,
	},
	grimer: {
		inherit: true,
		maleOnlyHidden: true,
	},
	muk: {
		inherit: true,
		maleOnlyHidden: true,
	},
	shellder: {
		inherit: true,
		maleOnlyHidden: true,
	},
	cloyster: {
		inherit: true,
		maleOnlyHidden: true,
	},
	gastly: {
		inherit: true,
		maleOnlyHidden: true,
	},
	haunter: {
		inherit: true,
		maleOnlyHidden: true,
	},
	gengar: {
		inherit: true,
		maleOnlyHidden: true,
	},
	onix: {
		inherit: true,
		maleOnlyHidden: true,
	},
	drowzee: {
		inherit: true,
		maleOnlyHidden: true,
	},
	hypno: {
		inherit: true,
		maleOnlyHidden: true,
	},
	krabby: {
		inherit: true,
		maleOnlyHidden: true,
	},
	kingler: {
		inherit: true,
		maleOnlyHidden: true,
	},
	voltorb: {
		inherit: true,
		maleOnlyHidden: true,
	},
	electrode: {
		inherit: true,
		maleOnlyHidden: true,
	},
	exeggcute: {
		inherit: true,
		maleOnlyHidden: true,
	},
	exeggutor: {
		inherit: true,
		maleOnlyHidden: true,
	},
	cubone: {
		inherit: true,
		maleOnlyHidden: true,
	},
	marowak: {
		inherit: true,
		maleOnlyHidden: true,
	},
	hitmonlee: {
		inherit: true,
		maleOnlyHidden: true,
	},
	hitmonchan: {
		inherit: true,
		maleOnlyHidden: true,
	},
	lickitung: {
		inherit: true,
		maleOnlyHidden: true,
	},
	koffing: {
		inherit: true,
		maleOnlyHidden: true,
	},
	weezing: {
		inherit: true,
		maleOnlyHidden: true,
	},
	rhyhorn: {
		inherit: true,
		maleOnlyHidden: true,
	},
	rhydon: {
		inherit: true,
		maleOnlyHidden: true,
	},
	chansey: {
		inherit: true,
		maleOnlyHidden: true,
	},
	tangela: {
		inherit: true,
		maleOnlyHidden: true,
	},
	kangaskhan: {
		inherit: true,
	},
	horsea: {
		inherit: true,
		maleOnlyHidden: true,
	},
	seadra: {
		inherit: true,
		maleOnlyHidden: true,
	},
	goldeen: {
		inherit: true,
		maleOnlyHidden: true,
	},
	seaking: {
		inherit: true,
		maleOnlyHidden: true,
	},
	staryu: {
		inherit: true,
		maleOnlyHidden: true,
	},
	starmie: {
		inherit: true,
		maleOnlyHidden: true,
	},
	mrmime: {
		inherit: true,
		maleOnlyHidden: true,
	},
	scyther: {
		inherit: true,
		maleOnlyHidden: true,
	},
	jynx: {
		inherit: true,
		maleOnlyHidden: true,
	},
	electabuzz: {
		inherit: true,
		maleOnlyHidden: true,
	},
	magmar: {
		inherit: true,
		maleOnlyHidden: true,
	},
	pinsir: {
		inherit: true,
		maleOnlyHidden: true,
	},
	tauros: {
		inherit: true,
		maleOnlyHidden: true,
	},
	magikarp: {
		inherit: true,
		maleOnlyHidden: true,
	},
	gyarados: {
		inherit: true,
		maleOnlyHidden: true,
	},
	lapras: {
		inherit: true,
		maleOnlyHidden: true,
	},
	ditto: {
		inherit: true,
		maleOnlyHidden: true,
	},
	eevee: {
		inherit: true,
		maleOnlyHidden: true,
	},
	vaporeon: {
		inherit: true,
		maleOnlyHidden: true,
	},
	jolteon: {
		inherit: true,
		maleOnlyHidden: true,
	},
	flareon: {
		inherit: true,
		maleOnlyHidden: true,
	},
	porygon: {
		inherit: true,
		maleOnlyHidden: true,
	},
	omanyte: {
		inherit: true,
		maleOnlyHidden: true,
	},
	omastar: {
		inherit: true,
		maleOnlyHidden: true,
	},
	kabuto: {
		inherit: true,
		maleOnlyHidden: true,
	},
	kabutops: {
		inherit: true,
		maleOnlyHidden: true,
	},
	aerodactyl: {
		inherit: true,
		maleOnlyHidden: true,
	},
	snorlax: {
		inherit: true,
		maleOnlyHidden: true,
	},
	articuno: {
		inherit: true,
		maleOnlyHidden: true,
	},
	zapdos: {
		inherit: true,
		maleOnlyHidden: true,
	},
	moltres: {
		inherit: true,
		maleOnlyHidden: true,
	},
	dratini: {
		inherit: true,
		maleOnlyHidden: true,
	},
	dragonair: {
		inherit: true,
		maleOnlyHidden: true,
	},
	dragonite: {
		inherit: true,
		maleOnlyHidden: true,
	},
	mewtwo: {
		inherit: true,
		maleOnlyHidden: true,
	},
	mew: {
		inherit: true,
		maleOnlyHidden: true,
	}
};
	