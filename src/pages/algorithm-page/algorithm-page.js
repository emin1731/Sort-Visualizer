import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import styled from 'styled-components'
import './algorithm-page.css'

// Components
import AlgorithmDisplay from '../../components/algorithm-display/algorithm-display';
import ComplexityDisplay from '../../components/complexity-display/complexity-display';
import Description from '../../components/description/description';
import ArrayInput from '../../components/array-input/array-input';
import SpeedInput from '../../components/speed-input/speed-input';

// Algorithms
import BubbleSort from '../../algorithms/bubble-sort';
import SelectionSort from '../../algorithms/selection-sort';
import MergeSort from '../../algorithms/merge-sort';
import InsertionSort from '../../algorithms/insertion-sort';
import quickSort from '../../algorithms/quick-sort';
import GnomeSort from '../../algorithms/gnome-sort';
import ShakerSort from '../../algorithms/shaker-sort';
import OddEvenSort from '../../algorithms/odd-even-sort';
import HeapSort from '../../algorithms/heap-sort';
import Footer from '../../layouts/footer/footer';

export default class AlgorithmPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            array: [],
            steps:[],
            colorKey: [],
            colors: [],
            timouts: [],
            currentStep: 0,
            speed: 50,
            size: 40,
            algorithm: props.algorithm
    
        }
        this.alg = {
            selection: (array, position, steps, colors) => {
                // this.onSelectionSort(this.state.array)
                SelectionSort(array, position, steps, colors)
            },
            bubble: (array, position, steps, colors) => {
                // this.onBubbleSort(this.state.array)
                BubbleSort(array, position, steps, colors)
            },
            merge: (array, position, steps, colors) => {
                MergeSort(array, position, steps, colors)
            },
            insertion: (array, position, steps, colors) => {
                InsertionSort(array, position, steps, colors)
            },
            quick: (array, position, steps, colors) => {
                quickSort(array, position, steps, colors)
            },
            gnome: (array, position, steps, colors) => {
                GnomeSort(array, position, steps, colors)
            },
            shaker: (array, position, steps, colors) => {
                ShakerSort(array, position, steps, colors)
            },
            oddeven: (array, position, steps, colors) => {
                OddEvenSort(array, position, steps, colors)
            },
            heap: (array, position, steps, colors) => {
                HeapSort(array, position, steps, colors)
            },
            test: (fir, sec) => {
                this.test(fir, sec)
            }
        }
    }
    clearTimeouts = () => {
		this.state.timouts.forEach((timeout) => clearTimeout(timeout));
		this.setState({ timeouts: [] });
	};

	clearColorKey = () => {
		let blank = new Array(this.state.size).fill(0);
		this.setState({ colorKey: blank, colors: [blank] });
	};

    handleStart = () => {
        let steps = this.state.steps.slice();
		let colors = this.state.colors.slice();
        // this.clearTimeouts();
		// let timeouts = [];

        let i = 0;
		while (i < steps.length - this.state.currentStep) {
			let timeout = setTimeout(() => {
				let currentStep = this.state.currentStep;
				this.setState({
					array: steps[currentStep],
					colorKey: colors[currentStep],
					currentStep: currentStep + 1,
				});
				// timeouts.push(timeout);
			}, this.state.speed * i);
			i++;
		}

		// this.setState({
		// 	timeouts: timeouts,
		// });
    }
    generateSteps = () => {
		let array = this.state.array.slice();
		let steps = this.state.steps.slice();
		let colors = this.state.colors.slice();

		// BubbleSort(array, 0, steps, colors);
        // SelectionSort(array, 0, steps, colors);
        this.runAlgorithm(array, 0, steps, colors)
		this.setState({
			steps: steps,
			colors: colors,
		});
	};
    generateArray = () => {
        // this.clearTimeouts();
        this.clearColorKey()

        let size = this.state.size;
        let arr = this.state.array.slice();

        for(let i = size - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        this.setState(
            {
                array: arr,
                steps: [arr],
                size: size,
                currentStep: 0,
            },
            () => this.generateSteps()
        );
        console.log(arr);
    };

    get(object, path, defval = null) {
        if (typeof path === "string") path = path.split(".");
        return path.reduce((xs, x) => (xs && xs[x] ? xs[x] : defval), object);
    }
    runAlgorithm = (array, position, steps, colors) => {
        let name = this.state.algorithm
        // let name = 'test'
        this.get(this.alg, name)(array, position, steps, colors)
    }
    componentDidMount () {
        this.onChangeSize(this.state.size)
        // await this.onShuffleArray(this.state.array)
        // this.generateArray()
    }

    onChangeSize = (value) => {
        console.log(value)
        this.setState(state => {
            let newlist = Array.from({length: value}, (_, i) => i + 1)
            return { 
                array: newlist,
                size: value,
                currentStep: 0
            }
        },  () => this.generateArray())
    }
    onChangeSpeed = (value) => {
        console.log(value)
        this.setState(state => {
            return {speed: value}
        })
        
    }
    test = (val, sec) => {
        console.log(val)
        console.log(sec)
        // console.log(this.state.array)
        // console.log(this.state.colorKey)
        // console.log(this.state.colors)
    } 
    render() {
        return(
            <Container>
            <h1>{this.props.name}</h1>

            <Row>
                <Col sm='6' md='6' lg='2'>
                    <ControlButton onClick={() => this.handleStart()} >Start</ControlButton>

                </Col>
                <Col sm='6' md='6'lg='2'>
                <ControlButton onClick={this.generateArray} >Mix</ControlButton>

                </Col>
                <Col sm='12' md='6' lg='4'>
                    <SpeedInput onSubmit={this.onChangeSpeed} value={this.state.speed}/>
                </Col>
                <Col sm='12' md='6' lg='4'>
                    <ArrayInput onSubmit={this.onChangeSize} value={this.state.size}/>
                {/* <ControlButton onClick={() => this.runAlgorithm()}>Start</ControlButton> */}
                {/* <ControlButton onClick={() => this.onShuffleArray(this.state.array)}>Mix</ControlButton> */}
                {/* <ControlButton onClick={() => this.test()} >log</ControlButton> */}
                {/* <ControlButton onClick={() => this.clearColorKey()} >color</ControlButton> */}
                </Col>
            </Row>

            <Row>
                <Col>
                    <AlgorithmDisplay array={this.state.array} colorKey={this.state.colorKey}/>
                </Col>
            </Row>
            <Row>
              <Col lg={8}>
                <Description content={this.props.description}/>
              </Col> 
              <Col>
                <ComplexityDisplay complexity={this.props.complexity}/>
              </Col>
            </Row>
            {/* <Footer/> */}
            </Container>
        )
    }
}



const ControlButton = styled.button`
    // width: 110px;
    width: 100%;
    height: 45px;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.secondary};
    border-radius: 10px;
    border: none;
    margin-bottom: 12px;
    margin-left: 0;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        background-color: #31353c;
        transition: 0.2s;
      }
`

// onShuffleArray = (arr) => {
//     let len = arr.length
//     for(let i = len - 1; i > 0; i--) {
//         setTimeout(() => {
//             this.setState(state => {
//                 let j = Math.floor(Math.random() * (i + 1));
//                 let newlist = [...state.array];
//                 [newlist[i], newlist[j]] = [newlist[j], newlist[i]];
//                 return { array: newlist}
//             })
//         }, i * this.state.speed);
//     }
//     this.setState({
//         steps: [this.state.array],
//         currentStep: 0
//     })
//     console.log(this.state.steps)
// }

// onSelectionSort = (arr) => {
//     let n = arr.length;
//     for(let i = 0; i < n; i++) {
//         console.log(`selsort ${i}`)
//         setTimeout(() => {
//             this.setState(state => {
//                 let newlist = [...state.array];
//                 let min = i;
//                 for(let j = i+1; j < n; j++){
//                     if(newlist[j] < newlist[min]) {
//                         min=j; 
//                     }
//                 }
//                 if (min != i) {
//                     // Swapping the elements
//                     [newlist[i], newlist[min]] = [newlist[min], newlist[i]]
//                     return { array: newlist}   

//                 }
//             })
//         }, i * this.state.speed);
//     }
// }
// onBubbleSort = (arr) => {
//     let n = arr.length;
//     for(let i = 0; i < n - 1; i++) {
//         console.log('firts loop number:', i)
//         setTimeout(() => {
//         for(let j = 0; j < n - i - 1; j++) {
//             setTimeout(() => {
//                 this.setState(state => {
//                     console.log('second loop', j)
//                     let newlist = [...state.array];
//                     if(newlist[j] > newlist[j+1]) {
//                             [newlist[j], newlist[j + 1]] = [newlist[j + 1], newlist[j]]
//                             return { array: newlist}  
//                         }
//                 })
//             }, i * this.state.speed)
//         }
//     }, i * this.state.speed)
//     }
// }
