import React from 'react';
import "../Mycars/myCarHost.css";
export const myCarHost = () => {
  return (
    <>
        <h1 className='mycarh1'>myCars</h1>
        <div className="container">
        <div className="sidebar">
            <form>
                <div><button><img src="./cart.png" alt="cart" /><span>Cart</span></button></div>
                <div><button><img src="./Host.png" alt="host" /><span id="host">Host</span></button></div>
            </form>
        </div>    
        {/* <!-- Oru Oru carukum pananum --> */}
        <div classNameName="cars">
            <div className="car">
                <div className="cardetails">
                    <img src="https://th.bing.com/th/id/R.a441fcf32faecfd21da1d649c9546b7c?rik=LcDeOkaNsoG%2fHw&riu=http%3a%2f%2fwww.pngimagesfree.com%2fCar%2fTata%2fNxon%2fTata-NEXON-PNG_Tectonic-Blue_pngimagesfree.com.png&ehk=xiDsTnVQl3FMz39iSkSdeIHXcQXn8K2GAuO8cHUR%2biI%3d&risl=&pid=ImgRaw&r=0" height="100" width="100" id="carimage" />
                    <div className="cartext">
                        <p className="carname">TATA Neon 2023</p>
                        <div className="review">
                            <img src="./review.png" /><p>10+ Reviews</p>
                            <img src="./Star.png" /><p>3.5 Rating</p>
                            <img src="./trips.png" /><p>6 Trips</p><br/>
                        </div>
                        <p id="af">Additional Facilities:</p>
                        <div className="icons">
                            <img src="./icons8-car-seat-100.png" alt="seat" height="100" width="100" id="seat" /><span>6</span>
                            <img src="./icons8-fuel-96.png" alt="fuel" height="100" width="100" id="fuel" /> <span>Petrol</span>
                            <img src="./type.png" alt="type" /><span>SUV</span>
                        </div>
                        <div className="options">
                            <button id="edit"><img src="./edit.png" alt="edit" /><span>Edit</span></button>
                            <button id="delete"><img src="./dustbin.png" alt="de" /><span>Delete</span></button>
                            <button id="view">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="payments">
                    <p className="days">Price For Per Day</p>
                    <p className="price">₹ 1500</p>
                    <p className="days">Profit</p>
                    <p className="price">₹ 15000 </p>
                </div>
            </div>   
        </div>
    </div>

    </>
  )
}

    