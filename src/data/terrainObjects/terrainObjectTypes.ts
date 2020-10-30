///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                          NOTES
// Unanswered questions
// What classes create brush?
// Is geyser difficult terrain?
// Is geyser destructible?
// Is vortex difficult terrain?
// Is vortex destructible?

import { FormNamesType } from "../forms/formTypes";

const terrainObjectNames = <const> [
  "brush",
  "stalagmite",   // battlemage
  "geyser",       // elementalist
  "vortex"        // vortex
];

const terrainObjectEffectNames = <const> [
  "damage",
  "createWater",
  "removeWater"
];

type TerrainObjectNameType = typeof terrainObjectNames[number];
type TerrainObjectEffectNameType = typeof terrainObjectEffectNames[number];

type TerrainObjectEffectType = {
  tag: TerrainObjectEffectNameType;
  number?: number;
  perTicks?: number;
}

export type TerrainObjectType = {
  formalName: string;
  impassable?: boolean;
  difficultTerrain?: boolean;
  destructible?: boolean;
  effects?: TerrainObjectEffectType[];
  forms: FormNamesType[];
}