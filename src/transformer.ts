import { ITransformer } from "./hero-interface";

/**
 * Állítsd be helyesen a TransformerHero osztályt!
 * Ez az ITransformer interfészt implementálja.
 * Neve: TransformerHero
 * Deklaráld benne az interfész által megkövetelt változókat.
 * Definiáld a konstruktort és kérj be minden változót, majd állítsd be őket.
 */
export class TransformerHero implements ITransformer {
  constructor(
    public id: number,
    public name: string,
    public wings: number,
    public wheels: number,
    public clan: string,
    public photo?: string
  ) {}
}
