import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Home'
import Todo from './Todo'
const AllRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo:todoId" element={<Todo />} />
        </Routes>
    )
}

export default AllRouter