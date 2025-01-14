import React from "react";
import { Route, Routes } from "react-router-dom";
import PhotoList from "../Components/PhotoList/PhotoList";
import PhotoDetails from "../Components/PhotoDetails.jsx/PhotoDetails";

function CustomRoute() {
    return (
        <Routes>
            <Route path="/" element={<PhotoList />} />
            <Route path="/photo/:id" element={<PhotoDetails />} />
        </Routes>
    );
}

export default CustomRoute;