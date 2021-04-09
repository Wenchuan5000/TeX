```js
function generateIdeal(generators) {
  var ideal = [];

  for (var i = 0; i < generators.length; i++) {
    ideal.push(generators[i])
  }

  // I1
  if (generators.includes(0) == false) {
    ideal.push(0);
  }

  // I2
  for (var i = 0; i < generators.length; i++) {
    for (var k = 0; k < generators.length; k++) {
      var m = generators[i] + generators[k];
      if ((ideal.includes(m) == false) && (m <= Math.max(...generators))) {
        ideal.push(m);
      }
    }
  }

  // I3
  for (var i = 0; i < generators.length; i++) {
    for (var k = 1; k <= Math.max(...generators); k++) {
      var nm = generators[i] * k;
      if (ideal.includes(nm) == false && (nm <= Math.max(...generators))) {
        ideal.push(nm);
      }
    }
  }

  var outputArray = rearrange(ideal);
  return outputArray;
}

function rearrange(inputArray) {
  var array = [];
  for (var i = 0; i < inputArray.length; i++) {
    array.push(1);
  }

  for (var i = 0; i < inputArray.length; i++) {
    var isLessThan = 0;
    for (var k = 0; k < inputArray.length; k++) {
      if (inputArray[i] <= inputArray[k]) {
        isLessThan += 1;
      }
    }
    array[inputArray.length - isLessThan] = inputArray[i];
  }
  return array;
}

var myIdeal = generateIdeal([11,12,131])
console.log(myIdeal);
```

