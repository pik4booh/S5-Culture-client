import CLittleCard from './CLittleCard';

const CDetails = ({ ...others }) => {
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit
                                        amet fermentum sem. className aptent taciti sociosqu ad litora torquent per conubia nostra,
                                        per inceptos himenaeos. Vestibulum tincidunt, sapien sagittis sollicitudin dapibus,
                                        risus mi euismod elit, in dictum justo lacus sit amet dui. Sed faucibus vitae nisl
                                        at dignissim.
                                    </p>
                                </section>
                                <section>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <h2>Details</h2>
                                            <dl>
                                                <dt>Location</dt>
                                                <dd>Hawaii</dd>
                                                <dt>Area</dt>
                                                <dd>590 000 Km</dd>
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
                                                        <h3>Jane Doe</h3>
                                                        <div className="rating" data-rating="4"></div>
                                                        <a href="seller-detail-1.html" className="text-uppercase">Show My Listings
                                                            <span className="appendix">(12)</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <dl>
                                                    <dt>Phone</dt>
                                                    <dd>830-247-0930</dd>
                                                    <dt>Email</dt>
                                                    <dd>hijane@example.com</dd>
                                                </dl>
                                            </div>
                                            <div className="col-md-7">
                                                <form className="form email">
                                                    <div className="form-group">
                                                        <label htmlFor="message" className="col-form-label">Message</label>
                                                        <textarea name="message" id="message" className="form-control" rows="4" placeholder="Hi there! I am interested in your offer ID 53951. Please give me more details."></textarea>
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
                                        <h2>Similar Ads</h2>
                                        <CLittleCard></CLittleCard>
                                        <CLittleCard></CLittleCard>
                                        <CLittleCard></CLittleCard>
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