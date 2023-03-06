import React, {Component} from 'react';
import ItemCard from '../../components/item-card/item-card';
import { Col, Container, Row } from 'reactstrap';
import {Link} from 'react-router-dom'

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
                    <Col key={id} sm='4'>
                        <Link to={item.route} key={id}>
                            <ItemCard field={item.name} onItemSelected={() => this.props.onItemSelected(id)}/>   
                        </Link>
                    </Col>
            )
        })
    }
    render() {
        const cards = this.renderCards(this.state.data)
        return(
            <Container>
                <h1>Sorting algorithms</h1>
                <Row>
                    {cards}
                </Row>
            </Container>
        )
    }
}