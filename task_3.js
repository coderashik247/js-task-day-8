const square = (array) => {
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum = sum + array[i]*array[i];
    }

    const avg = sum / array.length;
    return avg;
}

const array = [2, 3, 5, 7];
console.log(square(array));