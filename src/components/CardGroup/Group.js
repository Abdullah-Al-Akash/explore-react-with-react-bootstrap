import React from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import Card from '../Card/CardItem';

const Group = () => {
        const products = [
                { "id": 1, "name": "Mobile" },
                { "id": 2, "name": "Laptop" },
                { "id": 3, "name": "Bike" }
        ]
        return (
                <Container>
                        <h3 className="mt-5 mb-5 container">Hello from React Bootstrap!</h3>
                        <CardGroup>
                                {
                                        products.map(product => <Card
                                                key={product.id}
                                        ></Card>)
                                }
                        </CardGroup>
                </Container>
        );
};

export default Group;