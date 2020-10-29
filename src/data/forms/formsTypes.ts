/////////////////////////////////////////////////////////////////////////////////
//                                                                        IMPORTS

import { StatusNamesType, StatusEffectNamesType } from "../statuses/statusTypes";


/////////////////////////////////////////////////////////////////////////////////
//                                                                          SETUP

const formNameKeys = <const> [
  "goblin",
  "knight",
  "polearm",
  "spellsword",
  "battlemage",
  "woodsWitch",
  "wizard",
  "1",
  "2",
  "salamander",
  "shaman",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];
type FormNamesType = typeof formNameKeys[number]


const primaryEffectNames = <const> [
  "damage",
  "heal",
  "knockback",
  "pull",
  "healSelf",
  "promote",
  "unnerve",
  "reduceIncomingDamage",
  "doubleDamageFromBehind",
  "stepIntoKnockback",
  "movesCasterToTarget"
];

const terrainEffectNames = <const> [
  "earthUp",
  "earthDown",
  "growth",
  "water",
  "fire",
  "smoothsEarth",
  "createBrush",
  "breakDestructibles"
];

type PrimaryEffectNamesType = typeof primaryEffectNames[number];
type TerrainEffectNamesType = typeof terrainEffectNames[number]
type AllEffectNames = PrimaryEffectNamesType | TerrainEffectNamesType | StatusNamesType | StatusEffectNamesType;

const areasOfEffectNames = <const> [
  "single",
  "cross",
  "square",
  "self",
  "triangle",
  "cone 1",
  "cone 2",
  "C",
  "line",
  "variable",
  "allAlliesInRange",
];

type AreasOfEffectNamesType = typeof areasOfEffectNames[number];

/////////////////////////////////////////////////////////////////////////////////
//                                                                          TYPES

export type FormsType = {
  [key in FormNamesType]: {
    formalName: string;
    availableFromStart: boolean;
    requirements: {
      [key in FormNamesType]: number | undefined;
    },
    baseHP: number;
    description: string;
    affinity?: string[];
    unlockSite?: string;
    skills: SkillTree;
  }
}

// some skills (basic attack) have multiple forms
// so a skill will be wrapped in an array to represent
// multiple possible manifestations of the skill
type SkillType = {
  name: string;
  skillLevel: number;
  passive?: boolean;

  range?: string | number;
  areaOfEffect: AreasOfEffectNamesType;

  effects?: { 
    [key in PrimaryEffectNamesType]: number | boolean | undefined;
  };
  terrainEffects?: {
    [key in TerrainEffectNamesType]: number | boolean | undefined;
  };
  statusEffects?: {
    [key in StatusNamesType]: number | undefined;
  };

  description?: string;
  tags: AllEffectNames[];
}[]

type SkillBranch = SkillType[];
type SkillTree = SkillBranch[];