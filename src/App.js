// import logo from './logo.svg';
import './App.css';
import Header from './layouts/header/header';
import MainPage from './pages/main-page/main-page';
import AlgorithmPage from './pages/algorithm-page/algorithm-page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { LightMode, DarkMode, GlobalStyle } from './theme';



const data = [
  {
      name: "Selection Sort",
      route: "/selection-sort",
      algorithm: 'selection',
      description: "Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted portion. This process is repeated for the remaining unsorted portion of the list until the entire list is sorted. One variation of selection sort is called “Bidirectional selection sort” that goes through the list of elements by alternating between the smallest and largest element, this way the algorithm can be faster in some cases.",
      complexity: {
        title: 'quadratic',
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
      description: "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.",
      complexity: {
        title: 'quadratic',
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
      description: `Merge sort is a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.  In simple terms, we can say that the process of merge sort is to divide the array into two halves, sort each half, and then merge the sorted halves back together. This process is repeated until the entire array is sorted. One thing that you might wonder is what is the specialty of this algorithm. We already have a number of sorting algorithms then why do we need this algorithm? One of the main advantages of merge sort is that it has a time complexity of O(n log n), which means it can sort large arrays relatively quickly. It is also a stable sort, which means that the order of elements with equal values is preserved during the sort. Merge sort is a popular choice for sorting large datasets because it is relatively efficient and easy to implement. It is often used in conjunction with other algorithms, such as quicksort, to improve the overall performance of a sorting routine.`,
      complexity: {
        title: 'logarithmic',
        average: 'O(n × log n)',
        best_case: 'O(n × log n)',
        worst_case: 'O(n × log n)',
        space: 'O(1)'
      }
  },
  {
    name: "Insertion Sort",
    route: "/insertion-sort",
    algorithm: 'insertion',
    description: "Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.",
    complexity: {
      title: 'quadratic',
      average: 'O(n2)',
      best_case: 'O(n)',
      worst_case: 'O(n2)',
      space: 'O(1)'
    }
  },
  {
    name: "Quick Sort",
    route: "/quick-sort",
    algorithm: 'quick',
    description: "Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.  The key process in quickSort is a partition(). The target of partitions is, given an array and an element x of an array as the pivot, put x at its correct position in a sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.",
    complexity: {
      title: 'logarithmic',
      average: 'O(n2)',
      best_case: 'O(n)',
      worst_case: 'O(n2)',
      space: 'O(1)'
    }
  },
  {
    name: "Gnome Sort",
    route: "/gnome-sort",
    algorithm: 'gnome',
    description: "(Gnome sort) Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.",
    complexity: {
      title: 'quadratic',
      average: 'O(n2)',
      best_case: 'O(n)',
      worst_case: 'O(n2)',
      space: 'O(1)'
    }
  },
  {
    name: "Shaker Sort",
    route: "/shaker-sort",
    algorithm: 'shaker',
    description: "(Shaker sort) Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.",
    complexity: {
      title: 'quadratic',
      average: 'O(n2)',
      best_case: 'O(n)',
      worst_case: 'O(n2)',
      space: 'O(1)'
    }
  },
  {
    name: "Odd Even Sort",
    route: "/odd-even-sort",
    algorithm: 'oddeven',
    description: "(Odd even sort) Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.",
    complexity: {
      title: 'quadratic',
      average: 'O(n2)',
      best_case: 'O(n)',
      worst_case: 'O(n2)',
      space: 'O(1)'
    }
  },
  // {
  //   name: "Heap Sort",
  //   route: "/heap-sort",
  //   algorithm: 'heap',
  //   description: "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.",
  //   complexity: {
  //     title: 'logarithmic',
  //     average: 'O(n2)',
  //     best_case: 'O(n)',
  //     worst_case: 'O(n2)',
  //     space: 'O(1)'
  //   }
  // },
  
]




const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainPage data={data} />,
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
  },
  {
    path: data[3].route,
    element: <AlgorithmPage 
                algorithm={data[3].algorithm}
                key={123} 
                name={data[3].name} 
                description={data[3].description} 
                complexity={data[3].complexity}/>
  },
  {
    path: data[4].route,
    element: <AlgorithmPage 
                algorithm={data[4].algorithm}
                key={123} 
                name={data[4].name} 
                description={data[4].description} 
                complexity={data[4].complexity}/>
  },
  {
    path: data[5].route,
    element: <AlgorithmPage 
                algorithm={data[5].algorithm}
                key={123} 
                name={data[5].name} 
                description={data[5].description} 
                complexity={data[5].complexity}/>
  },
  {
    path: data[6].route,
    element: <AlgorithmPage 
                algorithm={data[6].algorithm}
                key={123} 
                name={data[6].name} 
                description={data[6].description} 
                complexity={data[6].complexity}/>
  },
  {
    path: data[7].route,
    element: <AlgorithmPage 
                algorithm={data[7].algorithm}
                key={123} 
                name={data[7].name} 
                description={data[7].description} 
                complexity={data[7].complexity}/>
  },
  // {
  //   path: data[8].route,
  //   element: <AlgorithmPage 
  //               algorithm={data[8].algorithm}
  //               key={123} 
  //               name={data[8].name} 
  //               description={data[8].description} 
  //               complexity={data[8].complexity}/>
  // },
  // {
  //   path: data[5].route,
  //   element: <AlgorithmPage 
  //               algorithm={data[5].algorithm}
  //               key={123} 
  //               name={data[5].name} 
  //               description={data[5].description} 
  //               complexity={data[5].complexity}/>
  // },
  
])


{/* <a href="https://www.flaticon.com/free-icons/dark" title="dark icons">Dark icons created by adriansyah - Flaticon</a> */}

function App() {

  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }



  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? DarkMode : LightMode}>
        <GlobalStyle/>
      <Header onSwitchTheme={toggleTheme} iconTheme={theme}/>
      {/* <MainPage data={data}/> */}
      {/* <AlgorithmPage name={data[0].name} description={data[0].description} complexity={data[0].complexity}/> */}
      <RouterProvider router={router} />

      </ThemeProvider>
    </>
  );
}

//nnn
///

export default App;
