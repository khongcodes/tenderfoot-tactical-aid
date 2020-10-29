const statusNames = <const> [
  "numb",
  "prideful",
  "prideful 2",
  "inspired",
  "poison",
];

const statusEffectNames = <const> [
  "plusMaxHealth",
  "reduceIncomingUnnerve",
  "healOverTime",
  "immuneToKnockback",
  "immuneToPull"
];

export type StatusNamesType = typeof statusNames[number];
export type StatusEffectNamesType = typeof statusEffectNames[number];

type StatusEffectType = {
  tag: StatusEffectNamesType;
  number?: number;
  perTicks?: number;
}

export type StatusesType = {
  [key in StatusNamesType]: { effects: StatusEffectType[]; }
}