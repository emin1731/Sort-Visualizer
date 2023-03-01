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
    margin: 1px;
    text-align: center;

`




export default class AlgorithmDisplay extends Component {
    // try to make numbers visible or unvisible depending on array lenght
    renderArray() {
        let arr = this.props.array

        
        return arr.map((item, id) => {
            return(
                <SortCol key={id} width={arr.length +'%'} height={item/arr.length *100 +'%'}></SortCol>
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