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
      description: "(Selection sort) Quick Sort is a sorting algorithm based on splitting the data structure in smaller partitions and sort them recursively until the data structure is sorted. This division in partitions is done based on an element, called pivot: all the elements bigger than the pivot get placed on the right side of the structure, the smaller ones to the left, creating two partitions. Next, this procedure gets applied recursively to the two partitions and so on. This partition technique based on the pivot is called Divide and conquer. It's a performant strategy also used by other sorting algorithms, such as Merge Sort.",
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
      description: "(Bubble sort) Quick Sort is a sorting algorithm based on splitting the data structure in smaller partitions and sort them recursively until the data structure is sorted. This division in partitions is done based on an element, called pivot: all the elements bigger than the pivot get placed on the right side of the structure, the smaller ones to the left, creating two partitions. Next, this procedure gets applied recursively to the two partitions and so on. This partition technique based on the pivot is called Divide and conquer. It's a performant strategy also used by other sorting algorithms, such as Merge Sort.",
      complexity: {
        average: 'O(n2)',
        best_case: 'O(n2)',
        worst_case: 'O(n2)',
        space: 'O(1)'
      }
  },
  {
      name: "Merge Sort",
      route: "/merge-sort",
      description: "Merge sort Quick Sort is a sorting algorithm based on splitting the data structure in smaller partitions and sort them recursively until the data structure is sorted. This division in partitions is done based on an element, called pivot: all the elements bigger than the pivot get placed on the right side of the structure, the smaller ones to the left, creating two partitions. Next, this procedure gets applied recursively to the two partitions and so on. This partition technique based on the pivot is called Divide and conquer. It's a performant strategy also used by other sorting algorithms, such as Merge Sort.",
      complexity: {
        average: 'O(n2)',
        best_case: 'O(n2)',
        worst_case: 'O(n2)',
        space: 'O(1)'
      }
  }
]



const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainPage data={data}/>,
    errorElement: <div>Error 404</div>,
  },
  {
    path: "alg",
    element: <AlgorithmPage key={123} name={data[0].name} description={data[0].description} complexity={data[0].complexity}/>
  },
  {
    path: "alg2",
    element: <div>algorithm 2</div>,
    errorElement: <div>Error 404</div>,
    // element: <AlgorithmPage key={123} name={data[0].name} description={data[0].description} complexity={data[0].complexity}/>,
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

export default App;
