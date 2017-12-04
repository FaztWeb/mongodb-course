// to start the shell: mongo

// the shell can be execute javascript
x = 200;
x / 5;

// and we can use the standard javascript libraries
Math.sin(Math.PI / 2)

new Date("2018/1/1")

"Hello World".replace("World, Mongodb");

// and we can define functions
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const double = n => n * 2;

// and the shell also recongnise incomplete statments with ENTER
