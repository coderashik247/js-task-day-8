const multiply = (n1, n2, n3) => (n1*n2*n3)
const result = multiply(1,2,3);
console.log(result);

const threeLinePrint = `
I am a web Developer.
I love to code.
I love to eat biryani.
`

console.log(threeLinePrint);


const twoParameter = (one , two=8) => (one + two)

const resultForTP = twoParameter(8);
console.log(resultForTP);