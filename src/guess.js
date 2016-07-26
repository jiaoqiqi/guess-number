'use strict';

const AnswerGenerator  =  require('../src/answerGenerator.js');
const CompareNumber = require('../src/compareNumber');

class Guess {
    static guess(input){
        const answer = AnswerGenerator.gengrate();
        return CompareNumber.compareNumber(input,answer);
    }
}

module.exports = Guess;