import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ajay,aarthi,abhirami } from './actions';

const Names = () => {
 // Access the count value from the Redux store
 const sname = useSelector((state) => state.sname);
 // Get the dispatch function from Redux
 const dispatch = useDispatch();

 return (
    <div>
        <h1>Student Name: {sname}</h1>
        <button onClick={() => dispatch(ajay())}>Ajay</button>
        <button onClick={() => dispatch(aarthi())}>aarthi</button>
        <button onClick={() => dispatch(abhirami())}>abhirami</button>
        
    </div>
);
}

export default Names;