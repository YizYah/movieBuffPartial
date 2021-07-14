import test from 'ava'

import {FilmFacts} from '../FilmFacts'

import {
    mockSessionFromQuerySet,
    QuerySpec
} from 'neo-forgery'
import {filmInfo} from '../src/filmInfo'

const {filmQuery} = require('../filmQuery')
const {expectedOutput} = require('./data/expectedOutput')
const title = 'Hoffa'

const querySet: QuerySpec[] = [{
    name: 'requestByTitle',
    query: filmQuery,
    params: {title},
    output: expectedOutput
}]

const filmFacts:FilmFacts = {
    tagline: "He didn't want law. He wanted justice.",
    year: 1992,
}

test('mockSessionFromQuerySet returns correct output', async t => {
    const session = mockSessionFromQuerySet(querySet)
    const output = await filmInfo(title, session)
    t.deepEqual(output,filmFacts)
})
