import React from 'react';

import { Jumbotron, Button } from 'react-bootstrap'


const LandingBanner = () => {


    return (
        <Jumbotron id="landing-banner" className="text-center">
            <h1 > Welcome to my Web Shop</h1>
            <p>
                This is a shopping style website I created.
                For security I'm using JWT token authentication through my Spring backend.
            
                </p>
                <p>
                Feel free to use the guest account I created, or register your own account :)
                </p>
  
            <p>
                <Button variant="primary">Login as SuperCoolGuest2021</Button>
            </p>
        </Jumbotron>
    )
}

export default LandingBanner;