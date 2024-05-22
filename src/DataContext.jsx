import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from "axios";
const Data = createContext({});

export const DataContext = ({ children, accessToken}) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    const [ search, setSearch ] = useState([]);
    const [ myCar, setMyCar ] = useState([]);
    const [ book, setBook ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
          setLoadingProgress(progress => {
            const newProgress = progress + 1;
            if (newProgress >= 100) {
              setIsLoading(false);
              clearInterval(interval);
            }
            return newProgress;
            
          });
        }, 19); 
        return () => clearInterval(interval);
      }, []);

    const handleBook = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3500/payment',
            {  
                "carNumber" : "TN 64 A 5451",
                "cost": 15000,
                "area": "Periyar Bus stand" 
            });
            if(response && response.data){
                setBook(response.data);
                console.log(response.data);
                swal("Payment Success!", "Your Car is booked Successfully.", "success");
            }
            
         } catch (error) {
            console.error('Error fetching car data:', error.message);
         }
    } 

        const searchCars = async (formvalue) => {
            try {
                const response = await axios.post('http://localhost:3500/search',
                {  
                    "area": formvalue.pickup
                });
                if(response && response.data){
                    setSearch(response.data);
                    navigate("/filteredcars");
                    console.log(response.data);
                    
                }
                
             } catch (error) {
                console.error('Error fetching car data:', error.message);
             }
         };

        
        const MyCars = async () => {
            try {
                const response = await axios.get('http://localhost:3500/car');
                if(response && response.data){
                    console.log(response.data);
                    setMyCar(response.data);
                    navigate("/mycars");
                }
             } catch (error) {
                swal({
                    title: "No Car Booked Yet!",
                    text: "Please Book a Car.",
                    icon: "warning",
                    buttons: "Sure!",
                    dangerMode: true,
                  });
            }
            
         };
         
         /* const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:3500/filter',
            {  
                "brand" : "Toyota"
            });
            //  console.log(response.data);
            setResult([response.data]);
            console.log([result]); 
            navigate("/filteredcars");
            } catch (error) {
                console.error('Error fetching car data:', error.message);
            }
        };  */

       /*  const [filters, setFilters] = useState([]);
        const [filteredCars, setFilteredCars] = useState([]);
        
        const handleFilterChange = (filterType, value) => {
            setFilters(prevFilters => ({
                ...prevFilters,
                [filterType]: prevFilters[filterType].includes(value)
                    ? prevFilters[filterType].filter(item => item !== value)
                    : [...prevFilters[filterType], value]
            }));
        };
        const handleApplyFilters = () => {
            axios.post('http://localhost:3500/filter',
        {
          "brand" : "Suzuki",
          "type":"suv" 
        }) 
                .then(response => {
                    setFilteredCars(response.data);
                    console.log(response.data);
                    navigate("/setFilteredcars");
                })
                .catch(error => {
                    console.error('Error fetching filtered cars:', error);
                });
        };
    
        useEffect(() => {
            // Fetch all cars initially
            axios.post('http://localhost:3500/filter', {

            }) // Assuming the endpoint is '/api/cars'
                .then(response => {
                    setFilteredCars(response.data);
                })
                .catch(error => {
                    console.error('Error fetching cars:', error);
                });
        }, []);
        // console.log(filteredCars); */
    return ( 
        <Data.Provider value = {
            { search, setSearch, searchCars, myCar, setMyCar, MyCars, book, setBook, handleBook, isLoading, setIsLoading, loadingProgress, setLoadingProgress }
        }>
            { children } 
        </Data.Provider>
    )
}

export default Data;