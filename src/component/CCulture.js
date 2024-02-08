import { useState, useEffect } from 'react';

import axios from 'axios';

import CSearch from "./CSearch";
import CCard from "./CCard";

const CCulture = ({ ...others }) => {
    const [fields, setFields] = useState([]);

    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        // Fetch data from the database using Axios
        axios
            .get('http://localhost:8080/api/fields')
            .then((response) => {
                // Assuming your data is an array of objects with id and name properties
                console.log(response.data);
                setFields(response.data);

                setFiltered(response.data); // Set filtered initially to all fields
            })
            .catch((error) => {
                console.error('Error fetching fields: ', error);
            });
    }, []);

//--------------------------------------------------------------------------------------
const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchCriteria = {
        what: formData.get('keyword'),
        where: formData.get('location').toLowerCase(),
        category: formData.get('category').toLowerCase()
    };

    // Filter fields based on search criteria
    const filteredFields = fields.filter((field) => {
        // Filter by description ("what")
        // if (searchCriteria.what) {
        //     const keywords = searchCriteria.what.trim().toLowerCase().split(' ');
        //     const descriptionWords = field.description.toLowerCase().split(' ');
        //     const containsKeyword = keywords.some(keyword => descriptionWords.includes(keyword));
        //     if (!containsKeyword) {
        //         return false;
        //     }
        // }
        if (searchCriteria.what && !field.description.toLowerCase().includes(searchCriteria.what.trim().toLowerCase())) {
            return false;
        }
        // Filter by location ("where")
        if (searchCriteria.where && !field.location.toLowerCase().includes(searchCriteria.where)) {
            return false;
        }
        // Filter by category ("category")
        if (searchCriteria.category && !field.plots.some(plot => plot.groundType.name.toLowerCase() === searchCriteria.category)) {
            return false;
        }
        return true; // Return true if the field passes all filters
    });

    setFiltered(filteredFields);
};


//--------------------------------------------------------------------------------------

   

    return(
        <>
            <form className="hero-form form" onSubmit={handleSearch}>
                <div className="container">
                <div className="main-search-form">
                <div className="form-row">
                    <div className="col-md-3 col-sm-3">
                        <div className="form-group">
                            <label htmlFor="what" className="col-form-label">What?</label>
                            <input name="keyword" type="text" className="form-control" id="what" placeholder="What are you looking for?"></input>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <div className="form-group">
                            <label htmlFor="input-location" className="col-form-label">Where?</label>
                            <input name="location" type="text" className="form-control" id="input-location" placeholder="Enter Location"></input>
                            <span className="geo-location input-group-addon" data-toggle="tooltip" data-placement="top" title="Find My Position"><i className="fa fa-map-marker"></i></span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <div className="form-group">
                            <label htmlFor="category" className="col-form-label">Category?</label>
                            <select name="category" id="category" data-placeholder="Select Category" >
                                <option value="">Select Category</option>
                                <option value="Type A">Type A</option>
                                <option value="Type B">Type B</option>
                                <option value="Type C">Type C</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <button type="submit" className="btn btn-primary width-100">Search</button>
                    </div>
                </div>
            </div>





                    <br></br>
                    <br></br>
                    <div className="items grid grid-xl-4-items grid-lg-3-items grid-md-2-items">
                        {filtered.map((field) => (
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