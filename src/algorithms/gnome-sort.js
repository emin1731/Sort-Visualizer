import { swap } from "./helpers";

const GnomeSort = (array, position, steps, colors) => {
    let colorKey = colors[colors.length - 1].slice();
    let index = 0;
    
        while (index < array.length) {
            if (index === 0)
                index++;
            if (array[index] >= array[index - 1])
                index++;
            else {
                // let temp = 0;
                // temp = array[index];
                // array[index] = array[index - 1];
                // array[index - 1] = temp;
                swap(array, index, index - 1)
                index--;
                steps.push(array.slice());
                colorKey[index] = 1;
                colorKey[index - 1] = 1;
                colors.push(colorKey.slice());
                colorKey[index] = 0;
                colorKey[index - 1] = 0;

            }

        }
        colors[colors.length - 1] = new Array(array.length).fill(2);
        return;
};



export default GnomeSort;
