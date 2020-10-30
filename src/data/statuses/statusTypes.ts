import { FormNamesType } from "../forms/formTypes"

const statusNames = <const> [
  "numb",
  "slow",
  "slow 2",
  "poison",
  "bewitched",
  "prideful",
  "prideful 2",
  "inspired",
  "cocoon",
  "regen",
  "thorn"
];

const statusEffectNames = <const> [
  "damage",
  "plusMaxHealth",
  "reduceIncomingUnnerve",
  "healOverTime",
  "immuneToKnockback",
  "immuneToPull",
  "createWater",
  "reflectDamage",
  "minusPower",
  "fixationOnCaster"
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
  forms: FormNamesType[];
};

export type StatusesType = { [key in StatusNamesType]: StatusType };