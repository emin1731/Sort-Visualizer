const MergeSort = (array, position, arraySteps, colorSteps) => {
	if (array.length === 1) return array;
	let mid = Math.floor(array.length / 2); // middle of array

	let L = MergeSort(array.slice(0, mid), position, arraySteps, colorSteps);   // repeat merge-sort with left or right half of array
	let R = MergeSort(array.slice(mid), position + mid, arraySteps, colorSteps);

	let arrayNew = merge(L, R, position, arraySteps, colorSteps);   // merge two merged/sorted arrays
	arraySteps.push(arraySteps[arraySteps.length - 1].slice()); //create new step with merged array 
	colorSteps.push(
		colorSteps[colorSteps.length - 1]   //current step colors 
			.slice()    // copy
			.fill(arrayNew.length === arraySteps[0].length ? 2 : 0) // fill green if merged array equal to initial array
	);
	return arrayNew;
};

const merge = (L, R, position, arraySteps, colorSteps) => {
	let arrayNew = [];  
	let A = 0;
	let B = 0;

	while (L.length > 0 && R.length > 0) {
		if (L[A] < R[B]) {
			arrayNew.push(L.shift());   // push first elem of array 
			insertStep(arrayNew, position, arraySteps);
		} else {
			arrayNew.push(R.shift());   // push first elem of array 
			insertStep(arrayNew, position, arraySteps);
		}
		updateColor(position, colorSteps, arrayNew.length - 1, [], []);
	}


	if (L.length !== 0 || R.length !== 0) {
		updateColor(position, colorSteps, arrayNew.length, L, R);
		arrayNew = arrayNew.concat(L);
		arrayNew = arrayNew.concat(R);
		insertStep(arrayNew, position, arraySteps);
	}

	return arrayNew;
};

const updateColor = (position, colorSteps, start, L, R) => {
	let colorKey = colorSteps[colorSteps.length - 1].slice();
	let end = position + start + L.length + R.length;
	start = start + position;

	if (end === start) {
		colorKey.fill(1, start, end + 1);
	} else {
		colorKey.fill(0, start, end);
	}
	colorSteps.push(colorKey);
};



const insertStep = (arrayNew, position, arraySteps) => {
    let currentStep = arraySteps[arraySteps.length - 1].slice();    // make copy of array
	currentStep.splice(position, arrayNew.length, ...arrayNew); // replace part of array with new array 
	arraySteps.push(currentStep);   // create new step
}
export default MergeSort;