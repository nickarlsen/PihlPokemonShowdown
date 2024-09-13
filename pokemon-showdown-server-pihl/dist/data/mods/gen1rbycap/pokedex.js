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
var pokedex_exports = {};
__export(pokedex_exports, {
  Pokedex: () => Pokedex
});
module.exports = __toCommonJS(pokedex_exports);
const Pokedex = {
  pineguin: {
    num: 2e3,
    name: "Pineguin",
    types: ["Grass", "Ice"],
    baseStats: { hp: 120, atk: 70, def: 40, spa: 95, spd: 95, spe: 80 },
    abilities: { 0: "No Ability" },
    heightm: 3.2,
    weightkg: 106,
    color: "Green",
    eggGroups: ["Water 1", "Grass"],
    gen: 1
  },
  corupcake: {
    num: 2001,
    name: "Corupcake",
    types: ["Fire", "Poison"],
    baseStats: { hp: 97, atk: 105, def: 87, spa: 95, spd: 95, spe: 81 },
    abilities: { 0: "No Ability" },
    heightm: 1.4,
    weightkg: 189.5,
    color: "Red",
    eggGroups: ["Monster"],
    gen: 1
  },
  gargoyle: {
    num: 2002,
    name: "Gargoyle",
    types: ["Dragon", "Fighting"],
    baseStats: { hp: 111, atk: 111, def: 99, spa: 99, spd: 99, spe: 66 },
    abilities: { 0: "No Ability" },
    heightm: 1.5,
    weightkg: 138,
    color: "Gray",
    eggGroups: ["Human-Like"],
    gen: 1
  },
  phantom: {
    num: 2003,
    name: "Phantom",
    types: ["Fire", "Ghost"],
    baseStats: { hp: 56, atk: 56, def: 56, spa: 133, spd: 133, spe: 97 },
    abilities: { 0: "No Ability" },
    heightm: 1.1,
    weightkg: 0.1,
    color: "Black",
    eggGroups: ["Field"],
    gen: 1
  },
  mandrelec: {
    num: 2004,
    name: "Mandrelec",
    types: ["Electric"],
    baseStats: { hp: 110, atk: 130, def: 90, spa: 50, spd: 50, spe: 35 },
    abilities: { 0: "No Ability" },
    heightm: 1.1,
    weightkg: 43,
    color: "Yellow",
    eggGroups: ["Water 1"],
    gen: 1
  }
};
//# sourceMappingURL=pokedex.js.map
