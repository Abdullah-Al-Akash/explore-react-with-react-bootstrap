import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Axios = () => {
        const [products, setProducts] = useState([]);

        useEffect(() => {
                axios.get('data.json')
                        .then(data => {
                                const loadedData = data.data
                        })
        }, [])
        return (
                <div>

                </div>
        );
};

export default Axios;