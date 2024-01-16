/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {

    function counter(str){
        let counter = new Map();

        for(let char of str){
            counter.set(char, (counter.get(char)|| 0) + 1 )
        }
        return counter;
    }

    let s_counter = counter(s);
    let t_counter = counter(t);

    for(let [char, count] of t_counter){
        if(t_counter.get(char) > (s_counter.get(char) || 0)){
            return char;
        }
    }
    
};
