import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './FlightSearch.css';

const FlightSearch = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const sourceCity = useRef('');
    const destinationCity = useRef('');
    const travelDate = useRef('');
    const returnDate = useRef('');
    const [sourceC, setSourceC] = useState('');
    const [destC, setDestC] = useState('');

    const reduxData = {
        source: '',
        destination: '',
        travel: '',
        return: '',
        filteredData: [],
    }
    const sourceInputHandler = (event) => {
        sourceCity.current = event.target.value;
        setSourceC(event.target.value);
    }
    const destinationInputHandler = (event) => {
        destinationCity.current = event.target.value;
        setDestC(event.target.value);
    }
    const travelDateChangeHandler = (event) => {
        travelDate.current = event.target.value;
    }
    const returnDateChangeHandler = (event) => {
        returnDate.current = event.target.value;
    }

    useEffect(() => {
        console.log('Source');
    }, [sourceC])

    useEffect(() => {
        setTimeout(() => {
            console.log('Destination');
        }, 4000)
    }, [destC]);

    // const timeOut = useMemo(() => {
    //     setTimeout(() => {
    //         console.log('Destination');
    //     }, 4000)
    // }, [destC])

    const onSubmitHandler = (event) => {
        event.preventDefault();
        reduxData.source = sourceCity.current;
        reduxData.destination = destinationCity.current;
        reduxData.travel = travelDate.current;
        reduxData.return = returnDate.current;

        fetch('./data.json').then((res) => {
            return res.json();
        }).then(data => {
            reduxData.filteredData = data
            dispatch({ type: 'Flight_Search', value: reduxData });
        })

        setTimeout(function () {
            history.push('/result')
        }, 1000);
    }
    return (
        <div className='container'>
            <div className='row title'>
                <section className='col-md-12'>
                    <p>Book your tickets here</p>
                </section>
            </div>
            <div className='row'>
                <section className='formSection col-md-12'>
                    <form onSubmit={onSubmitHandler}>
                        <div className='formElement'>
                            <label htmlFor='source'>Source City </label>
                            <input type='text' id='source' placeholder='Enter Source City' onChange={sourceInputHandler}></input>
                        </div>
                        <div className='formElement'>
                            <label htmlFor='destination'>Destination City </label>
                            <input type='text' id='destination' placeholder='Enter destination City' onChange={destinationInputHandler}></input>
                        </div>
                        <div className='formElement'>
                            <label htmlFor='travelDate'>Travel Date </label>
                            <input type='date' id='travelDate' onChange={travelDateChangeHandler}></input>
                        </div>
                        <div className='formElement'>
                            <label htmlFor='returnDate'>Return Date </label>
                            <input type='date' id='returnDate' onChange={returnDateChangeHandler}></input>
                        </div>
                        <button>Search</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default withRouter(FlightSearch);