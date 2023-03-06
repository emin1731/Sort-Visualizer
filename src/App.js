// import logo from './logo.svg';
import './App.css';
import Header from './layouts/header/header';
import MainPage from './pages/main-page/main-page';
import AlgorithmPage from './pages/algorithm-page/algorithm-page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const data = [
  {
      name: "Selection Sort",
      route: "/selection-sort",
      algorithm: 'selection',
      description: "Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted portion. This process is repeated for the remaining unsorted portion of the list until the entire list is sorted. One variation of selection sort is called “Bidirectional selection sort” that goes through the list of elements by alternating between the smallest and largest element, this way the algorithm can be faster in some cases.",
      complexity: {
        average: 'O(n2)',
        best_case: 'O(n2)',
        worst_case: 'O(n2)',
        space: 'O(1)'
      }
  },
  {
      name: "Bubble Sort",
      route: "/bubble-sort",
      algorithm: 'bubble',
      description: "(Bubble sort) Quick Sort is a sorting algorithm based on splitting the data structure in smaller partitions and sort them recursively until the data structure is sorted. This division in partitions is done based on an element, called pivot: all the elements bigger than the pivot get placed on the right side of the structure, the smaller ones to the left, creating two partitions. Next, this procedure gets applied recursively to the two partitions and so on. This partition technique based on the pivot is called Divide and conquer. It's a performant strategy also used by other sorting algorithms, such as Merge Sort.",
      complexity: {
        average: 'O(n2)',
        best_case: 'O(n)',
        worst_case: 'O(n2)',
        space: 'O(1)'
      }
  },
  {
      name: "Merge Sort",
      route: "/merge-sort",
      algorithm: 'merge',
      description: "Merge sort Quick Sort is a sorting algorithm based on splitting the data structure in smaller partitions and sort them recursively until the data structure is sorted. This division in partitions is done based on an element, called pivot: all the elements bigger than the pivot get placed on the right side of the structure, the smaller ones to the left, creating two partitions. Next, this procedure gets applied recursively to the two partitions and so on. This partition technique based on the pivot is called Divide and conquer. It's a performant strategy also used by other sorting algorithms, such as Merge Sort.",
      complexity: {
        average: 'O(n × log n)',
        best_case: 'O(n × log n)',
        worst_case: 'O(n × log n)',
        space: 'O(1)'
      }
  },
  
]

const DemoClick = (id) => {
  console.log(id)
}

const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainPage data={data} onItemSelected={DemoClick}/>,
    errorElement: <div>Error 404</div>,
  },
  {
    path: data[0].route,
    element: <AlgorithmPage 
                algorithm={data[0].algorithm}
                key={123} 
                name={data[0].name} 
                description={data[0].description} 
                complexity={data[0].complexity}/>
  },
  {
    path: data[1].route,
    element: <AlgorithmPage 
                algorithm={data[1].algorithm}
                key={123} 
                name={data[1].name} 
                description={data[1].description} 
                complexity={data[1].complexity}/>
  },
  {
    path: data[2].route,
    element: <AlgorithmPage 
                algorithm={data[2].algorithm}
                key={123} 
                name={data[2].name} 
                description={data[2].description} 
                complexity={data[2].complexity}/>
  }
  
])



function App() {
  return (
    <>
      <Header/>
      {/* <MainPage data={data}/> */}
      {/* <AlgorithmPage name={data[0].name} description={data[0].description} complexity={data[0].complexity}/> */}
      <RouterProvider router={router} />
    </>
  );
}

//nnn
///

export default App;
