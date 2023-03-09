export const insertStep = (arrayNew, position, arraySteps) => {
    let currentStep = arraySteps[arraySteps.length - 1].slice();    // make copy of array
	currentStep.splice(position, arrayNew.length, ...arrayNew); // replace part of array with new array 
	arraySteps.push(currentStep);   // create new step
}

export const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}