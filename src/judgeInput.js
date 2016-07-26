class JudegeInput {
    static judegeInput(input) {
        if(input.length !=4){
            return false
        }
        const inputArray = input.split('');

        for(const input of inputArray){
            if(inputArray.indexOf(input) != inputArray.lastIndexOf(input)){
                return false;
            }
        }

        return true;
    }
}

module.exports = JudegeInput;