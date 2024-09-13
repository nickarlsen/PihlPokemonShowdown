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
var scripts_exports = {};
__export(scripts_exports, {
  Scripts: () => Scripts
});
module.exports = __toCommonJS(scripts_exports);
const Scripts = {
  gen: 6,
  inherit: "gen6",
  pokemon: {
    // for neutralizing gas
    ignoringAbility() {
      if (this.battle.gen >= 5 && !this.isActive)
        return true;
      if (this.getAbility().flags["cantsuppress"])
        return false;
      if (this.volatiles["gastroacid"])
        return true;
      if (this.ability === "neutralizinggas")
        return false;
      if (this.volatiles["neutralizinggas"])
        return true;
      return false;
    }
  },
  init() {
    this.modData("Learnsets", "lucario").learnset.meteormash = ["6L1"];
    this.modData("Learnsets", "lucario").learnset.machpunch = ["6L1"];
    this.modData("Learnsets", "houndoom").learnset.toxicspikes = ["6L1"];
    this.modData("Learnsets", "houndoom").learnset.venoshock = ["6L1"];
    this.modData("Learnsets", "houndoom").learnset.hex = ["6L1"];
    this.modData("Learnsets", "audino").learnset.discharge = ["6L1"];
    this.modData("Learnsets", "audino").learnset.voltswitch = ["6L1"];
    this.modData("Learnsets", "audino").learnset.chargebeam = ["6L1"];
    this.modData("Learnsets", "audino").learnset.charge = ["6L1"];
    this.modData("Learnsets", "audino").learnset.zapcannon = ["6L1"];
    this.modData("Learnsets", "glalie").learnset.thunderfang = ["6L1"];
    this.modData("Learnsets", "glalie").learnset.partingshot = ["6L1"];
    this.modData("Learnsets", "banette").learnset.ironhead = ["6L1"];
    this.modData("Learnsets", "banette").learnset.metalsound = ["6L1"];
    this.modData("Learnsets", "banette").learnset.powder = ["6L1"];
    this.modData("Learnsets", "venusaur").learnset.psychic = ["6L1"];
    this.modData("Learnsets", "venusaur").learnset.calmmind = ["6L1"];
    this.modData("Learnsets", "blastoise").learnset.moonblast = ["6L1"];
    this.modData("Learnsets", "blastoise").learnset.mistyterrain = ["6L1"];
    this.modData("Learnsets", "blastoise").learnset.taunt = ["6L1"];
    this.modData("Learnsets", "blastoise").learnset.drainingkiss = ["6L1"];
    this.modData("Learnsets", "blastoise").learnset.dazzlinggleam = ["6L1"];
    this.modData("Learnsets", "gengar").learnset.reflecttype = ["6L1"];
    this.modData("Learnsets", "gengar").learnset.calmmind = ["6L1"];
    this.modData("Learnsets", "alakazam").learnset.blizzard = ["6L1"];
    this.modData("Learnsets", "alakazam").learnset.flashcannon = ["6L1"];
    this.modData("Learnsets", "alakazam").learnset.icebeam = ["6L1"];
    this.modData("Learnsets", "alakazam").learnset.hail = ["6L1"];
    this.modData("Learnsets", "pinsir").learnset.hail = ["6L1"];
    this.modData("Learnsets", "pinsir").learnset.megahorn = ["6L1"];
    this.modData("Learnsets", "pinsir").learnset.uturn = ["6L1"];
    this.modData("Learnsets", "pinsir").learnset.iceshard = ["6L1"];
    this.modData("Learnsets", "pinsir").learnset.iciclecrash = ["6L1"];
    this.modData("Learnsets", "pinsir").learnset.icebeam = ["6L1"];
    this.modData("Learnsets", "pinsir").learnset.blizzard = ["6L1"];
    this.modData("Learnsets", "pinsir").learnset.roost = ["6L1"];
    this.modData("Learnsets", "pinsir").learnset.iciclespear = ["6L1"];
    this.modData("Learnsets", "aerodactyl").learnset.powergem = ["6L1"];
    this.modData("Learnsets", "aerodactyl").learnset.shadowball = ["6L1"];
    this.modData("Learnsets", "aerodactyl").learnset.hurricane = ["6L1"];
    this.modData("Learnsets", "steelix").learnset.heatcrash = ["6L1"];
    this.modData("Learnsets", "steelix").learnset.rapidspin = ["6L1"];
    this.modData("Learnsets", "steelix").learnset.smackdown = ["6L1"];
    this.modData("Learnsets", "altaria").learnset.scald = ["6L1"];
    this.modData("Learnsets", "altaria").learnset.hydropump = ["6L1"];
    this.modData("Learnsets", "altaria").learnset.thunder = ["6L1"];
    this.modData("Learnsets", "sceptile").learnset.calmmind = ["6L1"];
    this.modData("Learnsets", "sceptile").learnset.sludgewave = ["6L1"];
    this.modData("Learnsets", "swampert").learnset.sludgebomb = ["6L1"];
    this.modData("Learnsets", "swampert").learnset.bulkup = ["6L1"];
    this.modData("Learnsets", "swampert").learnset.toxicspikes = ["6L1"];
    this.modData("Learnsets", "swampert").learnset.aquajet = ["6L1"];
    this.modData("Learnsets", "swampert").learnset.gunkshot = ["6L1"];
    this.modData("Learnsets", "swampert").learnset.poisonjab = ["6L1"];
    this.modData("Learnsets", "pidgeot").learnset.focusblast = ["6L1"];
    this.modData("Learnsets", "absol").learnset.closecombat = ["6L1"];
    this.modData("Learnsets", "absol").learnset.moonblast = ["6L1"];
    this.modData("Learnsets", "absol").learnset.moonlight = ["6L1"];
    this.modData("Learnsets", "medicham").learnset.aurasphere = ["6L1"];
    this.modData("Learnsets", "medicham").learnset.thunderbolt = ["6L1"];
    this.modData("Learnsets", "medicham").learnset.closecombat = ["6L1"];
    this.modData("Learnsets", "medicham").learnset.gunkshot = ["6L1"];
    this.modData("Learnsets", "medicham").learnset.healingwish = ["6L1"];
    this.modData("Learnsets", "beedrill").learnset.earthquake = ["6L1"];
    this.modData("Learnsets", "beedrill").learnset.stoneedge = ["6L1"];
    this.modData("Learnsets", "beedrill").learnset.rockslide = ["6L1"];
    this.modData("Learnsets", "beedrill").learnset.smackdown = ["6L1"];
    this.modData("Learnsets", "beedrill").learnset.stealthrock = ["6L1"];
    this.modData("Learnsets", "mawile").learnset.firepunch = ["6L1"];
    this.modData("Learnsets", "mawile").learnset.rockslide = ["6L1"];
    this.modData("Learnsets", "mawile").learnset.slackoff = ["6L1"];
    this.modData("Learnsets", "camerupt").learnset.morningsun = ["6L1"];
    this.modData("Learnsets", "abomasnow").learnset.spikyshield = ["6L1"];
    this.modData("Learnsets", "abomasnow").learnset.earthpower = ["6L1"];
    this.modData("Learnsets", "gallade").learnset.sacredsword = ["6L1"];
    this.modData("Learnsets", "gallade").learnset.machpunch = ["6L1"];
    this.modData("Moves", "aerialace").flags.slicing = 1;
    this.modData("Moves", "aircutter").flags.slicing = 1;
    this.modData("Moves", "airslash").flags.slicing = 1;
    this.modData("Moves", "behemothblade").flags.slicing = 1;
    this.modData("Moves", "crosspoison").flags.slicing = 1;
    this.modData("Moves", "cut").flags.slicing = 1;
    this.modData("Moves", "furycutter").flags.slicing = 1;
    this.modData("Moves", "nightslash").flags.slicing = 1;
    this.modData("Moves", "psychocut").flags.slicing = 1;
    this.modData("Moves", "razorleaf").flags.slicing = 1;
    this.modData("Moves", "razorshell").flags.slicing = 1;
    this.modData("Moves", "sacredsword").flags.slicing = 1;
    this.modData("Moves", "slash").flags.slicing = 1;
    this.modData("Moves", "solarblade").flags.slicing = 1;
    this.modData("Moves", "xscissor").flags.slicing = 1;
    this.modData("Learnsets", "ampharos").learnset.waterpulse = ["6L1"];
    this.modData("Learnsets", "ampharos").learnset.aurasphere = ["6L1"];
    this.modData("Learnsets", "ampharos").learnset.darkpulse = ["6L1"];
    this.modData("Learnsets", "heracross").learnset.healorder = ["6L1"];
    this.modData("Learnsets", "heracross").learnset.circlethrow = ["6L1"];
    this.modData("Learnsets", "heracross").learnset.spikes = ["6L1"];
    this.modData("Learnsets", "heracross").learnset.icepunch = ["6L1"];
    this.modData("Learnsets", "sharpedo").learnset.thunder = ["6L1"];
    this.modData("Learnsets", "gardevoir").learnset.rapidspin = ["6L1"];
    this.modData("Learnsets", "gardevoir").learnset.mysticalfire = ["6L1"];
    this.modData("Learnsets", "aggron").learnset.voltswitch = ["6L1"];
    this.modData("Learnsets", "kangaskhan").learnset.milkdrink = ["6L1"];
    this.modData("Learnsets", "salamence").learnset.hurricane = ["6L1"];
    this.modData("Learnsets", "salamence").learnset.airslash = ["6L1"];
    this.modData("Learnsets", "salamence").learnset.ironhead = ["6L1"];
    this.modData("Learnsets", "tyranitar").learnset.wildcharge = ["6L1"];
    this.modData("Learnsets", "tyranitar").learnset.iciclecrash = ["6L1"];
    this.modData("Learnsets", "tyranitar").learnset.waterfall = ["6L1"];
    this.modData("Learnsets", "diancie").learnset.spikyshield = ["6L1"];
    this.modData("Learnsets", "blaziken").learnset.uturn = ["6L1"];
    this.modData("Learnsets", "blaziken").learnset.spikes = ["6L1"];
    this.modData("Learnsets", "blaziken").learnset.roost = ["6L1"];
    this.modData("Learnsets", "blaziken").learnset.closecombat = ["6L1"];
    this.modData("Learnsets", "mewtwo").learnset.extremespeed = ["6L1"];
    this.modData("Learnsets", "mewtwo").learnset.sludgewave = ["6L1"];
    this.modData("Learnsets", "mewtwo").learnset.swordsdance = ["6L1"];
    this.modData("Learnsets", "mewtwo").learnset.uturn = ["6L1"];
    this.modData("Learnsets", "mewtwo").learnset.closecombat = ["6L1"];
    this.modData("Learnsets", "mewtwo").learnset.drainpunch = ["6L1"];
    this.modData("Learnsets", "mewtwo").learnset.machpunch = ["6L1"];
    this.modData("Learnsets", "mewtwo").learnset.scald = ["6L1"];
    this.modData("Learnsets", "mewtwo").learnset.surf = ["6L1"];
    this.modData("Learnsets", "mewtwo").learnset.hydropump = ["6L1"];
    this.modData("Learnsets", "rayquaza").learnset.coil = ["6L1"];
    this.modData("Learnsets", "rayquaza").learnset.defog = ["6L1"];
  }
};
//# sourceMappingURL=scripts.js.map
