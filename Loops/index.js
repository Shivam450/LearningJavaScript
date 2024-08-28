function yourFirstNested(num) {
    for(let i=0; i<num; i++){
      let bag = "";
      for(let j=1; j<=num; j++){
        bag = bag + j + " "
      }
      console.log(bag)
    }
}


function patternOfN(N) {
    let count = 1
    for(let i=0; i<N; i++){
    let bag = "" 
      for(let j=0; j<N; j++){
       bag = bag + count++ + " "
      }
      console.log(bag)
    }
  }