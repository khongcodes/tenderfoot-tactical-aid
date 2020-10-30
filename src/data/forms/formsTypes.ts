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
  "archer",
  "woodsWitch",
  "wizard",
  "1",
  "2",
  "salamander",
  "shaman",
  "5",
  "6",
  "druid",
  "8",
  "elementalist",
  "0",
];
export type FormNamesType = typeof formNameKeys[number]


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
  "moveCasterToTarget",
  "removeAllStatusEffects"
];

const terrainEffectNames = <const> [
  "earthUp",
  "earthDown",
  "growth",
  "water",
  "removeWater",
  "fire",
  "smoothsEarth",
  "createBrush",
  "createStalagmite",     // battlemage
  "createGeyser",         // elementalist
  "breakDestructibles"
];

type PrimaryEffectNamesType = typeof primaryEffectNames[number];
type TerrainEffectNamesType = typeof terrainEffectNames[number]
type AllEffectNames = PrimaryEffectNamesType | TerrainEffectNamesType | StatusNamesType | StatusEffectNamesType;

const areasOfEffectNames = <const> [
  "single",
  "cross",
  "square",
  "diamond",        // archer/great salvo 2, wizard/whirlwind 2
  "self",
  "triangle",
  "cone 1",
  "cone 2",         // battlemage/surge 3
  "C",              // battlemage/thirst 3
  "line",
  "lineThrough",    // archer/lance
  "lineToCross",    // archer/frag lance
  "lineToSquare",   // elementalist/incinerate 3
  "row",            // druid/hedge
  "variable",
  "allAlliesInRange",
  "allUnitsFacingTarget"
];

type AreasOfEffectNamesType = typeof areasOfEffectNames[number];


const additionalTags = <const> [
  "affinity",
  "movement",
  "reduceDamage",
  "bonusDamage",
]
type AdditionalTagNamesType = typeof additionalTags[number];

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
  areaOfEffect?: AreasOfEffectNamesType;

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
  tags: Array<AllEffectNames | AdditionalTagNamesType>;
}[]

type SkillBranch = SkillType[];
type SkillTree = SkillBranch[];