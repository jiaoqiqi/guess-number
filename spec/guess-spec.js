'use strict';

const Guess = require('../src/guess');
const AnswerGenerator  =  require('../src/answerGenerator.js');

describe('guess',() => {
    it('should play the game' , () => {
        spyOn(AnswerGenerator,'gengrate').and.returnValue('1234');
        const result = Guess.guess('1234');
    });
});