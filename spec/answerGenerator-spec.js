'use strict'
const AnswerGenerator  =  require('../src/answerGenerator.js');

describe('Answer Generator ', () => {
    it('should generator answer', () => {
        const isUnique = (item, index, array) => {
            return array.lastIndexOf(item) === index;
        };
        
        const answer = AnswerGenerator.gengrate();
        expect(answer.length).toEqual(4);
        expect(answer.every(isUnique)).toBeTruthy();
        expect(AnswerGenerator.gengrate()).not.toEqual(AnswerGenerator);
    });
});