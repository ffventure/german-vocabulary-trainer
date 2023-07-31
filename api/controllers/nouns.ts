import { Router } from 'express'
import Noun from '../models/noun'

const nounsRouter = Router()

nounsRouter.get('/', (_request, response) => {
  Noun.find({}).then(nouns => {
    console.log(nouns)
    response.json(nouns)
  })
})

nounsRouter.post('/', (request, response, next) => {
  const body = request.body

  const note = new Noun({
    word: body.word,
    genus: body.genus,
    singular: body.singular,
    plural: body.plural,
    sk: body.sk
  })

  note.save()
    .then(savedNoun => {
      response.json(savedNoun)
    })
    .catch(error => next(error))
})

export default nounsRouter