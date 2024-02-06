const CExample = ({ ...others }) => {
    return (
        <>
            <div className="items compact">
                <div className="item">
                    <div className="ribbon-featured">Featured</div>
                    <div className="wrapper">
                        <div className="image">
                            <h3>
                                <a href="contact.html" className="tag category">Home & Decor</a>
                                <a href="single-listing-1.html" className="title">Furniture for sale</a>
                                <span className="tag">Offer</span>
                            </h3>
                            <a href="single-listing-1.html" className="image-wrapper background-image">
                                <img src="./assets/img/image-01.jpg" alt=""></img>
                            </a>
                        </div>
                        <h4 className="location">
                            <a href="contact.html">Manhattan, NY</a>
                        </h4>
                        <div className="price">$80</div>
                        <div className="meta">
                            <figure>
                                <i className="fa fa-calendar-o"></i>02.05.2017
                            </figure>
                            <figure>
                                <a href="contact.html">
                                    <i className="fa fa-user"></i>Jane Doe
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CExample;