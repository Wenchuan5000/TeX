​	

```js
var myInts = [];

var myIntsMax = 23;

for (var i = 1; i <= myIntsMax; i++) {
  myInts.push(i);
}

// console.log(myInts);

var myPrime = [];

for (var k = 0; k < myInts.length; k++) {
  var currentNumber = k + 1;

  var divisors = [];

  for (var i = 1; i <= myInts[k]; i++) {
    if (myInts[k] % i == 0) {
      divisors.push(i);
    }
  }
  console.log(divisors);

  if (divisors.length == 2) {
    myPrime.push(currentNumber);
    console.log(currentNumber + " is a prime.")
  }
}

console.log("The prime number(s) before " + myIntsMax + " is \{" + myPrime + "\}");
```

