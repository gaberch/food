import { useEffect, useState } from "react";
import yelp from "../api/yelp";



export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    searchTerm,
                    location: 'Waterloo, Ontario',
                    limit: 50
                }
            });
            setResults(response.data.businesses);
            setErrorMessage('');
        } catch (err) {
            setErrorMessage('Something went wrong...')
        }
    };

    useEffect(() => {
        searchAPI('pasta')
    }, []);

    return [searchAPI, results, errorMessage];
};