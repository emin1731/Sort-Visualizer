import React, {Component} from 'react'
import styled from 'styled-components'
import DisplayBar from '../display-bar/display-bar'


const Display = styled.div`
    height: 500px;
    background-color: ${props => props.theme.secondary};
    border-radius: 10px;
    padding: 20px;
    display: flex;
    margin-bottom: 30px;
    transition: 0.5s;
    
    `



const  AlgorithmDisplay = ({array, colorKey,}) => {
    // try to make numbers visible or unvisible depending on array lenght
    // const colors = ['#3d5af1', '#ff304f', '#83e85a'];
    
    // let ColColor = {
    //     background: colors[colorKey]
    // }

    const renderArray = (arr) => {
        return arr.map((item, id) => {
            return(
                <DisplayBar 
                    key={id} 
                    width={arr.length +'%'} 
                    height={item/arr.length *100 +'%'} 
                    colorKey={colorKey[id]}
                    ></DisplayBar>
            )
        })
    }

        const res = renderArray(array)
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
export default AlgorithmDisplay