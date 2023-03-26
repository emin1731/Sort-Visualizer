import React, {Component} from 'react';
import ItemCard from '../../components/item-card/item-card';
import { Col, Container, Row } from 'reactstrap';
import {Link} from 'react-router-dom'
import './main-page.css'

export default class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }
    onItemSelected= (id) => {
        console.log(id)
    }

    renderCards = (arr) => {
        return arr.map((item, id) => {
            return(
                    <Col key={id} sm='12' md='6' lg='4'>
                        <Link to={item.route} key={id}>
                            <ItemCard 
                                complexity={item.complexity.title}
                                field={item.name} 
                                onItemSelected={() => this.props.onItemSelected(id)}/>   
                        </Link>
                    </Col>
            )
        })
    }
    render() {
        const cards = this.renderCards(this.state.data)
        return(
            <Container className='cont' fluid>
                <h1>Sorting algorithms</h1>
                <Row >
                    {cards}
                </Row>
            </Container>
        )
    }
}