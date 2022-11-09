function addTokens(input, tokens){
    
    if(typeof input === 'string' || input instanceof String){

        if(input.length < 6){
            throw new Error('Input should have at least 6 characters');
        }else{
            if(!input.includes('...')){
                return input;
            }else{
                let checker=tokens.split(': ');
                let words=input.split(' ');
                if(checker[0]==='tokenName'&&checker[1]==='string'&&checker[2].length>2){
                //     for(let i=0;i<words.length;i++){
                //         if(words[i]==='...'){
                //             words[i]=`{${checker[i]}}`;
                //         }
                //     }
                //     return words.join(' ');
                input.replace('...',`{${checker[2]}}`);
                return input;
                }else{
                    throw new Error('Invalid array format'); 
                }
            }

        }
    }
    else{
        throw new Error('Invalid input');
    }

}

const app = {
    addTokens: addTokens
}

module.exports = app;