import { Schema, model } from 'mongoose';

enum GenusEnum {
  Masculinum = 'm',
  Feminimum = 'f',
  Neutrum = 'n'
}

interface Declension {
  nominative: string;
  genitive: string;
  dative: string;
  accusative: string;
}

interface Noun {
  word: string;
  genus: string;
  singular: Declension;
  plural: Declension;
  sk: string;
}

const nounSchema = new Schema<Noun>({
  word: { type: String, required: true },
  genus: { type: String, required: true, enum: GenusEnum },
  singular: new Schema<Declension>({
    nominative: { type: String, required: true },
    genitive: { type: String, required: true },
    dative: { type: String, required: true },
    accusative: { type: String, required: true },
  }),
  plural: new Schema<Declension>({
    nominative: { type: String, required: true },
    genitive: { type: String, required: true },
    dative: { type: String, required: true },
    accusative: { type: String, required: true },
  }),
  sk: { type: String, required: true }
})

const Noun = model<Noun>('Noun', nounSchema)

export default Noun 