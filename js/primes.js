function findPrimes(n){

    // takes a number - prints all prime numbers from zero to that number

    //edge cases
    if(n<=1)return[];
    
        let primes = [];
        for(let i = 2; i<=n; i++){
            let isPrime = true;
            for(let j = 2; j*j<i; j++){
                if(i%j == 0){
                   isPrime = false;
                   break;
                }
            }
             if(isPrime) primes.push(i);
            }
        
            return primes;
        }

    

console.log(findPrimes(30));