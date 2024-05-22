import React, { useState, useContext } from 'react';
import '../styles/SearchLocation.css';
import { Link } from 'react-router-dom';
import Data from '../DataContext';

export const SearchLocation = ({ placeholder, data }) => {

    const { searchCars } = useContext(Data);

    const [filteredData1, setFilteredData1] = useState([]);
    const [filteredData, setFilteredData ] = useState([]);
    const [ formvalue, setFormvalue] = useState({ pickup: ''});

      const handlefilter = (e) => {
        const { name, value } = e.target;
        setFormvalue({ ...formvalue, [name]: value });
        const searchword = value.toLowerCase();
        const newfilter = data.filter((value) => value.city.toLowerCase().includes(searchword));
        setFilteredData(newfilter);
    };
    
    const handlefiltertwo = (e) => {
        const { name, value } = e.target;
        setFormvalue({ ...formvalue, [name]: value});
        const searchword2 = value.toLowerCase();
        const newfilter2 = data.filter((value) => value.city.toLowerCase().includes(searchword2));
        setFilteredData1(newfilter2);
    };

    const handleDataItemClick = (city, name) => {
        setFormvalue({ ...formvalue, [name]: city});
    };
    
    const hideBox = () => {
        setFilteredData([]);
        setFilteredData1([]);
    };

    return (
        <>
            <section id='Search-container' onClick={hideBox}>
                <h1 id='Search-header'>Search Car Rentals</h1>
                <div className="Search1">
                    <input
                        type="text"
                        name='pickup'
                        className="pickup"
                        value={formvalue.pickup}
                        placeholder={placeholder}
                        onChange={handlefilter}
                        required
                    />
                    <input
                        type="text"
                        className="searchbox2"
                        placeholder='Drop-Off Location'
                        name='dropoff'
                        value={formvalue.dropoff}
                        onChange={handlefiltertwo}
                        required
                    />
                </div>

                {filteredData.length !== 0 && (
                    <div className="dataResult">
                        {filteredData.map((value, index) => (
                            <Link className='data-indent' key={index} onClick={() => handleDataItemClick(value.area, 'pickup')}>
                                <p>{value.area}, {value.city}, {value.state}</p>
                            </Link>
                        ))}
                    </div>
                )}

                {filteredData1.length !== 0 && (
                    <div className="dataResult2">
                        {filteredData1.map((value, index) => (
                            <Link className='data-indent' key={index} onClick={() => handleDataItemClick(value.area, 'dropoff')}>
                                <p> {value.city}, {value.area}, {value.state}</p>
                            </Link>
                        ))}
                    </div>
                )}

                <div className="Search2">

                    <input type="date" 
                    name='pickdate' 
                    className='pickupdate'
                    id='pickdate'
                    // value={settingDate}
                    onChange={handlefilter} 
                    required />

                    <input type="date" 
                    name='dropoffdate' 
                    // value={settingDate}
                    className='pickupdate'
                    id='dropoffdate' 
                    onChange={handlefilter} 
                    required />

                    <input type="time" 
                    name='picktime'
                    value="10:30" 
                    className='pickuptime' 
                    onChange={handlefilter} 
                    required />

                    <input type="time" 
                    name='dropofftime' 
                    value="10:30"
                    className='pickuptime'
                    onChange={handlefilter} 
                    required />
                </div>

                <div className="search-button">
                    <button onClick={()=>{searchCars(formvalue)}} type='submit'>Search cars</button>
                </div>
            </section>
           
        </>
    );
};
