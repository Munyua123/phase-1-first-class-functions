 function receivesAFunction(callback) {
 return callback()  
}
console.log(callback())


function returnsANamedFunction()  {
    return  function returnsANamedFunction() {}
}

function returnsAnAnonymousFunction() {
    return () => {}
  }