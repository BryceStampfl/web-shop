import React from 'react'

import { Row, Col } from 'react-bootstrap'

import ProductList from '../product/ProductList'
import Sidebar from '../sidebar/Sidebar'



const Dashboard = () => {
    
    return (
        <div>
        <Row>
            <Col md={2}>
                <Sidebar />
            </Col>

            <Col md={10}>
                <ProductList />
            </Col>
        </Row>


        </div>
    )
}

export default Dashboard;