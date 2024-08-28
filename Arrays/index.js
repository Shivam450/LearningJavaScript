function niceArray(N, array, K) {
    let count = 0;
    for(let i=0; i<N; i++){
      if(array[i] % 2 == 0){
        count += 1
      }
    }
    if(count > K){
      console.log("Nice Array")
    }else{
      console.log("Bad Array")
    }
}

niceArray(5, [1,2,3,4,5], 2)

function oddsOfOdds(n,A){
    let count = 0
   for(let i=0; i<n; i++){
     let currentElement = A[i];
     if(currentElement % 2 !==0){
       count++;
     }
   }
   if(count % 2 !==0){
     console.log("Yes")
   }else{
     console.log("No")
   }
}

oddsOfOdds(5, [1,2,3,4,5])