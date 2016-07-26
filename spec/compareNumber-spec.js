'use strict';

const CompareNumber = require('../src/compareNumber');

describe('guess',() => {
    
    const answer = '1234';
    
    it('should return all right',() => {
        const input = '1234';
        const result = CompareNumber.compareNumber(answer,input);
        const expectResult = '4A0B';
        
        expect(result).toEqual(expectResult);
    });
    
    it('should return all wrong',() => {
        const input = '5555';
        const result = CompareNumber.compareNumber(answer,input);
        const expectResult = '0A0B';
        
        expect(result).toEqual(expectResult);
    });

    it('should return some right',() => {
        const input = '4321';
        const result = CompareNumber.compareNumber(answer,input);
        const expectResult = '0A4B';

        expect(result).toEqual(expectResult);
    });
})
