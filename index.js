function driveCar() {
    console.log("drive to the store.");
}

function lateNightSnack() {
    console,log("eat chips")
}

function receivesAFunction(lateNightSnack) {
    driveCar();
    lateNightSnack();
  }


function returnsANamedFunction(){
    return function cars(){

    }
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}