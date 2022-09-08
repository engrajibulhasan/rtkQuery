import React from 'react';
import { Link } from "react-router-dom";
import { useGetTodosQuery } from './features/api/apiSlice';
const Home = () => {
    const { data: todos, isLoading } = useGetTodosQuery()
    let content = null;
    if (isLoading) {
        content = <p>Loading...........</p>
    }
    if (todos?.length > 0) {
        content = todos?.map((item, index) => <li key={item.id}> {item.text}
            <Link to={`/todo/${item.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold  ml-3 py-1 px-4 rounded">View</Link>
        </li>)
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-5 underline">
                RTK Query | Playing with todo lists
            </h1>
            <ul className="marker:text-sky-400 list-disc pl-5 space-y-2 text-slate-500 ">
                {content}
            </ul>
        </>
    );
}

export default Home