"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var formats_exports = {};
__export(formats_exports, {
  Formats: () => Formats
});
module.exports = __toCommonJS(formats_exports);
const Formats = [
  // S/V Singles
  ///////////////////////////////////////////////////////////////////
  {
    section: "S/V Singles"
  },
  {
    name: "[Gen 9] Random Battle",
    desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
    mod: "gen9",
    team: "random",
    ruleset: ["PotD", "Obtainable", "Species Clause", "HP Percentage Mod", "Cancel Mod", "Sleep Clause Mod", "Illusion Level Mod"]
  },
  {
    name: "[Gen 9] Unrated Random Battle",
    mod: "gen9",
    team: "random",
    challengeShow: false,
    rated: false,
    ruleset: ["Obtainable", "Species Clause", "HP Percentage Mod", "Cancel Mod", "Sleep Clause Mod", "Illusion Level Mod"]
  },
  {
    name: "[Gen 9] Free-For-All Random Battle",
    mod: "gen9",
    team: "random",
    gameType: "freeforall",
    tournamentShow: false,
    rated: false,
    ruleset: ["Obtainable", "Species Clause", "HP Percentage Mod", "Cancel Mod", "Sleep Clause Mod", "Illusion Level Mod"]
  },
  {
    name: "[Gen 9] Random Battle (Blitz)",
    mod: "gen9",
    team: "random",
    ruleset: ["[Gen 9] Random Battle", "Blitz"]
  },
  {
    name: "[Gen 9] Multi Random Battle",
    mod: "gen9",
    team: "random",
    gameType: "multi",
    searchShow: false,
    tournamentShow: false,
    rated: false,
    ruleset: [
      "Max Team Size = 3",
      "Obtainable",
      "Species Clause",
      "HP Percentage Mod",
      "Cancel Mod",
      "Sleep Clause Mod",
      "Illusion Level Mod"
    ]
  },
  {
    name: "[Gen 9] OU",
    mod: "gen9",
    ruleset: ["Standard", "Sleep Moves Clause", "!Sleep Clause Mod"],
    banlist: ["Uber", "AG", "Arena Trap", "Moody", "Sand Veil", "Shadow Tag", "Snow Cloak", "King's Rock", "Razor Fang", "Baton Pass", "Last Respects", "Shed Tail"]
  },
  {
    name: "[Gen 9] Ubers",
    mod: "gen9",
    ruleset: ["Standard"],
    banlist: ["AG", "Moody", "King's Rock", "Razor Fang", "Baton Pass", "Last Respects"]
  },
  {
    name: "[Gen 9] UU",
    mod: "gen9",
    ruleset: ["[Gen 9] OU"],
    banlist: ["OU", "UUBL"]
  },
  {
    name: "[Gen 9] RU",
    mod: "gen9",
    ruleset: ["[Gen 9] UU"],
    banlist: ["UU", "RUBL", "Light Clay"]
  },
  {
    name: "[Gen 9] NU",
    mod: "gen9",
    ruleset: ["[Gen 9] RU"],
    banlist: ["RU", "NUBL", "Drought", "Quick Claw"]
  },
  {
    name: "[Gen 9] PU",
    mod: "gen9",
    ruleset: ["[Gen 9] NU"],
    banlist: ["NU", "PUBL", "Damp Rock"]
  },
  {
    name: "[Gen 9] LC",
    mod: "gen9",
    ruleset: ["Little Cup", "Standard"],
    banlist: [
      "Aipom",
      "Basculin-White-Striped",
      "Cutiefly",
      "Diglett-Base",
      "Dunsparce",
      "Duraludon",
      "Flittle",
      "Gastly",
      "Girafarig",
      "Gligar",
      "Meditite",
      "Misdreavus",
      "Murkrow",
      "Porygon",
      "Qwilfish-Hisui",
      "Rufflet",
      "Scraggy",
      "Scyther",
      "Sneasel",
      "Sneasel-Hisui",
      "Snivy",
      "Stantler",
      "Vulpix",
      "Vulpix-Alola",
      "Yanma",
      "Moody",
      "Baton Pass",
      "Sticky Web"
    ]
  },
  // {
  // 	name: "[Gen 9] Type Split",
  // 	desc: `The Physical/Special split is reverted; All non-Status moves are Physical or Special depending on their type, no exceptions.`,
  // 	mod: 'gen9',
  // 	searchShow: false,
  // 	ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Evasion Abilities Clause'],
  // 	banlist: [
  // 		'Annihilape', 'Arceus', 'Archaludon', 'Calyrex-Shadow', 'Chi-Yu', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Espathra',
  // 		'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Koraidon', 'Kyogre', 'Kyurem-White', 'Landorus-Incarnate',
  // 		'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regieleki',
  // 		'Reshiram', 'Shaymin-Sky', 'Sneasler', 'Solgaleo', 'Terapagos', 'Volcarona', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Arena Trap', 'Moody', 'Shadow Tag',
  // 		'Bright Powder', 'Damp Rock', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail',
  // 	],
  // 	onModifyMovePriority: -1000,
  // 	onModifyMove(move, pokemon, target) {
  // 		if (move.category === 'Status') return;
  // 		const specialTypes = ['Dark', 'Dragon', 'Electric', 'Fairy', 'Fire', 'Grass', 'Ice', 'Psychic', 'Water'];
  // 		if (specialTypes.includes(move.type)) {
  // 			move.category = 'Special';
  // 		} else if (move.type === 'Stellar') {
  // 			move.category = pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true) ? 'Physical' : 'Special';
  // 		} else {
  // 			move.category = 'Physical';
  // 		}
  // 	},
  // },
  // {
  // 	name: "[Gen 6] Pure Hackmons",
  // 	desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
  // 	mod: 'gen6',
  // 	searchShow: false,
  // 	ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'EV limit = 510'],
  // },
  // // National Dex
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "National Dex",
  // },
  // {
  // 	name: "[Gen 9] National Dex",
  // 	mod: 'gen9',
  // 	ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod'],
  // 	banlist: [
  // 		'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
  // 		'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail',
  // 	],
  // },
  // {
  // 	name: "[Gen 8] National Dex",
  // 	mod: 'gen8',
  // 	ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
  // 	banlist: ['ND Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Quick Claw', 'Baton Pass'],
  // },
  // // National Dex Other Tiers
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "National Dex Other Tiers",
  // },
  // {
  // 	name: "[Gen 9] National Dex Ubers",
  // 	mod: 'gen9',
  // 	ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Mega Rayquaza Clause'],
  // 	banlist: ['ND AG', 'Assist', 'Baton Pass'],
  // },
  // {
  // 	name: "[Gen 9] National Dex UU",
  // 	mod: 'gen9',
  // 	ruleset: ['[Gen 9] National Dex', 'Terastal Clause'],
  // 	banlist: ['ND OU', 'ND UUBL', 'Drizzle', 'Drought', 'Light Clay'],
  // },
  // {
  // 	name: "[Gen 9] National Dex RU",
  // 	mod: 'gen9',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 9] National Dex UU'],
  // 	banlist: ['ND UU', 'ND RUBL', 'Slowbro-Base + Slowbronite'],
  // },
  // {
  // 	name: "[Gen 9] National Dex LC",
  // 	mod: 'gen9',
  // 	searchShow: false,
  // 	ruleset: ['Standard NatDex', 'Little Cup', 'Species Clause', 'OHKO Clause', 'Evasion Clause', 'Sleep Clause Mod'],
  // 	banlist: [
  // 		'Aipom', 'Basculin-White-Striped', 'Clamperl', 'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Dunsparce', 'Duraludon', 'Flittle', 'Girafarig',
  // 		'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Qwilfish-Hisui', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Sneasel-Hisui',
  // 		'Stantler', 'Swirlix', 'Tangela', 'Vulpix-Alola', 'Woobat', 'Yanma', 'Zigzagoon-Base', 'Chlorophyll', 'Moody', 'Eevium Z', 'King\'s Rock',
  // 		'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Sticky Web',
  // 	],
  // },
  // {
  // 	name: "[Gen 9] National Dex Monotype",
  // 	mod: 'gen9',
  // 	ruleset: ['Standard NatDex', 'Same Type Clause', 'Terastal Clause', 'Species Clause', 'OHKO Clause', 'Evasion Clause', 'Sleep Clause Mod'],
  // 	banlist: [
  // 		'Annihilape', 'Arceus', 'Baxcalibur', 'Blastoise-Mega', 'Blaziken', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai',
  // 		'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dracovish', 'Dragapult', 'Espathra', 'Eternatus', 'Flutter Mane', 'Genesect', 'Gengar-Mega', 'Giratina',
  // 		'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Kangaskhan-Mega', 'Kartana', 'Kingambit', 'Koraidon', 'Kyogre',
  // 		'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo',
  // 		'Miraidon', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram',
  // 		'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned',
  // 		'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-50%', 'Zygarde-Complete', 'Moody', 'Shadow Tag', 'Power Construct', 'Booster Energy', 'Damp Rock',
  // 		'Focus Band', 'Icy Rock', 'King\'s Rock', 'Leppa Berry', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Terrain Extender', 'Acupressure', 'Baton Pass',
  // 		'Last Respects', 'Shed Tail',
  // 	],
  // },
  // {
  // 	name: "[Gen 9] National Dex Doubles",
  // 	mod: 'gen9',
  // 	gameType: 'doubles',
  // 	ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'Species Clause', 'Gravity Sleep Clause'],
  // 	banlist: [
  // 		'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dialga-Origin', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
  // 		'Groudon', 'Ho-Oh', 'Koraidon', 'Kyogre', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Melmetal', 'Metagross-Mega', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings',
  // 		'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shedinja', 'Solgaleo', 'Terapagos', 'Urshifu', 'Urshifu-Rapid-Strike',
  // 		'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-50%', 'Zygarde-Complete', 'Commander', 'Power Construct',
  // 		'Assist', 'Coaching', 'Dark Void', 'Swagger',
  // 	],
  // },
  // {
  // 	name: "[Gen 9] National Dex Doubles Ubers",
  // 	mod: 'gen9',
  // 	gameType: 'doubles',
  // 	// searchShow: false,
  // 	ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'Species Clause'],
  // 	banlist: ['Shedinja', 'Assist'],
  // },
  // {
  // 	name: "[Gen 9] National Dex Ubers UU",
  // 	mod: 'gen9',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 9] National Dex Ubers'],
  // 	banlist: [
  // 		'Arceus-Normal', 'Arceus-Dark', 'Arceus-Ground', 'Calyrex-Ice', 'Chansey', 'Deoxys-Attack', 'Ditto', 'Dondozo', 'Eternatus', 'Giratina-Origin', 'Glimmora',
  // 		'Groudon-Primal', 'Ho-Oh', 'Kyogre-Primal', 'Lunala', 'Marshadow', 'Melmetal', 'Mewtwo-Mega-Y', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Rayquaza',
  // 		'Salamence-Mega', 'Smeargle', 'Yveltal', 'Zacian-Crowned', 'Zygarde-50%',
  // 		// UUBL
  // 		'Arceus-Fairy', 'Arceus-Ghost', 'Blaziken-Mega', 'Chi-Yu', 'Flutter Mane', 'Kyogre', 'Kyurem-Black', 'Shaymin-Sky', 'Zacian', 'Zekrom',
  // 		'Power Construct', 'Light Clay', 'Ultranecrozium Z', 'Last Respects',
  // 	],
  // },
  // {
  // 	name: "[Gen 9] National Dex AG",
  // 	mod: 'gen9',
  // 	searchShow: false,
  // 	ruleset: ['Standard NatDex'],
  // },
  // {
  // 	name: "[Gen 9] National Dex BH",
  // 	desc: `Balanced Hackmons with National Dex elements mixed in.`,
  // 	mod: 'gen9',
  // 	searchShow: false,
  // 	ruleset: ['-Nonexistent', 'Standard NatDex', 'Forme Clause', 'Sleep Moves Clause', 'Ability Clause = 2', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'CFZ Clause', 'Terastal Clause', '!Obtainable'],
  // 	banlist: [
  // 		'Cramorant-Gorging', 'Calyrex-Shadow', 'Darmanitan-Galar-Zen', 'Eternatus-Eternamax', 'Greninja-Ash', 'Groudon-Primal', 'Rayquaza-Mega', 'Shedinja', 'Arena Trap',
  // 		'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Pure Power', 'Shadow Tag',
  // 		'Stakeout', 'Water Bubble', 'Wonder Guard', 'Gengarite', 'Berserk Gene', 'Belly Drum', 'Bolt Beak', 'Ceaseless Edge', 'Chatter', 'Double Iron Bash', 'Electrify',
  // 		'Last Respects', 'Octolock', 'Rage Fist', 'Revival Blessing', 'Shed Tail', 'Shell Smash', 'Comatose + Sleep Talk', 'Imprison + Transform',
  // 	],
  // 	restricted: ['Arceus'],
  // 	onValidateTeam(team, format) {
  // 		// baseSpecies:count
  // 		const restrictedPokemonCount = new this.dex.Multiset<string>();
  // 		for (const set of team) {
  // 			const species = this.dex.species.get(set.species);
  // 			if (!this.ruleTable.isRestrictedSpecies(species)) continue;
  // 			restrictedPokemonCount.add(species.baseSpecies);
  // 		}
  // 		for (const [baseSpecies, count] of restrictedPokemonCount) {
  // 			if (count > 1) {
  // 				return [
  // 					`You are limited to one ${baseSpecies} forme.`,
  // 					`(You have ${count} ${baseSpecies} forme${count === 1 ? '' : 's'}.)`,
  // 				];
  // 			}
  // 		}
  // 	},
  // },
  // {
  // 	name: "[Gen 8] National Dex UU",
  // 	mod: 'gen8',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 8] National Dex'],
  // 	banlist: ['ND OU', 'ND UUBL', 'Drizzle', 'Drought', 'Light Clay', 'Slowbronite'],
  // },
  // {
  // 	name: "[Gen 8] National Dex Monotype",
  // 	mod: 'gen8',
  // 	searchShow: false,
  // 	ruleset: ['Standard NatDex', 'Same Type Clause', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
  // 	banlist: [
  // 		'Arceus', 'Blastoise-Mega', 'Blaziken', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dracovish', 'Dragapult',
  // 		'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Greninja-Bond', 'Greninja-Ash', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana',
  // 		'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Moltres-Galar',
  // 		'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier',
  // 		'Urshifu-Single-Strike', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-50%', 'Zygarde-Complete', 'Battle Bond',
  // 		'Power Construct', 'Moody', 'Shadow Tag', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
  // 	],
  // },
  // // Randomized Format Spotlight
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "Randomized Format Spotlight",
  // 	column: 3,
  // },
  // {
  // 	name: "[Gen 9] Random Battle (Shared Power, B12P6)",
  // 	desc: `[Gen 9] Random Battle with Shared Power, Team Preview, and Bring 12 Pick 6.`,
  // 	mod: 'sharedpower',
  // 	team: 'random',
  // 	ruleset: ['[Gen 9] Random Battle', 'Picked Team Size = 6', 'Max Team Size = 12', 'Team Preview'],
  // 	onValidateRule() {
  // 		if (this.format.gameType !== 'singles') {
  // 			throw new Error(`Shared Power currently does not support ${this.format.gameType} battles.`);
  // 		}
  // 	},
  // 	onBeforeSwitchIn(pokemon) {
  // 		let format = this.format;
  // 		if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
  // 		for (const ability of format.getSharedPower!(pokemon)) {
  // 			const effect = 'ability:' + ability;
  // 			pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
  // 			if (!pokemon.m.abils) pokemon.m.abils = [];
  // 			if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
  // 		}
  // 	},
  // 	onSwitchInPriority: 2,
  // 	onSwitchIn(pokemon) {
  // 		let format = this.format;
  // 		if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
  // 		for (const ability of format.getSharedPower!(pokemon)) {
  // 			if (ability === 'noability') {
  // 				this.hint(`Mirror Armor and Trace break in Shared Power formats that don't use Shared Power as a base, so they get removed from non-base users.`);
  // 			}
  // 			const effect = 'ability:' + ability;
  // 			delete pokemon.volatiles[effect];
  // 			pokemon.addVolatile(effect);
  // 		}
  // 	},
  // },
  // // Randomized Metas
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "Randomized Metas",
  // 	column: 3,
  // },
  // {
  // 	name: "[Gen 9] Random Roulette",
  // 	desc: `Random Battles in a random generation! [Gen 1] Random Battle - [Gen 9] Random Battle.`,
  // 	mod: 'randomroulette',
  // 	team: 'random',
  // 	searchShow: false,
  // },
  // {
  // 	name: "[Gen 9] Super Staff Bros Ultimate",
  // 	desc: "The fifth iteration of Super Staff Bros is here! Battle with a random team of pokemon created by the sim staff.",
  // 	mod: 'gen9ssb',
  // 	debug: true,
  // 	team: 'randomStaffBros',
  // 	ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
  // 	onBegin() {
  // 		// TODO look into making an event to put this right after turn|1
  // 		// https://discordapp.com/channels/630837856075513856/630845310033330206/716126469528485909
  // 		// Requires client change
  // 		this.add(`raw|<div class='broadcast-green'><b>Wondering what all these custom moves, abilities, and items do?<br />Check out the <a href="https://www.smogon.com/articles/super-staff-bros-ultimate" target="_blank">Super Staff Bros: Ultimate Guide</a> or use /ssb to find out!</b></div>`);
  // 		if (this.ruleTable.has('dynamaxclause')) {
  // 			// Old joke format we're bringing back
  // 			this.add('message', 'Fox only');
  // 			this.add('message', 'No items');
  // 			this.add('message', 'Final Destination');
  // 			return;
  // 		}
  // 		this.add('message', 'EVERYONE IS HERE!');
  // 		this.add('message', 'FIGHT!');
  // 	},
  // 	onSwitchInPriority: 100,
  // 	onSwitchIn(pokemon) {
  // 		let name: string = this.toID(pokemon.illusion ? pokemon.illusion.name : pokemon.name);
  // 		if (this.dex.species.get(name).exists || this.dex.moves.get(name).exists ||
  // 			this.dex.abilities.get(name).exists || name === 'blitz') {
  // 			// Certain pokemon have volatiles named after their id
  // 			// To prevent overwriting those, and to prevent accidentaly leaking
  // 			// that a pokemon is on a team through the onStart even triggering
  // 			// at the start of a match, users with pokemon names will need their
  // 			// statuses to end in "user".
  // 			name = name + 'user';
  // 		}
  // 		// Add the mon's status effect to it as a volatile.
  // 		const status = this.dex.conditions.get(name);
  // 		if (status?.exists) {
  // 			pokemon.addVolatile(name, pokemon);
  // 		}
  // 		if ((pokemon.illusion || pokemon).getTypes(true, true).join('/') !==
  // 			this.dex.forGen(9).species.get((pokemon.illusion || pokemon).species.name).types.join('/') &&
  // 			!pokemon.terastallized) {
  // 			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
  // 		}
  // 	},
  // },
  // {
  // 	name: "[Gen 9] Monotype Random Battle",
  // 	mod: 'gen9',
  // 	team: 'random',
  // 	ruleset: ['Obtainable', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
  // },
  // {
  // 	name: "[Gen 9] Random Battle Mayhem",
  // 	desc: `[Gen 9] Random Battle with Team Preview and elements of Camomons, Inverse, Scalemons, and Shared Power.`,
  // 	mod: 'sharedpower',
  // 	team: 'random',
  // 	ruleset: ['[Gen 9] Random Battle', 'Team Preview', 'Camomons Mod', 'Inverse Mod', 'Scalemons Mod'],
  // 	onValidateRule() {
  // 		if (this.format.gameType !== 'singles') {
  // 			throw new Error(`Shared Power currently does not support ${this.format.gameType} battles.`);
  // 		}
  // 	},
  // 	onBeforeSwitchIn(pokemon) {
  // 		let format = this.format;
  // 		if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
  // 		for (const ability of format.getSharedPower!(pokemon)) {
  // 			const effect = 'ability:' + ability;
  // 			pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
  // 			if (!pokemon.m.abils) pokemon.m.abils = [];
  // 			if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
  // 		}
  // 	},
  // 	onSwitchInPriority: 2,
  // 	onSwitchIn(pokemon) {
  // 		let format = this.format;
  // 		if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
  // 		for (const ability of format.getSharedPower!(pokemon)) {
  // 			if (ability === 'noability') {
  // 				this.hint(`Mirror Armor and Trace break in Shared Power formats that don't use Shared Power as a base, so they get removed from non-base users.`);
  // 			}
  // 			const effect = 'ability:' + ability;
  // 			delete pokemon.volatiles[effect];
  // 			pokemon.addVolatile(effect);
  // 		}
  // 	},
  // },
  // {
  // 	name: "[Gen 9] BSS Factory",
  // 	desc: `Randomized 3v3 Singles featuring Pok&eacute;mon and movesets popular in Battle Stadium Singles.`,
  // 	mod: 'gen9',
  // 	team: 'randomBSSFactory',
  // 	ruleset: ['Flat Rules', 'VGC Timer'],
  // },
  // {
  // 	name: "[Gen 9] Baby Random Battle",
  // 	mod: 'gen9',
  // 	team: 'randomBaby',
  // 	ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
  // },
  // {
  // 	name: "[Gen 9] Computer-Generated Teams",
  // 	desc: `Teams generated automatically based on heuristics (rules), with levels based on previous success/failure in battle. ` +
  // 		`Not affiliated with Random Battles formats. Some sets will by nature be worse than others, but you can report egregiously bad sets ` +
  // 		`with <a href="https://forms.gle/DYwQN5qGVegz3YU38">this form</a>.`,
  // 	mod: 'gen9',
  // 	team: 'computerGenerated',
  // 	ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
  // },
  // {
  // 	name: "[Gen 9] Hackmons Cup",
  // 	desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item.`,
  // 	mod: 'gen9',
  // 	team: 'randomHC',
  // 	ruleset: ['HP Percentage Mod', 'Cancel Mod'],
  // 	banlist: ['CAP', 'LGPE', 'MissingNo.', 'Pikachu-Cosplay', 'Pichu-Spiky-eared', 'Pokestar Smeargle', 'Pokestar UFO', 'Pokestar UFO-2', 'Pokestar Brycen-Man', 'Pokestar MT', 'Pokestar MT2', 'Pokestar Transport', 'Pokestar Giant', 'Pokestar Humanoid', 'Pokestar Monster', 'Pokestar F-00', 'Pokestar F-002', 'Pokestar Spirit', 'Pokestar Black Door', 'Pokestar White Door', 'Pokestar Black Belt', 'Pokestar UFO-PropU2', 'Xerneas-Neutral'],
  // 	unbanlist: ['All Pokemon'],
  // },
  // {
  // 	name: "[Gen 9] Doubles Hackmons Cup",
  // 	desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item. Now with TWICE the Pok&eacute;mon per side!`,
  // 	mod: 'gen9',
  // 	team: 'randomHC',
  // 	searchShow: false,
  // 	gameType: 'doubles',
  // 	ruleset: ['[Gen 9] Hackmons Cup'],
  // },
  // {
  // 	name: "[Gen 9] Broken Cup",
  // 	desc: `[Gen 9] Hackmons Cup but with only the most powerful Pok&eacute;mon, moves, abilities, and items.`,
  // 	team: 'randomHC',
  // 	searchShow: false,
  // 	ruleset: ['HP Percentage Mod', 'Cancel Mod'],
  // 	banlist: ['All Pokemon', 'All Abilities', 'All Items', 'All Moves'],
  // 	unbanlist: [
  // 		'10,000,000 Volt Thunderbolt', 'Abomasnow-Mega', 'Absol-Mega', 'Accelerock', 'Acid Spray', 'Adaptability', 'Aeroblast',
  // 		'Aerodactyl-Mega', 'Aftermath', 'Aggron', 'Aggron-Mega', 'Aguav Berry', 'Air Balloon', 'Air Slash', 'Alakazam-Mega',
  // 		'Alluring Voice', 'Altaria-Mega', 'Ampharos-Mega', 'Analytic', 'Anchor Shot', 'Anger Shell', 'Annihilape', 'Anticipation',
  // 		'Apple Acid', 'Aqua Step', 'Arcanine', 'Arcanine-Hisui', 'Archaludon', 'Archeops', 'Arena Trap', 'Armarouge', 'Armor Cannon',
  // 		'Aromatherapy', 'Articuno', 'Articuno-Galar', 'As One (Glastrier)', 'As One (Spectrier)', 'Assault Vest', 'Astral Barrage',
  // 		'Attack Order', 'Audino-Mega', 'Aura Sphere', 'Axe Kick', 'Azelf', 'Baddy Bad', 'Baneful Bunker', 'Banette-Mega',
  // 		'Barb Barrage', 'Basculegion', 'Basculegion-F', 'Baton Pass', 'Baxcalibur', 'Beads of Ruin', 'Beak Blast', 'Beast Boost',
  // 		'Behemoth Bash', 'Behemoth Blade', 'Belly Drum', 'Berserk', 'Bitter Blade', 'Bitter Malice', 'Blacephalon', 'Blastoise',
  // 		'Blastoise-Mega', 'Blaziken', 'Blaziken-Mega', 'Blazing Torque', 'Bleakwind Storm', 'Blissey', 'Blizzard', 'Blood Moon',
  // 		'Blue Flare', 'Blunder Policy', 'Body Press', 'Body Slam', 'Bolt Beak', 'Bolt Strike', 'Boomburst', 'Bouncy Bubble',
  // 		'Brave Bird', 'Bright Powder', 'Brute Bonnet', 'Bug Buzz', 'Bullet Punch', 'Burning Bulwark', 'Buzzwole', 'Buzzy Buzz',
  // 		'Calm Mind', 'Calyrex-Ice', 'Calyrex-Shadow', 'Camerupt-Mega', 'Catastropika', 'Ceaseless Edge', 'Celebi', 'Celesteela',
  // 		'Centiskorch', 'Ceruledge', 'Charizard', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Chatter', 'Chesnaught', 'Chesto Berry',
  // 		'Chi-Yu', 'Chien-Pao', 'Chilan Berry', 'Chilling Neigh', 'Chilly Reception', 'Choice Band', 'Choice Scarf', 'Choice Specs',
  // 		'Cinderace', 'Circle Throw', 'Clanging Scales', 'Clangorous Soul', 'Clangorous Soulblaze', 'Clear Amulet', 'Clear Body',
  // 		'Clear Smog', 'Close Combat', 'Cloyster', 'Cobalion', 'Coil', 'Collision Course', 'Comatose', 'Combat Torque', 'Competitive',
  // 		'Compound Eyes', 'Contrary', 'Core Enforcer', 'Cosmic Power', 'Cotton Guard', 'Court Change', 'Covert Cloak', 'Crabhammer',
  // 		'Cresselia', 'Crobat', 'Cross Chop', 'Curse', 'Custap Berry', 'Dark Pulse', 'Darkest Lariat', 'Darkrai',
  // 		'Darmanitan-Galar-Zen', 'Darmanitan-Zen', 'Decidueye', 'Decidueye-Hisui', 'Defend Order', 'Defiant', 'Defog', 'Delphox',
  // 		'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Desolate Land', 'Dialga', 'Dialga-Origin', 'Diamond Storm',
  // 		'Diancie', 'Diancie-Mega', 'Dire Claw', 'Disable', 'Discharge', 'Dondozo', 'Doom Desire', 'Double Iron Bash', 'Download',
  // 		'Draco Meteor', 'Draco Plate', 'Dragapult', 'Dragon Ascent', 'Dragon Dance', 'Dragon Darts', 'Dragon Energy', 'Dragon Hammer',
  // 		'Dragon Pulse', 'Dragon Tail', 'Dragonite', 'Drain Punch', 'Dread Plate', 'Drill Peck', 'Drizzle', 'Drought', 'Drum Beating',
  // 		'Dry Skin', 'Duraludon', 'Dusknoir', 'Dynamax Cannon', 'Earth Eater', 'Earth Plate', 'Earth Power', 'Earthquake',
  // 		'Eerie Spell', 'Effect Spore', 'Eject Pack', 'Electivire', 'Electric Surge', 'Electro Drift', 'Emboar', 'Empoleon',
  // 		'Enamorus', 'Enamorus-Therian', 'Encore', 'Energy Ball', 'Entei', 'Eruption', 'Espeon', 'Esper Wing', 'Eternatus',
  // 		'Eternatus-Eternamax', 'Exeggutor', 'Exeggutor-Alola', 'Expanding Force', 'Expert Belt', 'Explosion', 'Extreme Evoboost',
  // 		'Extreme Speed', 'Fake Out', 'Feraligatr', 'Fezandipiti', 'Fickle Beam', 'Fiery Wrath', 'Figy Berry', 'Filter',
  // 		'Fire Blast', 'Fire Lash', 'First Impression', 'Fishious Rend', 'Fist Plate', 'Flame Body', 'Flame Charge', 'Flame Plate',
  // 		'Flamethrower', 'Flare Blitz', 'Flareon', 'Flash Cannon', 'Fleur Cannon', 'Flip Turn', 'Floaty Fall', 'Florges',
  // 		'Flower Trick', 'Fluffy', 'Flutter Mane', 'Focus Blast', 'Focus Sash', 'Forewarn', 'Foul Play', 'Freeze-Dry', 'Freezing Glare',
  // 		'Freezy Frost', 'Frost Breath', 'Full Metal Body', 'Fur Coat', 'Fusion Bolt', 'Fusion Flare', 'Future Sight', 'G-Max Befuddle',
  // 		'G-Max Cannonade', 'G-Max Centiferno', 'G-Max Resonance', 'G-Max Steelsurge', 'G-Max Stonesurge', 'G-Max Sweetness',
  // 		'G-Max Vine Lash', 'G-Max Volcalith', 'G-Max Wildfire', 'G-Max Wind Rage', 'Gallade-Mega', 'Garchomp', 'Garchomp-Mega',
  // 		'Gardevoir-Mega', 'Gear Grind', 'Genesect', 'Genesis Supernova', 'Gengar-Mega', 'Gholdengo', 'Giga Drain', 'Gigaton Hammer',
  // 		'Giratina', 'Giratina-Origin', 'Glaceon', 'Glacial Lance', 'Glaive Rush', 'Glalie-Mega', 'Glare', 'Glastrier', 'Glimmora',
  // 		'Glitzy Glow', 'Gogoat', 'Golisopod', 'Good as Gold', 'Goodra', 'Goodra-Hisui', 'Gooey', 'Gorilla Tactics', 'Gouging Fire',
  // 		'Grassy Surge', 'Grav Apple', 'Great Tusk', 'Greninja', 'Greninja-Ash', 'Grim Neigh', 'Groudon', 'Groudon-Primal',
  // 		'Guardian of Alola', 'Gunk Shot', 'Guzzlord', 'Gyarados', 'Gyarados-Mega', 'Hadron Engine', 'Hammer Arm', 'Haxorus',
  // 		'Haze', 'Head Charge', 'Head Smash', 'Headlong Rush', 'Heal Bell', 'Heal Order', 'Healing Wish', 'Heart Swap', 'Heat Crash',
  // 		'Heat Wave', 'Heatran', 'Heavy-Duty Boots', 'Heracross-Mega', 'High Horsepower', 'High Jump Kick', 'Hippowdon', 'Ho-Oh',
  // 		'Hone Claws', 'Hoopa', 'Hoopa-Unbound', 'Horn Leech', 'Houndoom-Mega', 'Huge Power', 'Hurricane', 'Hustle', 'Hydreigon',
  // 		'Hydrapple', 'Hydro Pump', 'Hydro Steam', 'Hyper Drill', 'Iapapa Berry', 'Ice Beam', 'Ice Hammer', 'Ice Scales', 'Ice Shard',
  // 		'Ice Spinner', 'Icicle Plate', 'Illusion', 'Imposter', 'Incineroar', 'Infernape', 'Innards Out', 'Insect Plate', 'Inteleon',
  // 		'Intimidate', 'Intrepid Sword', 'Iron Barbs', 'Iron Boulder', 'Iron Bundle', 'Iron Crown', 'Iron Hands', 'Iron Head',
  // 		'Iron Jugulis', 'Iron Leaves', 'Iron Moth', 'Iron Plate', 'Iron Tail', 'Iron Thorns', 'Iron Treads', 'Iron Valiant',
  // 		'Ivy Cudgel', 'Jet Punch', 'Jirachi', 'Jolteon', 'Judgment', 'Jungle Healing', 'Kangaskhan-Mega', 'Kartana', 'Keldeo',
  // 		'Keldeo-Resolute', 'King\'s Rock', 'King\'s Shield', 'Kingambit', 'Kingdra', 'Knock Off', 'Kommo-o', 'Koraidon', 'Kyogre',
  // 		'Kyogre-Primal', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus', 'Landorus-Therian', 'Lapras', 'Last Respects', 'Latias',
  // 		'Latias-Mega', 'Latios', 'Latios-Mega', 'Lava Plume', 'Leaf Blade', 'Leaf Storm', 'Leafeon', 'Leech Life', 'Leech Seed',
  // 		'Leftovers', 'Leppa Berry', 'Let\'s Snuggle Forever', 'Levitate', 'Libero', 'Liechi Berry', 'Life Orb', 'Light Screen',
  // 		'Light That Burns the Sky', 'Light of Ruin', 'Lightning Rod', 'Liquidation', 'Lopunny-Mega', 'Lovely Kiss', 'Low Kick',
  // 		'Lucario', 'Lucario-Mega', 'Lugia', 'Lum Berry', 'Lumina Crash', 'Lunala', 'Lunar Blessing', 'Lunar Dance', 'Lunge',
  // 		'Luster Purge', 'Mach Punch', 'Magearna', 'Magic Bounce', 'Magic Guard', 'Magical Torque', 'Magma Storm', 'Magmortar',
  // 		'Magnezone', 'Mago Berry', 'Make It Rain', 'Malicious Moonsault', 'Malignant Chain', 'Mamoswine', 'Manaphy', 'Manectric-Mega',
  // 		'Marshadow', 'Marvel Scale', 'Matcha Gotcha', 'Max Guard', 'Meadow Plate', 'Megahorn', 'Meganium', 'Melmetal', 'Meloetta',
  // 		'Meloetta-Pirouette', 'Memento', 'Menacing Moonraze Maelstrom', 'Mental Herb', 'Meowscarada', 'Mesprit', 'Metagross',
  // 		'Metagross-Mega', 'Meteor Mash', 'item: Metronome', 'Mew', 'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Mighty Cleave',
  // 		'Milk Drink', 'Milotic', 'Mind Plate', 'Mind\'s Eye', 'Minimize', 'Miraidon', 'Mirror Herb', 'Mist Ball', 'Misty Surge',
  // 		'Mold Breaker', 'Moltres', 'Moltres-Galar', 'Moody', 'Moonblast', 'Moongeist Beam', 'Moonlight', 'Morning Sun', 'Mortal Spin',
  // 		'Mountain Gale', 'Moxie', 'Multiscale', 'Munkidori', 'Muscle Band', 'Mystical Fire', 'Mystical Power', 'Naganadel',
  // 		'Nasty Plot', 'Natural Cure', 'Nature\'s Madness', 'Necrozma', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra',
  // 		'Neuroforce', 'Neutralizing Gas', 'Night Daze', 'Night Shade', 'Nihilego', 'No Retreat', 'Noivern', 'Noxious Torque',
  // 		'Nuzzle', 'Oblivion Wing', 'Obstruct', 'Oceanic Operetta', 'Octolock', 'Ogerpon', 'Ogerpon-Cornerstone', 'Ogerpon-Hearthflame',
  // 		'Ogerpon-Wellspring', 'Okidogi', 'Opportunist', 'Orichalcum Pulse', 'Origin Pulse', 'Outrage', 'Overdrive', 'Overheat',
  // 		'Pain Split', 'Palafin-Hero', 'Palkia', 'Palkia-Origin', 'Parental Bond', 'Parting Shot', 'Pecharunt', 'Perish Body',
  // 		'Perish Song', 'Petaya Berry', 'Pheromosa', 'Photon Geyser', 'Pidgeot-Mega', 'Pinsir-Mega', 'Pixie Plate', 'Plasma Fists',
  // 		'Play Rough', 'Poison Heal', 'Poison Point', 'Poison Touch', 'Pollen Puff', 'Poltergeist', 'Population Bomb', 'Porygon-Z',
  // 		'Power Gem', 'Power Trip', 'Power Whip', 'Prankster', 'Precipice Blades', 'Primarina', 'Primordial Sea', 'Prism Armor',
  // 		'Probopass', 'Protean', 'Protect', 'Psyblade', 'Psychic Fangs', 'Psychic Surge', 'Psychic', 'Psycho Boost', 'Psyshield Bash',
  // 		'Psystrike', 'Pulverizing Pancake', 'Pure Power', 'Purifying Salt', 'Pursuit', 'Pyro Ball', 'Quaquaval', 'Quick Claw',
  // 		'Quiver Dance', 'Rage Fist', 'Raging Bolt', 'Raging Bull', 'Raging Fury', 'Raikou', 'Rapid Spin', 'Rayquaza', 'Rayquaza-Mega',
  // 		'Razor Claw', 'Recover', 'Red Card', 'Reflect', 'Regenerator', 'Regice', 'Regidrago', 'Regieleki', 'Regigigas', 'Regirock',
  // 		'Registeel', 'Reshiram', 'Rest', 'Revelation Dance', 'Revival Blessing', 'Rhyperior', 'Rillaboom', 'Roar', 'Roaring Moon',
  // 		'Rocky Helmet', 'Roost', 'Rough Skin', 'Ruination', 'Sacred Fire', 'Sacred Sword', 'Salac Berry', 'Salamence', 'Salamence-Mega',
  // 		'Salt Cure', 'Samurott', 'Samurott-Hisui', 'Sandsear Storm', 'Sandy Shocks', 'Sap Sipper', 'Sappy Seed', 'Scald', 'Sceptile',
  // 		'Sceptile-Mega', 'Scizor-Mega', 'Scope Lens', 'Scream Tail', 'Searing Shot', 'Searing Sunraze Smash', 'Secret Sword',
  // 		'Seed Flare', 'Seismic Toss', 'Serene Grace', 'Serperior', 'Shadow Ball', 'Shadow Bone', 'Shadow Shield', 'Shadow Sneak',
  // 		'Shadow Tag', 'Sharpedo-Mega', 'Shaymin', 'Shaymin-Sky', 'Shed Skin', 'Shed Tail', 'Sheer Force', 'Shell Side Arm',
  // 		'Shell Smash', 'Shield Dust', 'Shift Gear', 'Silk Scarf', 'Silk Trap', 'Silvally', 'Simple', 'Sinister Arrow Raid',
  // 		'Sitrus Berry', 'Sizzly Slide', 'Skeledirge', 'Sky Plate', 'Slack Off', 'Slaking', 'Sleep Powder', 'Slither Wing',
  // 		'Slowbro-Mega', 'Sludge Bomb', 'Sludge Wave', 'Snarl', 'Snipe Shot', 'Snorlax', 'Soft-Boiled', 'Solgaleo', 'Solid Rock',
  // 		'Soul-Heart', 'Soul-Stealing 7-Star Strike', 'Spacial Rend', 'Sparkly Swirl', 'Spectral Thief', 'Spectrier', 'Speed Boost',
  // 		'Spikes', 'Spiky Shield', 'Spin Out', 'Spirit Break', 'Spirit Shackle', 'Splash Plate', 'Splintered Stormshards',
  // 		'Splishy Splash', 'Spooky Plate', 'Spore', 'Springtide Storm', 'Stakataka', 'Stakeout', 'Stamina', 'Static', 'Stealth Rock',
  // 		'Steam Eruption', 'Steelix-Mega', 'Sticky Web', 'Stoked Sparksurfer', 'Stone Axe', 'Stone Edge', 'Stone Plate', 'Stored Power',
  // 		'Storm Drain', 'Storm Throw', 'Strange Steam', 'Strength Sap', 'Sturdy', 'Sucker Punch', 'Suicune', 'Sunsteel Strike',
  // 		'Super Fang', 'Supercell Slam', 'Superpower', 'Supreme Overlord', 'Surf', 'Surging Strikes', 'Swampert', 'Swampert-Mega',
  // 		'Sword of Ruin', 'Swords Dance', 'Sylveon', 'Synthesis', 'Tablets of Ruin', 'Tachyon Cutter', 'Tail Glow', 'Tangling Hair',
  // 		'Tangrowth', 'Tapu Bulu', 'Tapu Fini', 'Tapu Koko', 'Tapu Lele', 'Taunt', 'Techno Blast', 'Teleport', 'Tera Blast',
  // 		'Tera Starstorm', 'Terapagos-Stellar', 'Terapagos-Terastal', 'Teravolt', 'Terrakion', 'Thermal Exchange', 'Thick Fat',
  // 		'Thousand Arrows', 'Thousand Waves', 'Throat Spray', 'Thunder Cage', 'Thunder Wave', 'Thunder', 'Thunderbolt', 'Thunderclap',
  // 		'Thunderous Kick', 'Thundurus', 'Thundurus-Therian', 'Tidy Up', 'Ting-Lu', 'Tinted Lens', 'Togekiss', 'Topsy-Turvy',
  // 		'Torch Song', 'Tornadus', 'Tornadus-Therian', 'Torterra', 'Tough Claws', 'Toxic Chain', 'Toxic Debris', 'Toxic Plate',
  // 		'Toxic Spikes', 'Toxic', 'Tri Attack', 'Triage', 'Triple Arrows', 'Triple Axel', 'Turboblaze', 'Type: Null', 'Typhlosion',
  // 		'Typhlosion-Hisui', 'Tyranitar', 'Tyranitar-Mega', 'U-turn', 'Umbreon', 'Unaware', 'Unburden', 'Ursaluna', 'Ursaluna-Bloodmoon',
  // 		'Urshifu', 'Urshifu-Rapid-Strike', 'Uxie', 'V-create', 'Vanilluxe', 'Vaporeon', 'Venusaur', 'Venusaur-Mega', 'Vessel of Ruin',
  // 		'Victini', 'Victory Dance', 'Virizion', 'Volcanion', 'Volcarona', 'Volt Absorb', 'Volt Switch', 'Volt Tackle', 'Walking Wake',
  // 		'Walrein', 'Water Absorb', 'Water Bubble', 'Water Shuriken', 'Water Spout', 'Waterfall', 'Wave Crash', 'Weakness Policy',
  // 		'Well-Baked Body', 'Whirlwind', 'White Herb', 'Wicked Blow', 'Wicked Torque', 'Wide Lens', 'Wiki Berry', 'Wild Charge',
  // 		'Wildbolt Storm', 'Will-O-Wisp', 'Wise Glasses', 'Wish', 'Wishiwashi-School', 'Wo-Chien', 'Wonder Guard', 'Wood Hammer',
  // 		'Wyrdeer', 'Xerneas', 'Xurkitree', 'Yawn', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zap Plate',
  // 		'Zapdos', 'Zapdos-Galar', 'Zarude', 'Zekrom', 'Zeraora', 'Zing Zap', 'Zippy Zap', 'Zygarde', 'Zygarde-Complete',
  // 	],
  // },
  // {
  // 	name: "[Gen 9] Challenge Cup 1v1",
  // 	desc: `Get a randomized team of level-balanced Pok&eacute;mon with absolutely any legal ability, moves, and item, and choose one to battle.`,
  // 	mod: 'gen9',
  // 	team: 'randomCC',
  // 	ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Terastal Clause', 'Picked Team Size = 1'],
  // },
  // {
  // 	name: "[Gen 9] Challenge Cup 2v2",
  // 	desc: `Get a randomized team of level-balanced Pok&eacute;mon with absolutely any legal ability, moves, and item, and choose two to battle in a doubles format.`,
  // 	mod: 'gen9',
  // 	team: 'randomCC',
  // 	gameType: 'doubles',
  // 	ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Picked Team Size = 2'],
  // },
  // {
  // 	name: "[Gen 9] Challenge Cup 6v6",
  // 	desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any legal ability, moves, and item.`,
  // 	mod: 'gen9',
  // 	team: 'randomCC',
  // 	searchShow: false,
  // 	ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
  // },
  // {
  // 	name: "[Gen 9] Metronome Battle",
  // 	mod: 'gen9',
  // 	gameType: 'doubles',
  // 	ruleset: ['Max Team Size = 2', 'HP Percentage Mod', 'Cancel Mod'],
  // 	banlist: [
  // 		'Pokestar Spirit', 'Terapagos', 'Shedinja + Sturdy', 'Cheek Pouch', 'Commander', 'Cursed Body', 'Dry Skin', 'Earth Eater', 'Fur Coat', 'Gorilla Tactics',
  // 		'Grassy Surge', 'Huge Power', 'Ice Body', 'Iron Barbs', 'Moody', 'Neutralizing Gas', 'Opportunist', 'Parental Bond', 'Perish Body', 'Poison Heal',
  // 		'Power Construct', 'Pressure', 'Pure Power', 'Rain Dish', 'Rough Skin', 'Sand Spit', 'Sand Stream', 'Seed Sower', 'Stamina', 'Toxic Chain', 'Volt Absorb',
  // 		'Water Absorb', 'Wonder Guard', 'Harvest + Jaboca Berry', 'Harvest + Rowap Berry', 'Aguav Berry', 'Assault Vest', 'Berry', 'Berry Juice', 'Berserk Gene',
  // 		'Black Sludge', 'Enigma Berry', 'Figy Berry', 'Gold Berry', 'Iapapa Berry', 'Kangaskhanite', 'Leftovers', 'Mago Berry', 'Medichamite', 'Steel Memory',
  // 		'Oran Berry', 'Rocky Helmet', 'Shell Bell', 'Sitrus Berry', 'Wiki Berry',
  // 	],
  // 	onValidateSet(set) {
  // 		const species = this.dex.species.get(set.species);
  // 		if (species.types.includes('Steel')) {
  // 			return [`${species.name} is a Steel-type, which is banned from Metronome Battle.`];
  // 		}
  // 		if (set.teraType === 'Steel') {
  // 			return [`${species.name} has Steel as its Tera type, which is banned from Metronome Battle.`];
  // 		}
  // 		if (species.bst > 625) {
  // 			return [`${species.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
  // 		}
  // 		const item = this.dex.items.get(set.item);
  // 		if (set.item && item.megaStone) {
  // 			const megaSpecies = this.dex.species.get(item.megaStone);
  // 			if (species.baseSpecies === item.megaEvolves && megaSpecies.bst > 625) {
  // 				return [
  // 					`${set.name || set.species}'s item ${item.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`,
  // 				];
  // 			}
  // 		}
  // 		if (set.moves.length !== 1 || this.dex.moves.get(set.moves[0]).id !== 'metronome') {
  // 			return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
  // 		}
  // 	},
  // },
  // {
  // 	name: "[Gen 8] Random Battle",
  // 	desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
  // 	mod: 'gen8',
  // 	team: 'random',
  // 	ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
  // },
  // {
  // 	name: "[Gen 8] Random Doubles Battle",
  // 	mod: 'gen8',
  // 	gameType: 'doubles',
  // 	team: 'random',
  // 	ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Illusion Level Mod'],
  // },
  // {
  // 	name: "[Gen 8] Free-For-All Random Battle",
  // 	mod: 'gen8',
  // 	team: 'random',
  // 	gameType: 'freeforall',
  // 	// searchShow: false,
  // 	tournamentShow: false,
  // 	rated: false,
  // 	ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
  // },
  // {
  // 	name: "[Gen 8] Multi Random Battle",
  // 	mod: 'gen8',
  // 	team: 'random',
  // 	gameType: 'multi',
  // 	searchShow: false,
  // 	tournamentShow: false,
  // 	rated: false,
  // 	ruleset: [
  // 		'Max Team Size = 3',
  // 		'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod',
  // 	],
  // },
  // {
  // 	name: "[Gen 8] Battle Factory",
  // 	desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,
  // 	mod: 'gen8',
  // 	team: 'randomFactory',
  // 	ruleset: ['Standard', 'Dynamax Clause'],
  // 	onBegin() {
  // 		this.add(`raw|<div class="broadcast-blue"><b>Battle Factory Tier: ${this.teamGenerator.factoryTier}</b></div>`);
  // 	},
  // },
  // {
  // 	name: "[Gen 8] BSS Factory",
  // 	desc: `Randomized 3v3 Singles featuring Pok&eacute;mon and movesets popular in Battle Stadium Singles.`,
  // 	mod: 'gen8',
  // 	team: 'randomBSSFactory',
  // 	searchShow: false,
  // 	ruleset: ['Flat Rules'],
  // },
  // {
  // 	name: "[Gen 8] Hackmons Cup",
  // 	desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item.`,
  // 	mod: 'gen8',
  // 	team: 'randomHC',
  // 	ruleset: ['HP Percentage Mod', 'Cancel Mod'],
  // 	banlist: ['Nonexistent'],
  // },
  // {
  // 	name: "[Gen 8] Metronome Battle",
  // 	mod: 'gen8',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	ruleset: ['Max Team Size = 2', 'HP Percentage Mod', 'Cancel Mod'],
  // 	banlist: [
  // 		'Pokestar Spirit', 'Shedinja + Sturdy', 'Battle Bond', 'Cheek Pouch', 'Cursed Body', 'Dry Skin', 'Fur Coat', 'Gorilla Tactics', 'Grassy Surge',
  // 		'Huge Power', 'Ice Body', 'Iron Barbs', 'Libero', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Perish Body', 'Poison Heal', 'Power Construct',
  // 		'Pressure', 'Protean', 'Pure Power', 'Rain Dish', 'Rough Skin', 'Sand Spit', 'Sand Stream', 'Snow Warning', 'Stamina', 'Volt Absorb', 'Water Absorb',
  // 		'Wonder Guard', 'Abomasite', 'Aguav Berry', 'Assault Vest', 'Berry', 'Berry Juice', 'Berserk Gene', 'Black Sludge', 'Enigma Berry', 'Figy Berry',
  // 		'Gold Berry', 'Iapapa Berry', 'Kangaskhanite', 'Leftovers', 'Mago Berry', 'Medichamite', 'Steel Memory', 'Oran Berry', 'Rocky Helmet', 'Shell Bell',
  // 		'Sitrus Berry', 'Wiki Berry', 'Harvest + Jaboca Berry', 'Harvest + Rowap Berry',
  // 	],
  // 	onValidateSet(set) {
  // 		const species = this.dex.species.get(set.species);
  // 		if (species.gen > 8) {
  // 			return [`${species.name} is from gen 9, which is banned from [Gen 8] Metronome Battle.`];
  // 		}
  // 		if (species.types.includes('Steel')) {
  // 			return [`${species.name} is a Steel-type, which is banned from Metronome Battle.`];
  // 		}
  // 		if (species.bst > 625) {
  // 			return [`${species.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
  // 		}
  // 		const item = this.dex.items.get(set.item);
  // 		if (item.gen > 8) {
  // 			return [`${species.name} is from gen 9, which is banned from [Gen 8] Metronome Battle.`];
  // 		}
  // 		if (set.item && item.megaStone) {
  // 			const megaSpecies = this.dex.species.get(item.megaStone);
  // 			if (species.baseSpecies === item.megaEvolves && megaSpecies.bst > 625) {
  // 				return [
  // 					`${set.name || set.species}'s item ${item.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`,
  // 				];
  // 			}
  // 		}
  // 		const ability = this.dex.abilities.get(set.ability);
  // 		if (ability.gen > 8) {
  // 			return [`${species.name} is from gen 9, which is banned from [Gen 8] Metronome Battle.`];
  // 		}
  // 		if (set.moves.length !== 1 || this.dex.moves.get(set.moves[0]).id !== 'metronome') {
  // 			return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
  // 		}
  // 	},
  // },
  // {
  // 	name: "[Gen 8] CAP 1v1",
  // 	desc: `Randomly generated 1v1-style teams only including Pok&eacute;mon made by the Create-A-Pok&eacute;mon Project.`,
  // 	mod: 'gen8',
  // 	searchShow: false,
  // 	team: 'randomCAP1v1',
  // 	ruleset: [
  // 		'Picked Team Size = 1',
  // 		'Max Team Size = 3',
  // 		'Species Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause',
  // 	],
  // },
  // {
  // 	name: "[Gen 8 BDSP] Random Battle",
  // 	desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
  // 	mod: 'gen8bdsp',
  // 	team: 'random',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 8] Random Battle', '!PotD'],
  // },
  // {
  // 	name: "[Gen 7] Random Battle",
  // 	desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
  // 	mod: 'gen7',
  // 	team: 'random',
  // 	ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Illusion Level Mod'],
  // },
  // {
  // 	name: "[Gen 7] Battle Factory",
  // 	desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,
  // 	mod: 'gen7',
  // 	team: 'randomFactory',
  // 	ruleset: ['Obtainable', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
  // 	onBegin() {
  // 		this.add(`raw|<div class="broadcast-blue"><b>Battle Factory Tier: ${this.teamGenerator.factoryTier}</b></div>`);
  // 	},
  // },
  // {
  // 	name: "[Gen 7] BSS Factory",
  // 	desc: `Randomized 3v3 Singles featuring Pok&eacute;mon and movesets popular in Battle Spot Singles.`,
  // 	mod: 'gen7',
  // 	team: 'randomBSSFactory',
  // 	searchShow: false,
  // 	ruleset: ['Flat Rules'],
  // },
  // {
  // 	name: "[Gen 7] Hackmons Cup",
  // 	desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item.`,
  // 	mod: 'gen7',
  // 	team: 'randomHC',
  // 	searchShow: false,
  // 	ruleset: ['HP Percentage Mod', 'Cancel Mod'],
  // 	banlist: ['Nonexistent'],
  // },
  // {
  // 	name: "[Gen 7 Let's Go] Random Battle",
  // 	mod: 'gen7letsgo',
  // 	team: 'random',
  // 	searchShow: false,
  // 	ruleset: ['Obtainable', 'Allow AVs', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
  // },
  // {
  // 	name: "[Gen 6] Random Battle",
  // 	mod: 'gen6',
  // 	team: 'random',
  // 	ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Illusion Level Mod'],
  // },
  // {
  // 	name: "[Gen 6] Battle Factory",
  // 	desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,
  // 	mod: 'gen6',
  // 	team: 'randomFactory',
  // 	searchShow: false,
  // 	challengeShow: false,
  // 	ruleset: ['Obtainable', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
  // 	onBegin() {
  // 		this.add(`raw|<div class="broadcast-blue"><b>Battle Factory Tier: ${this.teamGenerator.factoryTier}</b></div>`);
  // 	},
  // },
  // {
  // 	name: "[Gen 5] Random Battle",
  // 	mod: 'gen5',
  // 	team: 'random',
  // 	ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Illusion Level Mod'],
  // },
  // {
  // 	name: "[Gen 4] Random Battle",
  // 	mod: 'gen4',
  // 	team: 'random',
  // 	ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
  // },
  // {
  // 	name: "[Gen 3] Random Battle",
  // 	mod: 'gen3',
  // 	team: 'random',
  // 	ruleset: ['Standard'],
  // },
  // {
  // 	name: "[Gen 2] Random Battle",
  // 	mod: 'gen2',
  // 	team: 'random',
  // 	ruleset: ['Standard'],
  // },
  // {
  // 	name: "[Gen 1] Random Battle",
  // 	mod: 'gen1',
  // 	team: 'random',
  // 	ruleset: ['Standard'],
  // },
  // {
  // 	name: "[Gen 1] Challenge Cup",
  // 	desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any legal moves.`,
  // 	mod: 'gen1',
  // 	team: 'randomCC',
  // 	searchShow: false,
  // 	challengeShow: false,
  // 	ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Sleep Clause Mod', 'Freeze Clause Mod'],
  // },
  // {
  // 	name: "[Gen 1] Hackmons Cup",
  // 	desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any moves, types, and stats.`,
  // 	mod: 'gen1',
  // 	team: 'randomHC',
  // 	searchShow: false,
  // 	challengeShow: false,
  // 	ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Team Type Preview'],
  // 	banlist: ['Nonexistent'],
  // 	onModifySpecies(species, target, source, effect) {
  // 		if (!target) return;
  // 		return {...species, ...(target.set as any).hc};
  // 	},
  // 	onSwitchIn(pokemon) {
  // 		this.add('-start', pokemon, 'typechange', pokemon.getTypes(true).join('/'), '[silent]');
  // 		for (const i in pokemon.species.baseStats) {
  // 			if (i === 'spd') continue;
  // 			this.add('-start', pokemon, `${pokemon.species.baseStats[i as keyof StatsTable]}${i === 'spa' ? 'spc' : i}`, '[silent]');
  // 		}
  // 	},
  // },
  // // RoA Spotlight
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "RoA Spotlight",
  // 	column: 4,
  // },
  // {
  // 	name: "[Gen 2] Ubers",
  // 	mod: 'gen2',
  // 	// searchShow: false,
  // 	ruleset: ['Standard'],
  // },
  // {
  // 	name: "[Gen 4] NU",
  // 	mod: 'gen4',
  // 	// searchShow: false,
  // 	ruleset: ['[Gen 4] UU', 'Baton Pass Clause'],
  // 	banlist: ['UU', 'NUBL'],
  // 	unbanlist: ['Sand Veil', 'Baton Pass'],
  // },
  // {
  // 	name: "[Gen 3] PU",
  // 	mod: 'gen3',
  // 	// searchShow: false,
  // 	ruleset: ['Standard', 'Baton Pass Stat Clause'],
  // 	banlist: ['Uber', 'OU', 'UUBL', 'UU', 'NUBL', 'NU', 'PUBL'],
  // },
  // // Past Gens OU
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "Past Gens OU",
  // 	column: 4,
  // },
  // {
  // 	name: "[Gen 8] OU",
  // 	mod: 'gen8',
  // 	ruleset: ['Standard', 'Dynamax Clause'],
  // 	banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass'],
  // },
  // {
  // 	name: "[Gen 7] OU",
  // 	mod: 'gen7',
  // 	ruleset: ['Standard'],
  // 	banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
  // },
  // {
  // 	name: "[Gen 6] OU",
  // 	mod: 'gen6',
  // 	ruleset: ['Standard', 'Swagger Clause'],
  // 	banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'Soul Dew', 'Baton Pass'],
  // },
  // {
  // 	name: "[Gen 5] OU",
  // 	mod: 'gen5',
  // 	ruleset: ['Standard', 'Evasion Abilities Clause', 'Sleep Moves Clause', 'Swagger Clause', 'Gems Clause', 'Baton Pass Stat Clause'],
  // 	banlist: ['Uber', 'Arena Trap', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Rush', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Soul Dew', 'Acupressure', 'Assist'],
  // },
  // {
  // 	name: "[Gen 4] OU",
  // 	mod: 'gen4',
  // 	ruleset: ['Standard', 'Evasion Abilities Clause', 'Baton Pass Stat Trap Clause', 'Freeze Clause Mod'],
  // 	banlist: ['AG', 'Uber', 'Arena Trap', 'Quick Claw', 'Soul Dew', 'Swagger'],
  // },
  // {
  // 	name: "[Gen 3] OU",
  // 	mod: 'gen3',
  // 	ruleset: ['Standard', 'One Boost Passer Clause', 'Freeze Clause Mod'],
  // 	banlist: ['Uber', 'Smeargle + Ingrain', 'Sand Veil', 'Soundproof', 'Assist', 'Baton Pass + Block', 'Baton Pass + Mean Look', 'Baton Pass + Spider Web', 'Swagger'],
  // },
  // {
  // 	name: "[Gen 2] OU",
  // 	mod: 'gen2',
  // 	ruleset: ['Standard'],
  // 	banlist: ['Uber', 'Mean Look + Baton Pass', 'Spider Web + Baton Pass'],
  // },
  // {
  // 	name: "[Gen 1] OU",
  // 	mod: 'gen1',
  // 	ruleset: ['Standard'],
  // 	banlist: ['Uber'],
  // },
  // // Past Gens Doubles OU
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "Past Gens Doubles OU",
  // 	column: 4,
  // },
  // {
  // 	name: "[Gen 8] Doubles OU",
  // 	mod: 'gen8',
  // 	gameType: 'doubles',
  // 	ruleset: ['Standard Doubles', 'Dynamax Clause', 'Swagger Clause'],
  // 	banlist: ['DUber', 'Power Construct', 'Shadow Tag'],
  // },
  // {
  // 	name: "[Gen 7] Doubles OU",
  // 	mod: 'gen7',
  // 	gameType: 'doubles',
  // 	ruleset: ['Standard Doubles', 'Swagger Clause'],
  // 	banlist: ['DUber', 'Power Construct', 'Eevium Z', 'Dark Void'],
  // },
  // {
  // 	name: "[Gen 6] Doubles OU",
  // 	mod: 'gen6',
  // 	gameType: 'doubles',
  // 	ruleset: ['Standard Doubles', 'Swagger Clause'],
  // 	banlist: ['DUber', 'Soul Dew', 'Dark Void'],
  // },
  // {
  // 	name: "[Gen 5] Doubles OU",
  // 	mod: 'gen5',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	ruleset: ['Standard', 'Evasion Abilities Clause', 'Swagger Clause', 'Sleep Clause Mod'],
  // 	banlist: ['DUber', 'Soul Dew', 'Dark Void', 'Gravity'],
  // },
  // {
  // 	name: "[Gen 4] Doubles OU",
  // 	mod: 'gen4',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	ruleset: ['Standard', 'Evasion Abilities Clause'],
  // 	banlist: ['AG', 'Uber', 'Soul Dew', 'Dark Void'],
  // 	unbanlist: ['Manaphy', 'Mew', 'Salamence', 'Wobbuffet', 'Wynaut'],
  // },
  // {
  // 	name: "[Gen 3] Doubles OU",
  // 	mod: 'gen3',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	ruleset: ['Standard', '!Switch Priority Clause Mod'],
  // 	banlist: ['Uber', 'Quick Claw', 'Soul Dew', 'Swagger'],
  // 	unbanlist: ['Wobbuffet', 'Wynaut'],
  // },
  // // Sw/Sh Singles
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "Sw/Sh Singles",
  // 	column: 4,
  // },
  // {
  // 	name: "[Gen 8] Ubers",
  // 	mod: 'gen8',
  // 	searchShow: false,
  // 	ruleset: ['Standard', 'Dynamax Clause'],
  // 	banlist: ['AG', 'Shadow Tag', 'Baton Pass'],
  // },
  // {
  // 	name: "[Gen 8] UU",
  // 	mod: 'gen8',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 8] OU'],
  // 	banlist: ['OU', 'UUBL', 'Light Clay'],
  // },
  // {
  // 	name: "[Gen 8] RU",
  // 	mod: 'gen8',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 8] UU'],
  // 	banlist: ['UU', 'RUBL'],
  // },
  // {
  // 	name: "[Gen 8] NU",
  // 	mod: 'gen8',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 8] RU'],
  // 	banlist: ['RU', 'NUBL', 'Drizzle', 'Drought', 'Slush Rush'],
  // },
  // {
  // 	name: "[Gen 8] PU",
  // 	mod: 'gen8',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 8] NU'],
  // 	banlist: ['NU', 'PUBL'],
  // },
  // {
  // 	name: "[Gen 8] LC",
  // 	mod: 'gen8',
  // 	searchShow: false,
  // 	ruleset: ['Little Cup', 'Standard', 'Dynamax Clause'],
  // 	banlist: [
  // 		'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Magby', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Swirlix',
  // 		'Tangela', 'Vulpix-Alola', 'Woobat', 'Zigzagoon-Base', 'Chlorophyll', 'Moody', 'Baton Pass', 'Sticky Web',
  // 	],
  // },
  // {
  // 	name: "[Gen 8] Monotype",
  // 	desc: `All the Pok&eacute;mon on a team must share a type.`,
  // 	mod: 'gen8',
  // 	searchShow: false,
  // 	ruleset: ['Same Type Clause', 'Standard', 'Evasion Abilities Clause', 'Dynamax Clause'],
  // 	banlist: [
  // 		'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dracovish', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
  // 		'Kartana', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mewtwo', 'Naganadel',
  // 		'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Urshifu-Single-Strike', 'Xerneas',
  // 		'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-50%', 'Moody', 'Power Construct', 'Shadow Tag',
  // 		'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Smooth Rock', 'Terrain Extender', 'Acupressure', 'Baton Pass',
  // 	],
  // },
  // {
  // 	name: "[Gen 8] 1v1",
  // 	desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
  // 	mod: 'gen8',
  // 	searchShow: false,
  // 	ruleset: [
  // 		'Picked Team Size = 1', 'Max Team Size = 3',
  // 		'Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Endless Battle Clause',
  // 	],
  // 	banlist: [
  // 		'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Dialga', 'Dragonite', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Jirachi',
  // 		'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mew', 'Mewtwo', 'Mimikyu', 'Necrozma', 'Necrozma-Dawn-Wings',
  // 		'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Sableye', 'Snorlax', 'Solgaleo', 'Victini', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned',
  // 		'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Power Construct', 'Bright Powder', 'Focus Band', 'Focus Sash', 'Lax Incense', 'Quick Claw',
  // 		'Acupressure', 'Hypnosis', 'Perish Song', 'Sing',
  // 	],
  // },
  // {
  // 	name: "[Gen 8] Anything Goes",
  // 	mod: 'gen8',
  // 	searchShow: false,
  // 	ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
  // },
  // {
  // 	name: "[Gen 8] ZU",
  // 	desc: `The unofficial usage-based tier below PU.`,
  // 	mod: 'gen8',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 8] PU'],
  // 	banlist: ['PU', 'ZUBL', 'Damp Rock', 'Grassy Seed'],
  // },
  // {
  // 	name: "[Gen 8] CAP",
  // 	mod: 'gen8',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 8] OU', '+CAP'],
  // 	banlist: ['Crucibellite'],
  // },
  // {
  // 	name: "[Gen 8] Battle Stadium Singles",
  // 	mod: 'gen8',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'VGC Timer', 'Limit Two Restricted'],
  // 	restricted: ['Restricted Legendary'],
  // },
  // {
  // 	name: "[Gen 8 BDSP] OU",
  // 	mod: 'gen8bdsp',
  // 	searchShow: false,
  // 	ruleset: ['Standard', 'Evasion Abilities Clause'],
  // 	banlist: ['Uber', 'Arena Trap', 'Drizzle', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Baton Pass'],
  // },
  // {
  // 	name: "[Gen 8 BDSP] Ubers",
  // 	mod: 'gen8bdsp',
  // 	searchShow: false,
  // 	ruleset: ['Standard'],
  // 	banlist: ['AG', 'Baton Pass'],
  // },
  // {
  // 	name: "[Gen 8] Custom Game",
  // 	mod: 'gen8',
  // 	searchShow: false,
  // 	debug: true,
  // 	battle: {trunc: Math.trunc},
  // 	// no restrictions, for serious (other than team preview)
  // 	ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
  // },
  // // Sw/Sh Doubles
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "Sw/Sh Doubles",
  // 	column: 4,
  // },
  // {
  // 	name: "[Gen 8] Doubles Ubers",
  // 	mod: 'gen8',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
  // 	banlist: [],
  // },
  // {
  // 	name: "[Gen 8] Doubles UU",
  // 	mod: 'gen8',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 8] Doubles OU'],
  // 	banlist: ['DOU', 'DBL'],
  // },
  // {
  // 	name: "[Gen 8] VGC 2022",
  // 	mod: 'gen8',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'VGC Timer', 'Limit Two Restricted'],
  // 	restricted: ['Restricted Legendary'],
  // },
  // {
  // 	name: "[Gen 8] VGC 2021",
  // 	mod: 'gen8',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'VGC Timer'],
  // },
  // {
  // 	name: "[Gen 8] VGC 2020",
  // 	mod: 'gen8dlc1',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'VGC Timer'],
  // },
  // {
  // 	name: "[Gen 8 BDSP] Doubles OU",
  // 	mod: 'gen8bdsp',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	ruleset: ['Standard Doubles'],
  // 	banlist: ['DUber', 'Dark Void'],
  // },
  // {
  // 	name: "[Gen 8 BDSP] Battle Festival Doubles",
  // 	mod: 'gen8bdsp',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	ruleset: ['Flat Rules', 'Min Source Gen = 8'],
  // },
  // {
  // 	name: "[Gen 8] Doubles Custom Game",
  // 	mod: 'gen8',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	battle: {trunc: Math.trunc},
  // 	debug: true,
  // 	// no restrictions, for serious (other than team preview)
  // 	ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
  // },
  // // US/UM Singles
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "US/UM Singles",
  // 	column: 4,
  // },
  // {
  // 	name: "[Gen 7] Ubers",
  // 	mod: 'gen7',
  // 	searchShow: false,
  // 	ruleset: ['Standard', 'Mega Rayquaza Clause'],
  // 	banlist: ['Baton Pass'],
  // },
  // {
  // 	name: "[Gen 7] UU",
  // 	mod: 'gen7',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 7] OU'],
  // 	banlist: ['OU', 'UUBL', 'Drizzle', 'Drought', 'Kommonium Z', 'Mewnium Z'],
  // },
  // {
  // 	name: "[Gen 7] RU",
  // 	mod: 'gen7',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 7] UU'],
  // 	banlist: ['UU', 'RUBL', 'Mimikyu', 'Aurora Veil'],
  // 	unbanlist: ['Drought'],
  // },
  // {
  // 	name: "[Gen 7] NU",
  // 	mod: 'gen7',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 7] RU'],
  // 	banlist: ['RU', 'NUBL', 'Drought'],
  // },
  // {
  // 	name: "[Gen 7] PU",
  // 	mod: 'gen7',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 7] NU'],
  // 	banlist: ['NU', 'PUBL'],
  // },
  // {
  // 	name: "[Gen 7] LC",
  // 	mod: 'gen7',
  // 	searchShow: false,
  // 	ruleset: ['Little Cup', 'Standard', 'Swagger Clause'],
  // 	banlist: [
  // 		'Aipom', 'Cutiefly', 'Drifloon', 'Gligar', 'Gothita', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon',
  // 		'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Trapinch', 'Vulpix-Base', 'Wingull', 'Yanma',
  // 		'Eevium Z', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Sticky Web',
  // 	],
  // },
  // {
  // 	name: "[Gen 7] Monotype",
  // 	desc: `All the Pok&eacute;mon on a team must share a type.`,
  // 	mod: 'gen7',
  // 	searchShow: false,
  // 	ruleset: ['Same Type Clause', 'Standard', 'Evasion Abilities Clause', 'Swagger Clause'],
  // 	banlist: [
  // 		'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
  // 		'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana', 'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna',
  // 		'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
  // 		'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tapu Lele', 'Xerneas', 'Yveltal', 'Zekrom', 'Zygarde',
  // 		'Battle Bond', 'Shadow Tag', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
  // 	],
  // },
  // {
  // 	name: "[Gen 7] 1v1",
  // 	desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
  // 	mod: 'gen7',
  // 	searchShow: false,
  // 	ruleset: [
  // 		'Picked Team Size = 1', 'Max Team Size = 3',
  // 		'Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Swagger Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause',
  // 	],
  // 	banlist: [
  // 		'Arceus', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon',
  // 		'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mew', 'Mewtwo',
  // 		'Mimikyu', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky',
  // 		'Snorlax', 'Solgaleo', 'Tapu Koko', 'Xerneas', 'Yveltal', 'Zekrom', 'Moody', 'Focus Sash', 'Grass Whistle', 'Hypnosis',
  // 		'Perish Song', 'Sing', 'Detect + Fightinium Z',
  // 	],
  // },
  // {
  // 	name: "[Gen 7] Anything Goes",
  // 	mod: 'gen7',
  // 	searchShow: false,
  // 	ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
  // },
  // {
  // 	name: "[Gen 7] ZU",
  // 	desc: `The unofficial usage-based tier below PU.`,
  // 	mod: 'gen7',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 7] PU'],
  // 	banlist: ['PU', 'ZUBL'],
  // },
  // {
  // 	name: "[Gen 7] CAP",
  // 	mod: 'gen7',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 7] OU', '+CAP'],
  // },
  // {
  // 	name: "[Gen 7] Battle Spot Singles",
  // 	mod: 'gen7',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	ruleset: ['Flat Rules', 'Min Source Gen = 6'],
  // 	banlist: ['Battle Bond'],
  // },
  // {
  // 	name: "[Gen 7 Let's Go] OU",
  // 	mod: 'gen7letsgo',
  // 	searchShow: false,
  // 	ruleset: ['Standard'],
  // 	banlist: ['Uber'],
  // },
  // {
  // 	name: "[Gen 7] Custom Game",
  // 	mod: 'gen7',
  // 	searchShow: false,
  // 	debug: true,
  // 	battle: {trunc: Math.trunc},
  // 	// no restrictions, for serious (other than team preview)
  // 	ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
  // },
  // // US/UM Doubles
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "US/UM Doubles",
  // 	column: 4,
  // },
  // {
  // 	name: "[Gen 7] Doubles UU",
  // 	mod: 'gen7',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 7] Doubles OU'],
  // 	banlist: ['DOU', 'DBL'],
  // },
  // {
  // 	name: "[Gen 7] VGC 2019",
  // 	mod: 'gen7',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 7', 'VGC Timer', 'Limit Two Restricted'],
  // 	restricted: ['Restricted Legendary'],
  // 	banlist: ['Unown', 'Battle Bond'],
  // },
  // {
  // 	name: "[Gen 7] VGC 2018",
  // 	mod: 'gen7',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	timer: {
  // 		starting: 5 * 60,
  // 		addPerTurn: 0,
  // 		maxPerTurn: 55,
  // 		maxFirstTurn: 90,
  // 		grace: 90,
  // 		timeoutAutoChoose: true,
  // 		dcTimerBank: false,
  // 	},
  // 	ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 7'],
  // 	banlist: ['Oranguru + Symbiosis', 'Passimian + Defiant', 'Unown', 'Custap Berry', 'Enigma Berry', 'Jaboca Berry', 'Micle Berry', 'Rowap Berry', 'Battle Bond'],
  // },
  // {
  // 	name: "[Gen 7] VGC 2017",
  // 	mod: 'gen7sm',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	timer: {
  // 		starting: 15 * 60,
  // 		addPerTurn: 0,
  // 		maxPerTurn: 55,
  // 		maxFirstTurn: 90,
  // 		grace: 90,
  // 		timeoutAutoChoose: true,
  // 		dcTimerBank: false,
  // 	},
  // 	ruleset: ['Flat Rules', 'Old Alola Pokedex', '!! Adjust Level = 50', 'Min Source Gen = 7'],
  // 	banlist: ['Mega', 'Custap Berry', 'Enigma Berry', 'Jaboca Berry', 'Micle Berry', 'Rowap Berry'],
  // },
  // {
  // 	name: "[Gen 7] Battle Spot Doubles",
  // 	mod: 'gen7',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	ruleset: ['Flat Rules', 'Min Source Gen = 6'],
  // 	banlist: ['Battle Bond'],
  // },
  // {
  // 	name: "[Gen 7 Let's Go] Doubles OU",
  // 	mod: 'gen7letsgo',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	ruleset: ['Standard Doubles', 'Sleep Clause Mod'],
  // 	banlist: ['DUber'],
  // },
  // {
  // 	name: "[Gen 7] Doubles Custom Game",
  // 	mod: 'gen7',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	battle: {trunc: Math.trunc},
  // 	debug: true,
  // 	// no restrictions, for serious (other than team preview)
  // 	ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
  // },
  // // OR/AS Singles
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "OR/AS Singles",
  // 	column: 4,
  // },
  // {
  // 	name: "[Gen 6] Ubers",
  // 	mod: 'gen6',
  // 	searchShow: false,
  // 	ruleset: ['Standard', 'Swagger Clause', 'Mega Rayquaza Clause'],
  // },
  // {
  // 	name: "[Gen 6] UU",
  // 	mod: 'gen6',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 6] OU'],
  // 	banlist: ['OU', 'UUBL', 'Drizzle', 'Drought'],
  // },
  // {
  // 	name: "[Gen 6] RU",
  // 	mod: 'gen6',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 6] UU'],
  // 	banlist: ['UU', 'RUBL'],
  // },
  // {
  // 	name: "[Gen 6] NU",
  // 	mod: 'gen6',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 6] RU'],
  // 	banlist: ['RU', 'NUBL'],
  // },
  // {
  // 	name: "[Gen 6] PU",
  // 	mod: 'gen6',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 6] NU'],
  // 	banlist: ['NU', 'PUBL', 'Chatter'],
  // },
  // {
  // 	name: "[Gen 6] LC",
  // 	mod: 'gen6',
  // 	searchShow: false,
  // 	ruleset: ['Standard', 'Little Cup'],
  // 	banlist: [
  // 		'Drifloon', 'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Yanma',
  // 		'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger',
  // 	],
  // },
  // {
  // 	name: "[Gen 6] Monotype",
  // 	desc: `All the Pok&eacute;mon on a team must share a type.`,
  // 	mod: 'gen6',
  // 	searchShow: false,
  // 	ruleset: ['Standard', 'Swagger Clause', 'Evasion Abilities Clause', 'Same Type Clause'],
  // 	banlist: [
  // 		'Aegislash', 'Altaria-Mega', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Genesect', 'Gengar-Mega',
  // 		'Giratina', 'Giratina-Origin', 'Greninja', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Keldeo', 'Kyogre', 'Kyurem-White', 'Lucario-Mega',
  // 		'Lugia', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Sableye-Mega', 'Salamence-Mega', 'Shaymin-Sky',
  // 		'Slowbro-Mega', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom', 'Shadow Tag', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang',
  // 		'Smooth Rock', 'Soul Dew', 'Baton Pass',
  // 	],
  // },
  // {
  // 	name: "[Gen 6] 1v1",
  // 	desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
  // 	mod: 'gen6',
  // 	searchShow: false,
  // 	ruleset: [
  // 		'Max Team Size = 3', 'Picked Team Size = 1', 'Obtainable', 'Nickname Clause', 'Moody Clause', 'OHKO Clause',
  // 		'Evasion Moves Clause', 'Accuracy Moves Clause', 'Swagger Clause', 'Endless Battle Clause', 'HP Percentage Mod',
  // 		'Cancel Mod', 'Team Preview',
  // 	],
  // 	banlist: [
  // 		'Arceus', 'Blaziken-Mega', 'Charizard-Mega-Y', 'Deoxys-Normal', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina',
  // 		'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia',
  // 		'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Snorlax', 'Xerneas', 'Yveltal', 'Zekrom', 'Focus Sash',
  // 		'Soul Dew', 'Dark Void', 'Grass Whistle', 'Hypnosis', 'Perish Song', 'Sing', 'Sleep Powder', 'Yawn',
  // 	],
  // },
  // {
  // 	name: "[Gen 6] Anything Goes",
  // 	mod: 'gen6',
  // 	searchShow: false,
  // 	ruleset: ['Obtainable', 'Team Preview', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
  // },
  // {
  // 	name: "[Gen 6] ZU",
  // 	mod: 'gen6',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 6] PU'],
  // 	banlist: ['PU', 'ZUBL'],
  // },
  // {
  // 	name: "[Gen 6] CAP",
  // 	mod: 'gen6',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 6] OU', '+CAP'],
  // 	banlist: ['Cawmodore'],
  // },
  // {
  // 	name: "[Gen 6] Battle Spot Singles",
  // 	mod: 'gen6',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	ruleset: ['Flat Rules', 'Min Source Gen = 6'],
  // 	banlist: ['Soul Dew'],
  // },
  // {
  // 	name: "[Gen 6] Custom Game",
  // 	mod: 'gen6',
  // 	searchShow: false,
  // 	debug: true,
  // 	battle: {trunc: Math.trunc},
  // 	// no restrictions, for serious (other than team preview)
  // 	ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
  // },
  // // OR/AS Doubles/Triples
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "OR/AS Doubles/Triples",
  // 	column: 4,
  // },
  // {
  // 	name: "[Gen 6] VGC 2016",
  // 	mod: 'gen6',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	ruleset: ['Flat Rules', 'Min Source Gen = 6', 'Limit Two Restricted'],
  // 	restricted: ['Restricted Legendary'],
  // 	banlist: ['Soul Dew'],
  // },
  // {
  // 	name: "[Gen 6] VGC 2015",
  // 	mod: 'gen6',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	ruleset: ['Flat Rules', 'Min Source Gen = 6'],
  // 	banlist: ['Soul Dew', 'Articuno + Snow Cloak', 'Zapdos + Static', 'Moltres + Flame Body', 'Dragonite + Barrier'],
  // },
  // {
  // 	name: "[Gen 6] VGC 2014",
  // 	mod: 'gen6xy',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	ruleset: ['Flat Rules', 'Kalos Pokedex', 'Min Source Gen = 6'],
  // },
  // {
  // 	name: "[Gen 6] Battle Spot Doubles",
  // 	mod: 'gen6',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	ruleset: ['Flat Rules', 'Min Source Gen = 6'],
  // 	banlist: ['Soul Dew'],
  // },
  // {
  // 	name: "[Gen 6] Doubles Custom Game",
  // 	mod: 'gen6',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	battle: {trunc: Math.trunc},
  // 	debug: true,
  // 	// no restrictions, for serious (other than team preview)
  // 	ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
  // },
  // {
  // 	name: "[Gen 6] Battle Spot Triples",
  // 	mod: 'gen6',
  // 	gameType: 'triples',
  // 	searchShow: false,
  // 	ruleset: ['Flat Rules', 'Min Source Gen = 6'],
  // },
  // {
  // 	name: "[Gen 6] Triples Custom Game",
  // 	mod: 'gen6',
  // 	gameType: 'triples',
  // 	searchShow: false,
  // 	battle: {trunc: Math.trunc},
  // 	debug: true,
  // 	// no restrictions, for serious (other than team preview)
  // 	ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
  // },
  // // B2/W2 Singles
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "B2/W2 Singles",
  // 	column: 4,
  // },
  // {
  // 	name: "[Gen 5] Ubers",
  // 	mod: 'gen5',
  // 	searchShow: false,
  // 	ruleset: ['Standard', 'Sleep Clause Mod'],
  // },
  // {
  // 	name: "[Gen 5] UU",
  // 	mod: 'gen5',
  // 	searchShow: false,
  // 	ruleset: ['Standard', 'Evasion Abilities Clause', 'Swagger Clause', 'Sleep Clause Mod'],
  // 	banlist: ['Uber', 'OU', 'UUBL', 'Arena Trap', 'Drought', 'Sand Stream', 'Snow Warning', 'Prankster + Assist', 'Prankster + Copycat', 'Baton Pass'],
  // },
  // {
  // 	name: "[Gen 5] RU",
  // 	mod: 'gen5',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 5] UU', 'Baton Pass Clause', '!Sleep Clause Mod', 'Sleep Moves Clause'],
  // 	banlist: ['UU', 'RUBL', 'Shadow Tag', 'Shell Smash + Baton Pass'],
  // 	unbanlist: ['Prankster + Assist', 'Prankster + Copycat', 'Baton Pass'],
  // },
  // {
  // 	name: "[Gen 5] NU",
  // 	mod: 'gen5',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 5] RU', '!Sleep Moves Clause', 'Sleep Clause Mod'],
  // 	banlist: ['RU', 'NUBL', 'Assist', 'Copycat'],
  // },
  // {
  // 	name: "[Gen 5] PU",
  // 	mod: 'gen5',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 5] NU', 'Sleep Moves Clause'],
  // 	banlist: ['NU', 'PUBL', 'Damp Rock'],
  // },
  // {
  // 	name: "[Gen 5] LC",
  // 	mod: 'gen5',
  // 	searchShow: false,
  // 	ruleset: ['Standard', 'Little Cup', 'Sleep Moves Clause'],
  // 	banlist: [
  // 		'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Scraggy', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma',
  // 		'Sand Rush', 'Sand Veil', 'Berry Juice', 'Soul Dew', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger',
  // 	],
  // },
  // {
  // 	name: "[Gen 5] Monotype",
  // 	desc: `All the Pok&eacute;mon on a team must share a type.`,
  // 	mod: 'gen5',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 5] OU', 'Same Type Clause', '!Gems Clause'],
  // 	banlist: ['Latios'],
  // 	unbanlist: ['Cloyster'],
  // },
  // {
  // 	name: "[Gen 5] 1v1",
  // 	desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
  // 	mod: 'gen5',
  // 	searchShow: false,
  // 	ruleset: [
  // 		'Picked Team Size = 1', 'Max Team Size = 3',
  // 		'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Accuracy Moves Clause', 'Sleep Moves Clause',
  // 	],
  // 	banlist: [
  // 		'Arceus', 'Blaziken', 'Cottonee', 'Darkrai', 'Deoxys', 'Dialga', 'Dragonite', 'Giratina', 'Groudon', 'Ho-Oh',
  // 		'Jirachi', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Mew', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram',
  // 		'Shaymin-Sky', 'Togekiss', 'Victini', 'Whimsicott', 'Zekrom', 'Focus Band', 'Focus Sash', 'Quick Claw', 'Soul Dew',
  // 		'Perish Song',
  // 	],
  // },
  // {
  // 	name: "[Gen 5] ZU",
  // 	mod: 'gen5',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 5] PU'],
  // 	banlist: [
  // 		// PU
  // 		'Audino', 'Banette', 'Beheeyem', 'Bronzor', 'Dodrio', 'Duosion', 'Dwebble', 'Fraxure', 'Gabite', 'Golduck',
  // 		'Huntail', 'Jumpluff', 'Klang', 'Krokorok', 'Mantine', 'Maractus', 'Mawile', 'Monferno', 'Murkrow', 'Natu',
  // 		'Purugly', 'Rampardos', 'Rapidash', 'Relicanth', 'Scraggy', 'Shiftry', 'Simisage', 'Sneasel', 'Stoutland',
  // 		'Stunfisk', 'Swanna', 'Swoobat', 'Tentacool', 'Torterra', 'Ursaring', 'Victreebel', 'Vileplume', 'Volbeat',
  // 		'Zebstrika', 'Zweilous',
  // 		// ZUBL
  // 		'Articuno', 'Dragonair', 'Glalie', 'Machoke', 'Marowak', 'Omanyte', 'Regigigas', 'Trubbish', 'Whirlipede',
  // 		'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass',
  // 	],
  // 	unbanlist: ['Damp Rock'],
  // },
  // {
  // 	name: "[Gen 5] CAP",
  // 	mod: 'gen5',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 5] OU', '+CAP'],
  // 	banlist: ['Cawmodore'],
  // },
  // {
  // 	name: "[Gen 5] BW1 OU",
  // 	mod: 'gen5bw1',
  // 	searchShow: false,
  // 	ruleset: ['Standard', 'Sleep Clause Mod', 'Swagger Clause', 'Baton Pass Stat Clause'],
  // 	banlist: ['Uber', 'Drizzle ++ Swift Swim', 'King\'s Rock', 'Razor Fang', 'Soul Dew'],
  // },
  // {
  // 	name: "[Gen 5] GBU Singles",
  // 	mod: 'gen5',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	ruleset: ['Flat Rules'],
  // 	banlist: ['Dark Void', 'Sky Drop', 'Soul Dew'],
  // },
  // {
  // 	name: "[Gen 5] Custom Game",
  // 	mod: 'gen5',
  // 	searchShow: false,
  // 	debug: true,
  // 	battle: {trunc: Math.trunc},
  // 	// no restrictions, for serious (other than team preview)
  // 	ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
  // },
  // // B2/W2 Doubles
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "B2/W2 Doubles",
  // 	column: 4,
  // },
  // {
  // 	name: "[Gen 5] VGC 2013",
  // 	mod: 'gen5',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	ruleset: ['Flat Rules'],
  // 	banlist: ['Chatot', 'Dark Void', 'Sky Drop', 'Soul Dew'],
  // },
  // {
  // 	name: "[Gen 5] VGC 2012",
  // 	mod: 'gen5bw1',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	ruleset: ['Flat Rules'],
  // 	banlist: ['Dark Void', 'Sky Drop'],
  // },
  // {
  // 	name: "[Gen 5] VGC 2011",
  // 	mod: 'gen5bw1',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	bestOfDefault: true,
  // 	ruleset: ['Flat Rules', 'Old Unova Pokedex'],
  // 	banlist: ['Sky Drop', 'Belue Berry', 'Durin Berry', 'Nomel Berry', 'Rabuta Berry', 'Spelon Berry', 'Watmel Berry'],
  // },
  // {
  // 	name: "[Gen 5] Doubles Custom Game",
  // 	mod: 'gen5',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	debug: true,
  // 	battle: {trunc: Math.trunc},
  // 	// no restrictions, for serious (other than team preview)
  // 	ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
  // },
  // {
  // 	name: "[Gen 5] Triples Custom Game",
  // 	mod: 'gen5',
  // 	gameType: 'triples',
  // 	searchShow: false,
  // 	debug: true,
  // 	battle: {trunc: Math.trunc},
  // 	// no restrictions, for serious (other than team preview)
  // 	ruleset: ['Team Preview', 'Cancel Mod'],
  // },
  // // DPP Singles
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "DPP Singles",
  // 	column: 4,
  // },
  // {
  // 	name: "[Gen 4] Ubers",
  // 	mod: 'gen4',
  // 	searchShow: false,
  // 	ruleset: ['Standard'],
  // 	banlist: ['AG'],
  // },
  // {
  // 	name: "[Gen 4] UU",
  // 	mod: 'gen4',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 4] OU', '!Baton Pass Stat Trap Clause', '!Freeze Clause Mod'],
  // 	banlist: ['OU', 'UUBL', 'Baton Pass'],
  // 	unbanlist: ['Arena Trap', 'Snow Cloak', 'Quick Claw', 'Swagger'],
  // },
  // {
  // 	name: "[Gen 4] PU",
  // 	mod: 'gen4',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 4] NU'],
  // 	banlist: [
  // 		'Articuno', 'Cacturne', 'Charizard', 'Cradily', 'Dodrio', 'Drifblim', 'Dusclops', 'Electrode',
  // 		'Floatzel', 'Gardevoir', 'Gligar', 'Golem', 'Grumpig', 'Haunter', 'Hitmonchan', 'Hypno', 'Jumpluff',
  // 		'Jynx', 'Lickilicky', 'Linoone', 'Magmortar', 'Magneton', 'Manectric', 'Medicham', 'Meganium',
  // 		'Nidoqueen', 'Ninetales', 'Piloswine', 'Poliwrath', 'Porygon2', 'Regice', 'Regirock', 'Roselia',
  // 		'Sandslash', 'Sharpedo', 'Shiftry', 'Skuntank', 'Slowking', 'Tauros', 'Typhlosion', 'Venomoth',
  // 		'Vileplume',
  // 	],
  // },
  // {
  // 	name: "[Gen 4] LC",
  // 	mod: 'gen4',
  // 	searchShow: false,
  // 	ruleset: ['Standard', 'Little Cup', 'Sleep Moves Clause'],
  // 	banlist: [
  // 		'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma',
  // 		'Berry Juice', 'Deep Sea Tooth', 'Dragon Rage', 'Sonic Boom', 'Swagger',
  // 	],
  // },
  // {
  // 	name: "[Gen 4] Anything Goes",
  // 	mod: 'gen4',
  // 	searchShow: false,
  // 	ruleset: ['Obtainable', 'Arceus EV Limit', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
  // },
  // {
  // 	name: "[Gen 4] 1v1",
  // 	desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
  // 	mod: 'gen4',
  // 	searchShow: false,
  // 	ruleset: [
  // 		'Picked Team Size = 1', 'Max Team Size = 3',
  // 		'Standard', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview',
  // 	],
  // 	banlist: [
  // 		'Arceus', 'Clefable', 'Darkrai', 'Deoxys-Attack', 'Deoxys-Normal', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Garchomp',
  // 		'Giratina', 'Groudon', 'Ho-Oh', 'Jirachi', 'Kyogre', 'Latias', 'Latios', 'Lugia', 'Machamp', 'Manaphy', 'Mew', 'Mewtwo',
  // 		'Palkia', 'Porygon-Z', 'Rayquaza', 'Salamence', 'Shaymin', 'Shaymin-Sky', 'Snorlax', 'Togekiss', 'Focus Band', 'Focus Sash',
  // 		'Quick Claw', 'Soul Dew', 'Destiny Bond', 'Explosion', 'Perish Song', 'Self-Destruct',
  // 	],
  // },
  // {
  // 	name: "[Gen 4] ZU",
  // 	mod: 'gen4',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 4] PU'],
  // 	banlist: [
  // 		'Ampharos', 'Armaldo', 'Bellossom', 'Dragonair', 'Electabuzz', 'Gabite', 'Gastrodon', 'Glaceon', 'Glalie',
  // 		'Golduck', 'Gorebyss', 'Hippopotas', 'Kadabra', 'Kingler', 'Lapras', 'Machoke', 'Magmar', 'Mantine', 'Marowak',
  // 		'Metang', 'Misdreavus', 'Monferno', 'Mr. Mime', 'Muk', 'Murkrow', 'Pinsir', 'Politoed', 'Purugly', 'Quagsire',
  // 		'Raichu', 'Rampardos', 'Rapidash', 'Regigigas', 'Relicanth', 'Rhydon', 'Scyther', 'Sneasel', 'Snover',
  // 		'Solrock', 'Tangela', 'Torkoal', 'Victreebel', 'Xatu', 'Walrein', 'Zangoose', 'Damp Rock',
  // 	],
  // },
  // {
  // 	name: "[Gen 4] CAP",
  // 	mod: 'gen4',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 4] OU', '+CAP'],
  // },
  // {
  // 	name: "[Gen 4] Custom Game",
  // 	mod: 'gen4',
  // 	searchShow: false,
  // 	debug: true,
  // 	battle: {trunc: Math.trunc},
  // 	// no restrictions
  // 	ruleset: ['Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
  // },
  // // DPP Doubles
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "DPP Doubles",
  // 	column: 4,
  // },
  // {
  // 	name: "[Gen 4] VGC 2010",
  // 	mod: 'gen4',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	ruleset: ['Flat Rules', 'Min Team Size = 4', 'Max Team Size = 4', 'Limit Two Restricted'],
  // 	restricted: ['Restricted Legendary'],
  // 	banlist: ['Soul Dew'],
  // },
  // {
  // 	name: "[Gen 4] VGC 2009",
  // 	mod: 'gen4pt',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	ruleset: ['Flat Rules', '! Adjust Level Down', 'Max Level = 50', 'Min Team Size = 4', 'Max Team Size = 4'],
  // 	banlist: ['Tyranitar', 'Rotom', 'Judgment', 'Soul Dew'],
  // },
  // {
  // 	name: "[Gen 4] Doubles Custom Game",
  // 	mod: 'gen4',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	debug: true,
  // 	battle: {trunc: Math.trunc},
  // 	// no restrictions
  // 	ruleset: ['Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
  // },
  // // Past Generations
  // ///////////////////////////////////////////////////////////////////
  // {
  // 	section: "Past Generations",
  // 	column: 4,
  // },
  // {
  // 	name: "[Gen 3] Ubers",
  // 	mod: 'gen3',
  // 	searchShow: false,
  // 	ruleset: ['Standard', 'Deoxys Camouflage Clause', 'One Baton Pass Clause'],
  // 	banlist: ['Wobbuffet + Leftovers', 'Wynaut + Leftovers', 'Baton Pass'],
  // },
  // {
  // 	name: "[Gen 3] UU",
  // 	mod: 'gen3',
  // 	searchShow: false,
  // 	ruleset: ['Standard'],
  // 	banlist: ['Uber', 'OU', 'UUBL', 'Smeargle + Ingrain', 'Arena Trap', 'Baton Pass', 'Swagger'],
  // },
  // {
  // 	name: "[Gen 3] RU",
  // 	mod: 'gen3',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 3] UU'],
  // 	banlist: [
  // 		'Altaria', 'Ampharos', 'Arcanine', 'Blastoise', 'Clefable', 'Cradily', 'Electabuzz', 'Electrode', 'Fearow', 'Feraligatr', 'Gligar', 'Golduck',
  // 		'Golem', 'Gorebyss', 'Granbull', 'Grumpig', 'Hitmonlee', 'Hitmontop', 'Jumpluff', 'Kangaskhan', 'Lanturn', 'Lunatone', 'Manectric', 'Misdreavus',
  // 		'Muk', 'Nidoking', 'Nidoqueen', 'Ninjask', 'Omastar', 'Pinsir', 'Qwilfish', 'Sandslash', 'Scyther', 'Slowking', 'Solrock', 'Tentacruel', 'Vileplume',
  // 		'Walrein', 'Xatu',
  // 	],
  // },
  // {
  // 	name: "[Gen 3] NU",
  // 	mod: 'gen3',
  // 	searchShow: false,
  // 	ruleset: ['Standard'],
  // 	banlist: ['Uber', 'OU', 'UUBL', 'UU', 'Smeargle + Ingrain'],
  // },
  // {
  // 	name: "[Gen 3] LC",
  // 	mod: 'gen3',
  // 	searchShow: false,
  // 	ruleset: ['Standard', 'Little Cup', 'Sleep Moves Clause', 'Accuracy Moves Clause'],
  // 	banlist: ['Chansey', 'Meditite', 'Omanyte', 'Scyther', 'Wynaut', 'Zigzagoon', 'Deep Sea Tooth', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger', 'Thunder Wave'],
  // },
  // {
  // 	name: "[Gen 3] 1v1",
  // 	desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
  // 	mod: 'gen3',
  // 	searchShow: false,
  // 	ruleset: [
  // 		'Picked Team Size = 1', 'Max Team Size = 3',
  // 		'Standard', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview',
  // 	],
  // 	banlist: [
  // 		'Clefable', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Groudon', 'Ho-Oh', 'Kyogre', 'Latias', 'Latios',
  // 		'Lugia', 'Mew', 'Mewtwo', 'Rayquaza', 'Slaking', 'Snorlax', 'Suicune', 'Zapdos', 'Destiny Bond', 'Explosion', 'Perish Song',
  // 		'Self-Destruct', 'Focus Band', 'King\'s Rock', 'Quick Claw',
  // 	],
  // },
  // {
  // 	name: "[Gen 3] ZU",
  // 	mod: 'gen3',
  // 	// searchShow: false,
  // 	ruleset: ['Standard', 'Sleep Moves Clause', 'Baton Pass Stat Trap Clause', 'Swagger Clause'],
  // 	banlist: ['Uber', 'OU', 'UUBL', 'UU', 'NUBL', 'NU', 'PUBL', 'PU', 'ZUBL', 'Baton Pass + Substitute'],
  // },
  // {
  // 	name: "[Gen 3] Custom Game",
  // 	mod: 'gen3',
  // 	searchShow: false,
  // 	debug: true,
  // 	battle: {trunc: Math.trunc},
  // 	ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
  // },
  // {
  // 	name: "[Gen 3] Doubles Custom Game",
  // 	mod: 'gen3',
  // 	gameType: 'doubles',
  // 	searchShow: false,
  // 	debug: true,
  // 	ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
  // },
  // {
  // 	name: "[Gen 2] UU",
  // 	mod: 'gen2',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 2] OU'],
  // 	banlist: ['OU', 'UUBL', 'Agility + Baton Pass'],
  // 	unbanlist: ['Mean Look + Baton Pass', 'Spider Web + Baton Pass'],
  // },
  // {
  // 	name: "[Gen 2] NU",
  // 	mod: 'gen2',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 2] UU'],
  // 	banlist: ['UU', 'NUBL', 'Swagger'],
  // 	unbanlist: ['Agility + Baton Pass'],
  // },
  // {
  // 	name: "[Gen 2] PU",
  // 	mod: 'gen2',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 2] NU'],
  // 	banlist: ['NU', 'PUBL'],
  // 	unbanlist: ['Swagger'],
  // },
  // {
  // 	name: "[Gen 2] 1v1",
  // 	mod: 'gen2',
  // 	searchShow: false,
  // 	ruleset: [
  // 		'Picked Team Size = 1', 'Max Team Size = 3',
  // 		'Standard', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview',
  // 	],
  // 	banlist: [
  // 		'Alakazam', 'Celebi', 'Clefable', 'Ho-Oh', 'Lugia', 'Mew', 'Mewtwo', 'Snorlax', 'Zapdos',
  // 		'Berserk Gene', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Attract', 'Destiny Bond',
  // 		'Explosion', 'Perish Song', 'Present', 'Self-Destruct', 'Swagger',
  // 	],
  // },
  // {
  // 	name: "[Gen 2] ZU",
  // 	mod: 'gen2',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 2] PU'],
  // 	banlist: ['PU', 'ZUBL'],
  // },
  // {
  // 	name: "[Gen 2] NC 2000",
  // 	mod: 'gen2stadium2',
  // 	searchShow: false,
  // 	ruleset: [
  // 		'Picked Team Size = 3', 'Min Level = 50', 'Max Level = 55', 'Max Total Level = 155',
  // 		'Obtainable', 'Stadium Sleep Clause', 'Freeze Clause Mod', 'Species Clause', 'Item Clause = 1', 'Endless Battle Clause', 'Cancel Mod', 'Event Moves Clause', 'Nickname Clause', 'Team Preview', 'NC 2000 Move Legality',
  // 	],
  // 	banlist: ['Uber'],
  // },
  // {
  // 	name: "[Gen 2] Stadium OU",
  // 	mod: 'gen2stadium2',
  // 	searchShow: false,
  // 	ruleset: ['Standard'],
  // 	banlist: ['Uber'],
  // },
  // {
  // 	name: "[Gen 2] Custom Game",
  // 	mod: 'gen2',
  // 	searchShow: false,
  // 	debug: true,
  // 	battle: {trunc: Math.trunc},
  // 	ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
  // },
  // {
  // 	name: "[Gen 1] Ubers",
  // 	mod: 'gen1',
  // 	searchShow: false,
  // 	ruleset: ['Standard'],
  // },
  // {
  // 	name: "[Gen 1] UU",
  // 	mod: 'gen1',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 1] OU', 'APT Clause'],
  // 	banlist: ['OU', 'UUBL'],
  // },
  // {
  // 	name: "[Gen 1] NU",
  // 	mod: 'gen1',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 1] UU', '!APT Clause'],
  // 	banlist: ['UU', 'NUBL'],
  // },
  // {
  // 	name: "[Gen 1] PU",
  // 	mod: 'gen1',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 1] NU'],
  // 	banlist: ['NU', 'PUBL'],
  // },
  // {
  // 	name: "[Gen 1] 1v1",
  // 	mod: 'gen1',
  // 	searchShow: false,
  // 	ruleset: [
  // 		'Picked Team Size = 1', 'Max Team Size = 3',
  // 		'Standard', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview',
  // 	],
  // 	banlist: ['Mew', 'Mewtwo', 'Bind', 'Clamp', 'Explosion', 'Fire Spin', 'Self-Destruct', 'Wrap'],
  // },
  // {
  // 	name: "[Gen 1] ZU",
  // 	mod: 'gen1',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 1] PU'],
  // 	banlist: ['PU', 'ZUBL'],
  // },
  // {
  // 	name: "[Gen 1] Japanese OU",
  // 	desc: `Generation 1 with Japanese battle mechanics.`,
  // 	mod: 'gen1jpn',
  // 	searchShow: false,
  // 	ruleset: ['Standard'],
  // 	banlist: ['Uber'],
  // },
  // {
  // 	name: "[Gen 1] Stadium OU",
  // 	mod: 'gen1stadium',
  // 	searchShow: false,
  // 	ruleset: ['Standard', 'Team Preview'],
  // 	banlist: ['Uber',
  // 		'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
  // 		'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
  // 	],
  // },
  // {
  // 	name: "[Gen 1] Tradebacks OU",
  // 	desc: `RBY OU with movepool additions from the Time Capsule.`,
  // 	mod: 'gen1',
  // 	searchShow: false,
  // 	ruleset: ['[Gen 1] OU', 'Allow Tradeback'],
  // },
  // {
  // 	name: "[Gen 1] NC 1997",
  // 	mod: 'gen1jpn',
  // 	searchShow: false,
  // 	ruleset: [
  // 		'Picked Team Size = 3', 'Min Level = 50', 'Max Level = 55', 'Max Total Level = 155',
  // 		'Obtainable', 'Team Preview', 'Stadium Sleep Clause', 'Species Clause', 'Nickname Clause', 'HP Percentage Mod', 'Cancel Mod', 'NC 1997 Move Legality',
  // 	],
  // 	banlist: ['Uber'],
  // },
  // {
  // 	name: "[Gen 1] Custom Game",
  // 	mod: 'gen1',
  // 	searchShow: false,
  // 	debug: true,
  // 	battle: {trunc: Math.trunc},
  // 	ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
  // },
  /////// FBIRERED Formats ///////
  {
    name: "[Gen 3] FBIRERED V1",
    mod: "fbi",
    searchShow: false,
    ruleset: ["Standard"],
    banlist: [
      "Chikorita",
      "Bayleef",
      "Meganium",
      "Cyndaquil",
      "Quilava",
      "Typhlosion",
      "Totodile",
      "Croconaw",
      "Feraligatr",
      "Sentret",
      "Furret",
      "Hoothoot",
      "Noctowl",
      "Ledyba",
      "Ledian",
      "Spinarak",
      "Ariados",
      "Chinchou",
      "Lanturn",
      "Pichu",
      "Cleffa",
      "Igglybuff",
      "Togepi",
      "Togetic",
      "Natu",
      "Xatu",
      "Mareep",
      "Flaaffy",
      "Ampharos",
      "Marill",
      "Azumarill",
      "Sudowoodo",
      "Hoppip",
      "Skiploom",
      "Jumpluff",
      "Aipom",
      "Sunkern",
      "Sunflora",
      "Yanma",
      "Wooper",
      "Quagsire",
      "Murkrow",
      "Misdreavus",
      "Unown",
      "Wobbuffet",
      "Girafarig",
      "Pineco",
      "Forretress",
      "Dunsparce",
      "Gligar",
      "Snubbull",
      "Granbull",
      "Qwilfish",
      "Shuckle",
      "Heracross",
      "Sneasel",
      "Teddiursa",
      "Ursaring",
      "Slugma",
      "Magcargo",
      "Swinub",
      "Piloswine",
      "Corsola",
      "Remoraid",
      "Octillery",
      "Delibird",
      "Mantine",
      "Skarmory",
      "Houndour",
      "Houndoom",
      "Phanpy",
      "Donphan",
      "Stantler",
      "Smeargle",
      "Tyrogue",
      "Hitmontop",
      "Smoochum",
      "Elekid",
      "Magby",
      "Miltank",
      "Raikou",
      "Entei",
      "Suicune",
      "Larvitar",
      "Pupitar",
      "Tyranitar",
      "Lugia",
      "Ho-Oh",
      "Celebi",
      "Treecko",
      "Grovyle",
      "Sceptile",
      "Torchic",
      "Combusken",
      "Blaziken",
      "Mudkip",
      "Marshtomp",
      "Swampert",
      "Poochyena",
      "Mightyena",
      "Zigzagoon",
      "Linoone",
      "Wurmple",
      "Silcoon",
      "Beautifly",
      "Cascoon",
      "Dustox",
      "Lotad",
      "Lombre",
      "Ludicolo",
      "Seedot",
      "Nuzleaf",
      "Shiftry",
      "Taillow",
      "Swellow",
      "Wingull",
      "Pelipper",
      "Ralts",
      "Kirlia",
      "Gardevoir",
      "Surskit",
      "Masquerain",
      "Shroomish",
      "Breloom",
      "Slakoth",
      "Vigoroth",
      "Slaking",
      "Nincada",
      "Ninjask",
      "Shedinja",
      "Whismur",
      "Loudred",
      "Exploud",
      "Makuhita",
      "Hariyama",
      "Azurill",
      "Nosepass",
      "Skitty",
      "Delcatty",
      "Sableye",
      "Mawile",
      "Aron",
      "Lairon",
      "Aggron",
      "Meditite",
      "Medicham",
      "Electrike",
      "Manectric",
      "Plusle",
      "Minun",
      "Volbeat",
      "Illumise",
      "Roselia",
      "Gulpin",
      "Swalot",
      "Carvanha",
      "Sharpedo",
      "Wailmer",
      "Wailord",
      "Numel",
      "Camerupt",
      "Torkoal",
      "Spoink",
      "Grumpig",
      "Spinda",
      "Trapinch",
      "Vibrava",
      "Flygon",
      "Cacnea",
      "Cacturne",
      "Swablu",
      "Altaria",
      "Zangoose",
      "Seviper",
      "Lunatone",
      "Solrock",
      "Barboach",
      "Whiscash",
      "Corphish",
      "Crawdaunt",
      "Baltoy",
      "Claydol",
      "Lileep",
      "Cradily",
      "Anorith",
      "Armaldo",
      "Feebas",
      "Milotic",
      "Castform",
      "Kecleon",
      "Shuppet",
      "Banette",
      "Duskull",
      "Dusclops",
      "Tropius",
      "Chimecho",
      "Absol",
      "Wynaut",
      "Snorunt",
      "Glalie",
      "Spheal",
      "Sealeo",
      "Walrein",
      "Clamperl",
      "Huntail",
      "Gorebyss",
      "Relicanth",
      "Luvdisc",
      "Bagon",
      "Shelgon",
      "Salamence",
      "Beldum",
      "Metang",
      "Metagross",
      "Regirock",
      "Regice",
      "Registeel",
      "Latias",
      "Latios",
      "Kyogre",
      "Groudon",
      "Rayquaza",
      "Jirachi",
      "Deoxys",
      "Deoxys-Attack",
      "Deoxys-Defense",
      "Deoxys-Speed"
    ]
  }
];
//# sourceMappingURL=formats.js.map
