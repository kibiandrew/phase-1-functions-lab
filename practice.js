
start=34
destination=400
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance=distanceTravelledInFeet(start, destination);
    if(distance<=400){
     return 0;
    }
    if(distance>=400 && distance<=2000){
      return(distance-400)*0.02;
    }
    else if(distance>=2000 && distance<=2500){
      return 25;
    }
    else if(distance > 2500){
      return "cannot travel that far";
    }