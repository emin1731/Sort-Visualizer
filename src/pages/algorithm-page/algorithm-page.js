import React, {Component} from 'react';
import Header from '../../layouts/header/header';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components'
import AlgorithmDisplay from '../../components/algorithm-display/algorithm-display';
import ComplexityDisplay from '../../components/complexity-display/complexity-display';
import Description from '../../components/description/description';

// const Description = styled.div`
//     height: 500px;
//     background-color: #393E46;
//     border-radius: 10px;
//     padding: 20px;
// `
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

    onShuffleArray() {
        console.log('Control button detected')
    }
    updateState() {
    }
    
    render() {
        return(
            <Container>
            <h1>{this.props.name}</h1>

            <Row>
                <Col>
                <ControlButton onClick={this.onShuffleArray}>Start</ControlButton>
                <ControlButton>Mix</ControlButton>
                <ControlButton>Step</ControlButton>
                {/* <ArrayRange></ArrayRange> */}
                </Col>
            </Row>

            <Row>
                <Col>
                    <AlgorithmDisplay/>
                </Col>
            </Row>
            <Row>
              <Col lg={8}>
                {/* <Description>
                    Description text
                </Description> */}
                <Description content={this.props.description}/>
              </Col> 
              <Col>
                {/* <ComplexityView>
                    Complexity View
                </ComplexityView> */}
                <ComplexityDisplay complexity={this.props.complexity}/>
              </Col>
            </Row>

            </Container>
        )
    }
}
