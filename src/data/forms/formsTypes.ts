/////////////////////////////////////////////////////////////////////////////////
//                                                                          SETUP

const formNameKeys = <const> [
  "goblin",
  "knight",
  "polearm",
  "spellsword",
  "battlemage",
  "woodsWitch",
  "wizard"
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
  "doubleDamageFromBehind"
];

const terrainEffectNames = <const> [
  "earthUp",
  "earthDown",
  "growth",
  "water",
  "fire",
  "breakDestructibles"
];

const statusEffectNames = <const> [
  "numb",
  "poison"
];

const statusEffects = <const> [
  "plusMaxHealth",
  "reduceIncomingUnnerve"
]

type PrimaryEffectNamesType = typeof primaryEffectNames[number];
type TerrainEffectNamesType = typeof terrainEffectNames[number]
type StatusEffectNamesType = typeof statusEffectNames[number];
type StatusEffectsType = typeof statusEffects[number];
type AllEffectNames = PrimaryEffectNamesType | TerrainEffectNamesType | StatusEffectNamesType | StatusEffectsType;


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
  
  range: string | number;
  areaOfEffect: string;
  
  effects?: { 
    [key in PrimaryEffectNamesType]: number | boolean | undefined;
  };
  terrainEffects?: { [key in TerrainEffectNamesType]: number | boolean | undefined; };
  statusEffects?: { [key in StatusEffectNamesType]: number | undefined; };
  description?: string;
  tags: AllEffectNames[];
}[]

type SkillBranch = SkillType[];
type SkillTree = SkillBranch[];