import React from 'react';
import { Redirect } from "react-router-dom";

import Login from '../components/landing/Login';
import Register from '../components/landing/Register';
import Landing from '../components/landing/Landing'
import RenderRoutes from '../components/routing/RenderRoutes'
import ProductList from '../components/product/ProductList'
import addProduct from '../components/product/AddProduct'
import Dashboard from '../components/dashboard/Dashboard'

const ROUTES = [
    { path: ["/"], exact: true, component: Landing },
    { path: "/login", exact: true, component: Login },
    { path: "/register", exact: true, component: Register },
    {
        path: "/app",
        component: props => {
            if (!localStorage.getItem("jwtToken")) {
                alert("You need to log in to access app routes");
                return <Redirect to={"/"} />;
            }
            return <RenderRoutes {...props} />;
        },
        routes: [
            {
                path: "/app",
                exact: true,
                component: Dashboard,
            },
            { path: "/app/Clothing", exact: true, component: () => { return <Dashboard category="CLOTHING" /> } },
            { path: "/app/Jewelry", exact: true, component: () => { return <Dashboard category="JEWELRY" /> } },
            { path: "/app/Books", exact: true, component: () => { return <Dashboard category="BOOKS" /> } },
            { path: "/app/Electronics", exact: true, component: () => { return <Dashboard category="ELECTRONICS" /> } },
            { path: "/app/Beauty", exact: true, component: () => { return <Dashboard category="BEAUTY" /> } },
            { path: "/app/Sports", exact: true, component: () => { return <Dashboard category="SPORTS" /> } },
            { path: "/app/General", exact: true, component: () => { return <Dashboard category="GENERAL" /> } },

            {
                path: "/app/addproduct",
                exact: true,
                component: addProduct,
            },
        ],
    },
];


export default ROUTES;


