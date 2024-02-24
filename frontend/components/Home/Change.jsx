import React, { useState, useEffect } from 'react';

const Change = () => {
    const [changeNumber, setChangeNumber] = useState('');

    useEffect(() => {
        fetchChangeNumber();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    const fetchChangeNumber = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/v1/users/changenumber'); 
            // Assuming your API endpoint is /api/v1/users/changenumber
            if (response.ok) {
                const data = await response.json();
                console.log(data.data.Change);
                setChangeNumber(data.data.Change); 
            } else {
                console.error('Failed to fetch change number');
            }
        } catch (error) {
            console.error('Error fetching change number:', error);
        }
    };

    return (
        <div>
            <input type="text" value={changeNumber} readOnly />
        </div>
    );
};

export default Change;