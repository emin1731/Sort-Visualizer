import React, {Component} from 'react';
import Header from '../../layouts/header/header';
import { Col, Container, Row, Input, InputGroup, Button } from 'reactstrap';
import styled from 'styled-components'
import AlgorithmDisplay from '../../components/algorithm-display/algorithm-display';
import ComplexityDisplay from '../../components/complexity-display/complexity-display';
import Description from '../../components/description/description';
import './algorithm-page.css'
import ArrayInput from '../../components/array-input/array-input';
import SpeedInput from '../../components/speed-input/speed-input';


export default class AlgorithmPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortArray: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,],
            speed: 50,
            algorithm: props.algorithm
    
        }
        this.alg = {
            // selection: this.onSelectionSort(this.state.sortArray),
            selection: () => {
                this.onSelectionSort(this.state.sortArray)
                // alert('h/ello')
            },
            bubble: () => {
                this.onBubbleSort(this.state.sortArray)
            },
            test: this.testFunc
        }
        this.onShuffleArray = this.onShuffleArray.bind(this)
        this.onSelectionSort = this.onSelectionSort.bind(this)

    }


    onShuffleArray = (arr) => {
        let len = arr.length
        for(let i = len - 1; i > 0; i--) {
            setTimeout(() => {
                this.setState(state => {
                    let j = Math.floor(Math.random() * (i + 1));
                    let newlist = [...state.sortArray];
                    [newlist[i], newlist[j]] = [newlist[j], newlist[i]];
                    return { sortArray: newlist}
                })
            }, i * this.state.speed);
        }
    }

    onSelectionSort = (arr) => {
        let n = arr.length;
        for(let i = 0; i < n; i++) {
            console.log(`selsort ${i}`)
            setTimeout(() => {
                this.setState(state => {
                    let newlist = [...state.sortArray];
                    let min = i;
                    for(let j = i+1; j < n; j++){
                        if(newlist[j] < newlist[min]) {
                            min=j; 
                        }
                    }
                    if (min != i) {
                        // Swapping the elements
                        [newlist[i], newlist[min]] = [newlist[min], newlist[i]]
                        return { sortArray: newlist}   

                    }
                })
            }, i * this.state.speed);
        }
    }

    onBubbleSort = (arr) => {
        let n = arr.length;
        for(let i = 0; i < n - 1; i++) {
            console.log('firts loop number:', i)
            setTimeout(() => {
            for(let j = 0; j < n - i - 1; j++) {
                setTimeout(() => {
                    this.setState(state => {
                        console.log('second loop', j)
                        let newlist = [...state.sortArray];
                        if(newlist[j] > newlist[j+1]) {
                                [newlist[j], newlist[j + 1]] = [newlist[j + 1], newlist[j]]
                                return { sortArray: newlist}  
                            }
                    })
                }, i * this.state.speed)
            }
        }, i * this.state.speed)
        }
    }
    get(object, path, defval = null) {
        if (typeof path === "string") path = path.split(".");
        return path.reduce((xs, x) => (xs && xs[x] ? xs[x] : defval), object);
    }
    runAlgorithm = () => {
        let name = this.state.algorithm
        this.get(this.alg, name)()
    }
    componentDidMount() {
        this.onShuffleArray(this.state.sortArray)
    }
    onChangeSize = (value) => {
        console.log(value)
        this.setState(state => {
            let newlist = Array.from({length: value}, (_, i) => i + 1)
            return { sortArray: newlist}
        })

    }
    onChangeSpeed = (value) => {
        console.log(value)
        this.setState(state => {
            return {speed: value}
        })
        
    }
    render() {
        return(
            <Container>
            <h1>{this.props.name}</h1>

            <Row>
                <Col>
                <ControlButton onClick={() => this.runAlgorithm()}>Start</ControlButton>
                <ControlButton onClick={() => this.onShuffleArray(this.state.sortArray)}>Mix</ControlButton>
                {/* <ControlButton onClick={} >Step</ControlButton> */}
                {/* <ControlButton onClick={() => this.onBubbleSort(this.state.sortArray)} >Bubble</ControlButton> */}
                <ArrayInput onSubmit={this.onChangeSize} value={this.state.sortArray.length}/>
                <SpeedInput onSubmit={this.onChangeSpeed} value={this.state.speed}/>
                

                
                </Col>
            </Row>

            <Row>
                <Col>
                    <AlgorithmDisplay array={this.state.sortArray}/>
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

            </Container>
        )
    }
}


const ComplexityView = styled.div`
    height: 400px;
    background-color: #393E46;
    border-radius: 10px;
    padding: 20px;

`
const ControlButton = styled.button`
    width: 110px;
    height: 45px;
    color: #EEEEEE;
    background-color: #393E46;
    border-radius: 10px;
    border: none;
    margin:12px;
    margin-left: 0;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: #31353c;
        transition: 0.2s;
      }
`

