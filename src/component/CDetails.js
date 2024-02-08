import { useState, useEffect } from 'react';

import axios from 'axios';

import CLittleCard from './CLittleCard';
import { useLocation } from 'react-router-dom';

const CDetails = ({ ...others }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const encodedObject = queryParams.get('data');

    // Decode and parse the object
    const field = JSON.parse(decodeURIComponent(encodedObject));

    const [picture, setPicture] = useState({picture:null});

    useEffect(() => {
        // Fetch data from the database using Axios
        axios
            .get('http://localhost:8080/api/picture?hashcode='+field.hashcode)
            .then((response) => {
                // Assuming your data is an array of objects with id and name properties
                setPicture(response.data);
            })
            .catch((error) => {
                console.error('Error fetching pictures: ', error);
            });
        }, []);

    // field.plots.forEach(plot => {
    //     // Accessing the `groundType` and `area` properties of each element
    //     const groundType = plot.groundType;
    //     const area = plot.area;
    
    //     // Displaying the `groundType` and `area` of each element
    //     console.log("Ground Type:", groundType);
    //     console.log("Area:", area);
    // });

    return(
        <>
            <section className="content" id={field.idField} >
                <section className="block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <section>
                                    <h2>Details</h2>
                                    <div className="gallery-carousel owl-carousel">
                                        <img src={picture.picBase64} alt="field1" data-hash="1"></img>
                                    </div>
                                    <div className="gallery-carousel-thumbs owl-carousel">
                                        <a className="owl-thumb active-thumb background-image">
                                            <img rc={picture.picBase64} alt=""></img>
                                        </a>
                                    </div>
                                </section>
                                <section>
                                    <h2>Description</h2>
                                    <p>
                                        {field.description}
                                    </p>
                                </section>
                                <section>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <h2>Details</h2>
                                            <dl>
                                                <dt>Location</dt>
                                                <dd>{field.location}</dd>
                                                <dt>Area</dt>
                                                <dd>{field.area}</dd>
                                                <dt>Longitude</dt>
                                                <dd>1234567890</dd>
                                                <dt>Latitude</dt>
                                                <dd>987654321</dd>
                                            </dl>
                                        </div>
                                        <div className="col-md-8">
                                            <h2>Location</h2>
                                            <div className="map height-300px" id="map-small"></div>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <h2>Features</h2>
                                    <ul className="features-checkboxes columns-3">
                                        <li>Quality Wood</li>
                                        <li>Brushed Alluminium Handles</li>
                                        <li>Foam mattress</li>
                                        <li>Detachable chaise section</li>
                                        <li>3 fold pull out mechanism</li>
                                    </ul>
                                </section>
                                <section>
                                    <h2>Author</h2>
                                    <div className="box">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="author">
                                                    <div className="author-image">
                                                        <div className="background-image">
                                                            <img src="assets/img/author-01.jpg" alt=""></img>
                                                        </div>
                                                    </div>
                                                    <div className="author-description">
                                                        <h3>{field.owner.name}</h3>
                                                        <div className="rating" data-rating="4"></div>
                                                        <a className="text-uppercase">Show My Listings
                                                            <span className="appendix">(12)</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <dl>
                                                    <dt>Phone</dt>
                                                    <dd>830-247-0930</dd>
                                                    <dt>Email</dt>
                                                    <dd>{field.owner.email}</dd>
                                                </dl>
                                            </div>
                                            <div className="col-md-7">
                                                <form className="form email">
                                                    <div className="form-group">
                                                        <label htmlFor="message" className="col-form-label">Message</label>
                                                        <textarea name="message" id="message" className="form-control" rows="4" placeholder="Hi there! If you're interested in my field. Please give me more details."></textarea>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Send</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-md-3">
                                <aside className="sidebar">
                                    <section>
                                        <h2>List Plots</h2>
                                        {field.plots.map((plot) => (
                                            <CLittleCard key={field.idField} location={field.location} owner={field.owner.name} plot={plot}></CLittleCard>
                                        ))}
                                    </section>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}
export default CDetails;
