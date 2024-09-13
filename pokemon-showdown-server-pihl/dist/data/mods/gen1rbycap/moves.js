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
var moves_exports = {};
__export(moves_exports, {
  Moves: () => Moves
});
module.exports = __toCommonJS(moves_exports);
const Moves = {
  sugarrush: {
    accuracy: 90,
    basePower: 90,
    category: "Physical",
    shortDesc: "33% Chance to lower the foe's Special.",
    name: "Sugar Rush",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Play Rough", target);
    },
    secondary: {
      chance: 33,
      boosts: {
        spa: -1,
        spd: -1
      }
    },
    target: "normal",
    type: "Poison",
    contestType: "Cute"
  },
  marblefist: {
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    shortDesc: "Usually moves first.",
    name: "Marble Fist",
    pp: 30,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1, punch: 1, metronome: 1 },
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Meteor Mash", target);
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    contestType: "Cool"
  },
  camouflage: {
    num: 293,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    shortDesc: "Hides on turn 1, strikes turn 2.",
    name: "Camouflage",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    onPrepareHit(target, source, move) {
      this.attrLastMove("[still]");
      this.add("-anim", source, "Leaf Blade", target);
    },
    onTryMove(attacker, defender, move) {
      if (attacker.removeVolatile("twoturnmove")) {
        attacker.removeVolatile("invulnerability");
        return;
      }
      this.add("-prepare", attacker, move.name);
      attacker.addVolatile("twoturnmove", defender);
      attacker.addVolatile("invulnerability", defender);
      return null;
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    contestType: "Clever",
    gen: 1
  }
};
//# sourceMappingURL=moves.js.map
