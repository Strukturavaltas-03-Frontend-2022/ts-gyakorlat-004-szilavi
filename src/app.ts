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

//valójában ez volt a feladat, de kíváncsi voltam, hogy miként működnek még a dolgok
export const transformers: TransformerHero[] = [
  new TransformerHero(1, "Ezeket", 1, 1, "Ezeket"),
  new TransformerHero(2, "nem", 2, 2, "klánban"),
  new TransformerHero(3, "ismerem", 3, 3, "járnak?"),
];
