///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                          NOTES
// Unanswered questions
// Bog Witch's fecund - what is a bog body?

import { FormNamesType } from "../forms/formTypes"

const statusNames = <const> [
  "slow",
  "slow 2",
  "poison",
  "bewitched",
  "sickened",
  "fecund",
  "sporeCloud",
  "oil",
  "boilingOil",
  "blight",
  "numb",
  "prideful",
  "prideful 2",
  "inspired",
  "cocoon",
  "regen",
  "thorn",
  "vampiric",
  "bloodCurse"
];

const statusEffectNames = <const> [
  "damageOverTime",
  "healsDoneOrReceivedBecomeDamage",
  "plusMaxHealth",
  "minusMaxHealth",
  "reduceIncomingUnnerve",
  "healOverTime",
  "healSelfForDamageDone",
  "immuneToKnockback",
  "immuneToPull",
  "reflectDamage",
  "minusPower",
  "plusPower",
  "fixationOnCaster",
  "birthsBogBodyOnDeath",
  "limitsActionRangeTo",
  "doubleDamageByFire"
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