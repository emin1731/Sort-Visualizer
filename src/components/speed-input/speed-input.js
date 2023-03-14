import React, {Component, useState} from 'react'
import styled from 'styled-components'

const FormInput = styled.input`
    width: 150px;
    height: 45px;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.hover};
    border-radius: 0 10px 10px 0;
    border: none;
    margin-left: 0;
    font-size: 16px;
    cursor: pointer;
    padding: 15px;
    transition: 0.5s;
`

const SubmitButton = styled.button`
    width: 110px;
    height: 45px;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.secondary};
    border-radius: 10px 0 0 10px;
    border: none;
    margin-left: 0;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s;
`

const SpeedForm = styled.form`
    width: 260px;
    height: 45px;
    display: inline-block;
    margin:12px;
    margin-left: 0;
    transition: 0.5s;
`



const SpeedInput = (props) => {
    const [name, setName] = useState("")
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit(name)
    }
    return(

        <SpeedForm onSubmit={handleSubmit}>
            <SubmitButton 
                type='submit' 
                // onClick={this.props.onChangeSize}
                >Speed (ms)</SubmitButton>
            <FormInput 
                onChange={handleChange}
                max={1000} 
                min={1} 
                defaultValue={props.value} 
                type='number' 
                name='speed-input'/>

        </SpeedForm>

    )
}
export default SpeedInput