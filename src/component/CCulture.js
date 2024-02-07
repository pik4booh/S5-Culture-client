import { useState, useEffect } from 'react';

import axios from 'axios';

import CSearch from "./CSearch";
import CCard from "./CCard";

const CCulture = ({ ...others }) => {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        // Fetch data from the database using Axios
        axios
            .get('http://localhost:8080/api/fields')
            .then((response) => {
                // Assuming your data is an array of objects with id and name properties
                console.log(response.data);
                setFields(response.data);
            })
            .catch((error) => {
                console.error('Error fetching fields: ', error);
            });
    }, []);

    return(
        <>
            <form className="hero-form form">
                <div className="container">
                    <CSearch></CSearch>
                    <br></br>
                    <br></br>
                    <div className="items grid grid-xl-4-items grid-lg-3-items grid-md-2-items">
                        {fields.map((field) => (
                            <CCard key={field.idField} field={field}>
                            </CCard>
                        ))}
                    </div>
                </div>
            </form>
        </>
    );
}
export default CCulture;