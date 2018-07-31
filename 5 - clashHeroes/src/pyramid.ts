/*
  4
*
* *
* * *
* * * * 
* * *
* *
* 
  */

const pyramid = (num: number) => {
  let test = "";
  for(let i = 1; i <= num; i++){
    for(let j = 1; j <= i; j++){
      test += "* ";
    }
    test += "\n";
  }
  for(let u = num -1; u >= 1; u--){
    for(let j = 1; j <= u; j++){
      test += "* ";
    }
    test += "\n";
  }
  return test;
};

export default pyramid;