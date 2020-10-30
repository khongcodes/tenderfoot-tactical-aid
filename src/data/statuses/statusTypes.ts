import { FormNamesType } from "../forms/formsTypes"

const statusNames = <const> [
  "numb",
  "slow",
  "slow 2",
  "poison",
  "prideful",
  "prideful 2",
  "inspired",
  "cocoon",
  "regen",
  "geyser"
];

const statusEffectNames = <const> [
  "damage",
  "plusMaxHealth",
  "reduceIncomingUnnerve",
  "healOverTime",
  "immuneToKnockback",
  "immuneToPull",
  "createWater",
  "removeWater",
  "difficultTerrain"
];

export type StatusNamesType = typeof statusNames[number];
export type StatusEffectNamesType = typeof statusEffectNames[number];

type StatusEffectType = {
  tag: StatusEffectNamesType;
  number?: number;
  perTicks?: number;
};

type StatusType = {
  type: "buff" | "debuff" | "terrain";
  effects: StatusEffectType[];
  forms: FormNamesType
};

export type StatusesType = { [key in StatusNamesType]: StatusType };