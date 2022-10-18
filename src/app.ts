// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
//  id: number;
//   name: string;
//   photo?: string;
//   sex: string;
//   age: number;
//   health: number;
export const humans: HumanHero[] = [
  { id: 1, name: "Samu", sex: "male", age: 39, health: 100 },
  { id: 2, name: "Merry", sex: "male", age: 37, health: 100 },
  { id: 3, name: "Pippin", sex: "male", age: 29, health: 100 },
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */

//  id: number;
//  name: string;
//  photo?: string;
//  wings: number;
//  wheels: number;
//  clan: string;

export const transformers: TransformerHero[] = [
  { id: 1, name: "Ezeket", wings: 1, wheels: 1, clan: "Ezek" },
  { id: 2, name: "nem", wings: 2, wheels: 2, clan: "klánban" },
  { id: 3, name: "ismerem", wings: 3, wheels: 3, clan: "járnak?" },
];
