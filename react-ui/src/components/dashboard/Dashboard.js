import React from 'react'

import { Row, Col } from 'react-bootstrap'
import Sidebar from '../sidebar/Sidebar'
import ROUTES from '../../_utils/routes'
import RenderRoutes from '../routing/RenderRoutes'
import ProductList from '../product/ProductList'
import { Container } from 'react-bootstrap'


const Dashboard = ({ category }) => {
    return (
        <div>
            <Row>
                <Col sm={2}>
                    <Sidebar />
                </Col>

                <Col md={9}>
                    <Container>
                        <ProductList category={category} />
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard;