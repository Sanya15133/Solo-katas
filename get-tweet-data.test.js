const getTweetData = require('../get-tweet-data/get-tweet-data.js')

describe('getTweetData', () => {
    test('return correct length value for short strings', () => {
        expect(getTweetData("My awesome tweet")).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 })
    })
    test('return correct input value for mentions', () => {
        expect(getTweetData("My awesome tweet to @northcoders")).toEqual({ tags: [], mentions: ['@northcoders'], tagCount: 0, mentionCount: 1, length: 32 })
    })
    test('return correct values for hashtags', () => {
        expect(getTweetData("My awesome tweet about #coding")).toEqual({ tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30})
    })
    test('return correct values for hashtags and mentions', () => {
        expect(getTweetData("I am #coding with @northcoders I love #coding and @northcoders")).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 })
    })
    
    
})