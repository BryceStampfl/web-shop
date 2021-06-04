import React from 'react';
import { Redirect } from "react-router-dom";

import Login from '../components/landing/Login';
import Register from '../components/landing/Register';
import Landing from '../components/landing/Landing'
import RenderRoutes from '../components/routing/RenderRoutes'
import addProduct from '../components/product/AddProduct'
import Dashboard from '../components/dashboard/Dashboard'
import ProductPage from '../components/product/ProductPage'

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
            {
                path: "/app/product/",
                exact: false,
                component: () => {
                    return <ProductPage /> 
                }
            },
            { path: "/app/categories/clothing", exact: true, component: () => { return <Dashboard category="CLOTHING" /> } },
            { path: "/app/categories/jewelry", exact: true, component: () => { return <Dashboard category="JEWELRY" /> } },
            { path: "/app/categories/books", exact: true, component: () => { return <Dashboard category="BOOKS" /> } },
            { path: "/app/categories/electronics", exact: true, component: () => { return <Dashboard category="ELECTRONICS" /> } },
            { path: "/app/categories/beauty", exact: true, component: () => { return <Dashboard category="BEAUTY" /> } },
            { path: "/app/categories/sports", exact: true, component: () => { return <Dashboard category="SPORTS" /> } },
            { path: "/app/categories/general", exact: true, component: () => { return <Dashboard category="GENERAL" /> } },

            {
                path: "/app/addproduct",
                exact: true,
                component: addProduct,
            },
        ],
    },
];


export default ROUTES;


