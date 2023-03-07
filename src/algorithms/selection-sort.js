const SelectionSort = (array, position, steps, colors) => {

    let colorKey = colors[colors.length - 1].slice();

    for (let i = 0; i < array.length; i++) {
        let min = i
		for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
            steps.push(array.slice());
            colorKey[i] = 1;
            colorKey[min] = 1;
            colors.push(colorKey.slice());
            colorKey[i] = 0;
            colorKey[min] = 0;
            
        }
            // if (min !== i) {
        array = swap (array, i, min)
        colorKey[i] = 2;
        steps.push(array.slice());
        colors.push(colorKey.slice());
    // }
	}
    colors[colors.length - 1] = new Array(array.length).fill(2);
    // return;
};

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

export default SelectionSort;
