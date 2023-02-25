import React, {Component} from 'react'
import styled from 'styled-components'


const Display = styled.div`
    height: 500px;
    background-color: #393E46;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    margin-bottom: 30px;
    
    `
const SortCol = styled.div`
    width: ${props => props.width || '10px'};
    height: ${props => props.height || '10px'};
    border-radius: 5px;
    background-color: #00ADB5;
    align-self: flex-end;
    margin: 5px;
    text-align: center;

`




export default class AlgorithmDisplay extends Component {
    sortArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    renderArray() {
        return this.sortArray.map((item, id) => {
            return(
                <SortCol key={id} width={this.sortArray.length +'%'} height={item/this.sortArray.length *100 +'%'}>{item}</SortCol>
            )
        })
    }
    render() {
        const res = this.renderArray(this.sortArray)
        return(
            <>
            <Display>
            {/* <SortCol width='10px' height="100%"/> */}
            {/* <SortCol width='10px' height="90%"/> */}
            {res}
            </Display>
            </>
        )
    }
}