import React, {Component} from 'react';
import Header from '../../layouts/header/header';
import { Col, Container, Row, Input, InputGroup, Button } from 'reactstrap';
import styled from 'styled-components'
import AlgorithmDisplay from '../../components/algorithm-display/algorithm-display';
import ComplexityDisplay from '../../components/complexity-display/complexity-display';
import Description from '../../components/description/description';
import './algorithm-page.css'
import ArrayInput from '../../components/array-input/array-input';


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


export default class AlgorithmPage extends Component {
    state = {
        sortArray: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,],

    }


    onShuffleArray(arr) {
        let len = arr.length
        console.log(len)
        
        for(let i = len - 1; i > 0; i--) {
            setTimeout(() => {
                this.setState(({sortArray}) => {
                    let j = Math.floor(Math.random() * (i + 1));
                    let newlist = [...sortArray];
                    [newlist[i], newlist[j]] = [newlist[j], newlist[i]];
                    return { sortArray: newlist}
                })
            }, i * 50);
        }
    }

    onSelectionSort(inputArr) {
        let n = inputArr.length;
        for(let i = 0; i < n; i++) {
            console.log(`selsort ${i}`)
            setTimeout(() => {
                this.setState(({sortArray}) => {
                    let newlist = [...sortArray];
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
            }, i * 50);
        }
    }

    componentDidMount() {
        this.onShuffleArray(this.state.sortArray)
    }
    updateState() {
        //pass
        console.log(`update state ${this.state.sortArray.length}`)
    }
    onChangeSize(value) {
        console.log(value)
    }
    render() {
        return(
            <Container>
            <h1>{this.props.name}</h1>

            <Row>
                <Col>
                <ControlButton onClick={() => this.onSelectionSort(this.state.sortArray)}>Start</ControlButton>
                <ControlButton onClick={() => this.onShuffleArray(this.state.sortArray)}>Mix</ControlButton>
                <ControlButton onClick={() => this.updateState()} >Step</ControlButton>
                {/* <input className='inp' type='number' max={30} min={5} defaultValue={20}></input> */}
                <ArrayInput onChangeSize={() => this.updateState()} value={this.state.sortArray.length}/>
                {/* <ArrayRange></ArrayRange> */}  
                
                </Col>
                {/* <Col>
                    <InputGroup lg={3}>
                        <Button>
                        I‘m a button
                        </Button>
                        <Input />
                    </InputGroup>
                </Col> */}
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
