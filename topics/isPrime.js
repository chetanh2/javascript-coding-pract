const isPrime = (numberrray) => {

    const primeNumber = [];
    const compositeNumber = [];

    for(let num of numberrray){

        let count = 0;

        for(let i = 1;i <= num;i++){
            if(num % i == 0){
                count++
            }
        }

        if(count == 2){
            primeNumber.push(num)
        }else{
            compositeNumber.push(num)
        }

        
    }

    return {
        primeNumber,compositeNumber
    }

}


console.log(isPrime([2,3,4,5,6,7,8]))