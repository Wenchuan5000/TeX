Js:

```js
function findDiv(n) {
  var divisors = [];
  for (var i = 1; i <= n; i++) {
    if (n % i == 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

function findCd(_n, _m) {
  var cd = [];
  var div_n = findDiv(_n);
  var div_m = findDiv(_m);

  for (var i = 0; i < div_n.length; i++) {
    for (var k = 0; k < div_m.length; k++) {
      if (div_n[i] == div_m[k]) {
        cd.push(div_m[k]);
      }
    }
  }

  var gcd = cd[cd.length - 1];

  console.log(gcd);
  return cd;
}
```

The console:

```js
4
```

