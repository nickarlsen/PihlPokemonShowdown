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
var learnsets_exports = {};
__export(learnsets_exports, {
  Learnsets: () => Learnsets
});
module.exports = __toCommonJS(learnsets_exports);
const Learnsets = {
  corupcake: {
    learnset: {
      ember: ["1L1"],
      poisongas: ["1L1"],
      smokescreen: ["1L16"],
      confuseray: ["1L34"],
      sugarrush: ["1L36"],
      lick: ["1L40"],
      firespin: ["1L42"],
      screech: ["1L43"],
      haze: ["1L47"],
      thrash: ["1L58"],
      bodyslam: ["1M"],
      doubleedge: ["1M"],
      hyperbeam: ["1M"],
      rage: ["1M"],
      megadrain: ["1M"],
      thunderbolt: ["1M"],
      dragonrage: ["1M"],
      thunder: ["1M"],
      reflect: ["1M"],
      metronome: ["1M"],
      selfdestruct: ["1M"],
      fireblast: ["1M"],
      rest: ["1M"],
      dreameater: ["1M"],
      explosion: ["1M"],
      triattack: ["1M"],
      substitute: ["1M"],
      toxic: ["1M"],
      mimic: ["1M"],
      bide: ["1M"],
      swift: ["1M"],
      payday: ["1L1"],
      // add event data later
      roar: ["1L1"],
      // add event data later
      flamethrower: ["2T"],
      headbutt: ["2M"],
      bite: ["2E"],
      amnesia: ["2E"]
    },
    encounters: [
      { generation: 1, level: 5 }
    ]
  },
  gargoyle: {
    learnset: {
      rage: ["1L1", "1M"],
      lowkick: ["1L1"],
      karatechop: ["1L32"],
      supersonic: ["1L42"],
      marblefist: ["1L44"],
      razorwind: ["1L57"],
      rockslide: ["1L67"],
      submission: ["1L70", "1M"],
      megapunch: ["1M"],
      whirlwind: ["1M"],
      megakick: ["1M"],
      toxic: ["1M"],
      bodyslam: ["1M"],
      takedown: ["1M"],
      doubleedge: ["1M"],
      hyperbeam: ["1M"],
      dragonrage: ["1M"],
      earthquake: ["1M"],
      mimic: ["1M"],
      doubleteam: ["1M"],
      bide: ["1M"],
      metronome: ["1M"],
      fireblast: ["1M"],
      skyattack: ["1M"],
      rest: ["1M"],
      substitute: ["1M"],
      fly: ["1M"],
      strength: ["1M"],
      firepunch: ["2M"],
      thunderpunch: ["2M"],
      icepunch: ["2M"],
      rollingkick: ["2E"],
      agility: ["2E"],
      thrash: ["2L1"],
      meditate: ["2E"],
      headbutt: ["2M"]
    },
    encounters: [
      { generation: 1, level: 5 }
    ]
  },
  phantom: {
    learnset: {
      nightshade: ["1L1"],
      growl: ["1L1"],
      leer: ["1L1"],
      quickattack: ["1L1"],
      firespin: ["1L50"],
      flamethrower: ["1L55"],
      hypnosis: ["1L60"],
      confuseray: ["1L65"],
      toxic: ["1M"],
      bodyslam: ["1M"],
      takedown: ["1M"],
      doubleedge: ["1M"],
      hyperbeam: ["1M"],
      payday: ["1M"],
      rage: ["1M"],
      dig: ["1M"],
      teleport: ["1M"],
      mimic: ["1M"],
      doubleteam: ["1M"],
      bide: ["1M"],
      fireblast: ["1M"],
      swift: ["1M"],
      dreameater: ["1M"],
      rest: ["1M"],
      substitute: ["1M"]
    },
    encounters: [
      { generation: 1, level: 5 }
    ]
  },
  mandrelec: {
    learnset: {
      thundershock: ["1L1"],
      tailwhip: ["1L1"],
      bite: ["1L6"],
      scratch: ["1L17"],
      thunderwave: ["1L24"],
      focusenergy: ["1L30"],
      lightscreen: ["1L36"],
      thunder: ["1L42", "1M"],
      defensecurl: ["1L48"],
      screech: ["1L54"],
      toxic: ["1M"],
      bodyslam: ["1M"],
      takedown: ["1M"],
      doubleedge: ["1M"],
      hyperbeam: ["1M"],
      submission: ["1M"],
      counter: ["1M"],
      seismictoss: ["1M"],
      thunderbolt: ["1M"],
      dig: ["1M"],
      mimic: ["1M"],
      doubleteam: ["1M"],
      bide: ["1M"],
      skullbash: ["1M"],
      rest: ["1M"],
      substitute: ["1M"],
      flash: ["1M"],
      earthquake: ["1M"],
      rockslide: ["1M"],
      bubblebeam: ["1M", "2E"],
      headbutt: ["2M"],
      aurorabeam: ["2E"],
      haze: ["2E"],
      disable: ["2E"],
      splash: ["2E"]
    },
    encounters: [
      { generation: 1, level: 5 }
    ]
  },
  pineguin: {
    learnset: {
      absorb: ["1L1"],
      peck: ["1L1"],
      leechseed: ["1L1"],
      wingattack: ["1L13"],
      stunspore: ["1L21"],
      pinmissile: ["1L29"],
      camouflage: ["1L31"],
      aurorabeam: ["1L33"],
      razorleaf: ["1L41"],
      mist: ["1L51"],
      razorwind: ["1M"],
      whirlwind: ["1M"],
      toxic: ["1M"],
      bodyslam: ["1M"],
      takedown: ["1M"],
      doubleedge: ["1M"],
      bubblebeam: ["1M"],
      watergun: ["1M"],
      icebeam: ["1M"],
      blizzard: ["1M"],
      hyperbeam: ["1M"],
      megadrain: ["1M"],
      solarbeam: ["1M"],
      mimic: ["1M"],
      doubleteam: ["1M"],
      reflect: ["1M"],
      substitute: ["1M"],
      counter: ["2E"],
      seismictoss: ["2E"],
      selfdestruct: ["2E"],
      explosion: ["2E"],
      headbutt: ["2M"],
      defensecurl: ["2M"],
      drillpeck: ["2E"],
      strength: ["2M"]
    },
    encounters: [
      { generation: 1, level: 5 }
    ]
  }
};
//# sourceMappingURL=learnsets.js.map
