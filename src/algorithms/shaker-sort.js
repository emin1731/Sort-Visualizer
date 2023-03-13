import { swap } from "./helpers";

const ShakerSort = (array, position, steps, colors) => {
    let colorKey = colors[colors.length - 1].slice();
    
    let is_Sorted = true;
    while (is_Sorted) {
        for (let i = 0; i< array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                // let temp = array[i];
                // array[i] = array[i + 1];
                // array[i+1] = temp;
                array = swap (array, i, i + 1)
                is_Sorted = true;

                steps.push(array.slice());
                // colorKey[i] = 1;
                colorKey[i + 1] = 1;
                colors.push(colorKey.slice());
                // colorKey[i] = 0;
                colorKey[i + 1] = 0;
            }
        }

        if (!is_Sorted)
            break;

        is_Sorted = false;

        for (let j = array.length - 1; j > 0; j--) {
            if (array[j-1] > array[j]) {
                // let temp = array[j];
                // array[j] = array[j - 1];
                // array[j - 1] = temp;
                array = swap (array, j, j - 1)
                is_Sorted = true;

                steps.push(array.slice());
                // colorKey[j] = 1;
                colorKey[j - 1] = 1;
                colors.push(colorKey.slice());
                // colorKey[j] = 0;
                colorKey[j - 1] = 0;
            }
        }
    }


    colors[colors.length - 1] = new Array(array.length).fill(2);
    return;
};



export default ShakerSort;
