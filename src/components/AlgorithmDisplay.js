import React from 'react'
import styled from 'styled-components'
import DisplayBar from './DisplayBar'


const Display = styled.div`
    height: 500px;
    background-color: ${props => props.theme.secondary};
    border-radius: 10px;
    padding: 20px;
    display: flex;
    margin-bottom: 30px;
    transition: 0.5s;
    @media (max-width: 576px) {
        height: 300px;
      }
    @media (max-width: 768px) {
    height: 400px;
    }
`



const  AlgorithmDisplay = ({array, colorKey,}) => {
    const renderArray = (arr) => {
        return arr.map((item, id) => {
            return(
                <DisplayBar 
                    key={id} 
                    width={arr.length +'%'} 
                    height={item/arr.length *100 +'%'} 
                    colorKey={colorKey[id]}>
                </DisplayBar>
            )
        })
    }

        const res = renderArray(array)
        return(
            <>
            <Display>
            {res}
            </Display>
            </>
        )

}
export default AlgorithmDisplay