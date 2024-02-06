
const CCard = ({ ...others }) => {
  return (
    <>
        <div className="item">
            <div className="wrapper">
                <div className="image">
                    <h3>
                        <a href="contact.html" className="tag category">Culture name</a>
                        {/* <a href="single-listing-1.html" className="title">Will Buy "Behind the Sea" Book</a> */}
                        {/* <span className="tag">Demand</span> */}
                    </h3>
                    <a href="single-listing-1.html" className="image-wrapper background-image">
                        <img src="field.png" alt="hello"></img>
                    </a>
                </div>
                <h4 className="location">
                    <a href="contact.html">Location</a>
                </h4>
                {/* <div className="price">$30</div> */}
                <div className="meta">
                    <figure>
                        <a href="contact.html">
                            <i className="fa fa-user"></i>John Doe
                        </a>
                    </figure>
                </div>
                <div className="description">
                    <p>Mauris nisi ligula, pulvinar eu commodo eu, semper id quam. In vitae purus bibendum,
                        mattis ex nec, eleifend diam. Cras at vehicula metus. Sed elementum lectus ut aliquet vehicula.
                    </p>
                </div>
                <a href="/details" className="detail text-caps underline">Detail</a>
            </div>
        </div>
    </>
  );
};

export default CCard;
