

const getMiddle = (word) => {
    let len = word.length;
    let index = len / 2 ;
        if( //even
            len % 2 == 0){
                let mid = word[Math.floor(index)-1] + word[Math.floor(index)];
                return mid;
        }
        if(//odd
            len % 2 != 0){
                    return word[Math.floor(index)];
        }
        if(len == 1){
            return word;
        }

    
}


console.log(getMiddle('alexnaders');
