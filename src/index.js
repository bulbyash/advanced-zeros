module.exports = function getZerosCount(number, base) {
  var b = base;
  var multiples = [];
  var cNumber = [];
  
  //finding mutliples
  for (i = 2; i <= base; i++) {
    if (b % i == 0) {
      b = b / i;
      multiples.push(i);
      i = i - 1;
    }
  }
  
  var g = 0;
  simils = 1;
  i = 1;

  //finding simils
  do {
    if (multiples[g] == multiples[i]) {
      simils = simils + 1;
      i = i + 1;
    } else {
      cNumber.push(multiples[g]);
      cNumber.push(simils);
      g = g + simils;
      simils = 1;
      i = i + 1;
    }
  } while (i <= multiples.length);
  

  var min = undefined;
  var degr = 0;

  //getting zeros count
  for (i = 0; i < cNumber.length; i = i + 2) {
    for (z = 1; Math.floor(number / Math.pow(cNumber[i], z)) >= 1; z++) {
      degr = degr + Math.floor(number / Math.pow(cNumber[i], z));
    }

    var potential = Math.floor(degr / cNumber[i + 1]);
   
    if (potential < min || min == undefined) {
      min = potential;
      degr = 0;
    }
    degr = 0;
  }

  return min;
};