import { swap } from "./helpers";
const OddEvenSort = (array, position, steps, colors) => {

    let colorKey = colors[colors.length - 1].slice();

    var sorted = false;
    while (!sorted) {
        sorted = true;
        for (var i = 1; i < array.length - 1; i += 2) {
        if (array[i] > array[i+1]) {
            // [array[i], array[i+1]] = [array[i+1], array[i]]
            array = swap (array, i, i + 1)
            steps.push(array.slice());
            colorKey[i] = 1;
            colorKey[i + 1] = 1;
            colors.push(colorKey.slice());
            colorKey[i] = 0;
            colorKey[i + 1] = 0;
            sorted = false;
        }
        }
        for (var i = 0; i < array.length - 1; i += 2) {
        if (array[i] > array[i+1]) {
            // [array[i], array[i+1]] = [array[i+1], array[i]]
            array = swap (array, i, i + 1)
            steps.push(array.slice());
            colorKey[i] = 1;
            colorKey[i + 1] = 1;
            colors.push(colorKey.slice());
            colorKey[i] = 0;
            colorKey[i + 1] = 0;
            sorted = false;
        }
        }
        // steps.push(array.slice());
        // colors.push(colorKey.slice());
    }
    colors[colors.length - 1] = new Array(array.length).fill(2);
    return;
};



export default OddEvenSort;
