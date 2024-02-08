import CLittleCard from './CLittleCard';
import { useLocation } from 'react-router-dom';

const CDetails = ({ ...others }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const encodedObject = queryParams.get('data');

    // Decode and parse the object
    const field = JSON.parse(decodeURIComponent(encodedObject));

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
            <section className="content">
                <section className="block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <section>
                                    <h2>Details</h2>
                                    <div className="gallery-carousel owl-carousel">
                                        <img src="assets/img/image-20.jpg" alt="field1" data-hash="1"></img>
                                        <img src="assets/img/image-01.jpg" alt="field2" data-hash="2"></img>
                                        <img src="assets/img/image-21.jpg" alt="field3" data-hash="3"></img>
                                        <img src="assets/img/image-22.jpg" alt="field4" data-hash="4"></img>
                                        <img src="assets/img/image-23.jpg" alt="field5" data-hash="5"></img>
                                        <img src="assets/img/image-14.jpg" alt="field6" data-hash="6"></img>
                                    </div>
                                    <div className="gallery-carousel-thumbs owl-carousel">
                                        <a href="contact.html1" className="owl-thumb active-thumb background-image">
                                            <img src="assets/img/image-20.jpg" alt=""></img>
                                        </a>
                                        <a href="contact.html2" className="owl-thumb background-image">
                                            <img src="assets/img/image-01.jpg" alt=""></img>
                                        </a>
                                        <a href="contact.html3" className="owl-thumb background-image">
                                            <img src="assets/img/image-21.jpg" alt=""></img>
                                        </a>
                                        <a href="contact.html4" className="owl-thumb background-image">
                                            <img src="assets/img/image-22.jpg" alt=""></img>
                                        </a>
                                        <a href="contact.html5" className="owl-thumb background-image">
                                            <img src="assets/img/image-23.jpg" alt=""></img>
                                        </a>
                                        <a href="contact.html6" className="owl-thumb background-image">
                                            <img src="assets/img/image-14.jpg" alt=""></img>
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
                                            <CLittleCard location={field.location} owner={field.owner.name} plot={plot}></CLittleCard>
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
