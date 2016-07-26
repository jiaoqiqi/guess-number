const CompareNumber = require('../src/compareNumber');
const AnswerGenerator = require('../src/answerGenerator');
const Input = require('../src/input');
const JudgeInput = require('../src/judgeInput');
const JudgeOutput = require('../src/judgeOutput');

class Play {
    static paly() {
        console.log('Welcome!\n');

        const answer = AnswerGenerator.gengrate();
        for (let i = 6; i > 0; i--) {
            console.log(`Please input your numbe'(${i}): `)
        }

        const input = Input.getInput();
        if (JudgeInput.judegeInput(input)) {
            const compareNumber = new CompareNumber();
            const output = compareNumber.output(output, answer);
            if (JudgeOutput.judgeOutput(output)) {
                console.log('Congratulations!');

                return;
            }
            console.log('output\n');
        }
        console.log(`Game Over ${answer}`);
    }
}

module.exports =  Play;