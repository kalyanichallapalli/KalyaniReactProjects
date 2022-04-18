const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const squaresOfEvenNumbers = numbers.filter(e => e % 2 == 0)
                                    .map(e => e ** 2);
console.log(squaresOfEvenNumbers);
