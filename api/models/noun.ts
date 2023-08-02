import { Schema, model } from 'mongoose';

enum GenusEnum {
  Masculinum = 'm',
  Feminimum = 'f',
  Neutrum = 'n'
}

interface Noun {
  word: string;
  genus: string;
  singular: {
    nominative: string;
    genitive: string;
    dative: string;
    accusative: string;
  };
  plural: {
    nominative: string;
    genitive: string;
    dative: string;
    accusative: string;
  };
  translations: [{
    language: string;
    translation: string;
  }];
}

const nounSchema = new Schema<Noun>({
  word: { type: String, required: true },
  genus: { type: String, required: true, enum: GenusEnum },
  singular: {
    nominative: { type: String, required: true },
    genitive: { type: String, required: true },
    dative: { type: String, required: true },
    accusative: { type: String, required: true },
  },
  plural: {
    nominative: { type: String, required: true },
    genitive: { type: String, required: true },
    dative: { type: String, required: true },
    accusative: { type: String, required: true },
  },
  translations: [{
    language: {type: String, required: true},
    translation: {type: String, required: true}
  }]
})

const Noun = model<Noun>('Noun', nounSchema)

export default Noun 