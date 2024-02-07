const CExample = ({ plot,location,owner }) => {
    return (
        <>
            <div className="items compact" id={plot.idPlot}>
                <div className="item">
                    {/* <div className="ribbon-featured">Featured</div> */}
                    <div className="wrapper">
                        <div className="image">
                            <h3>
                                <a className="tag category">PLOT</a>
                                <a className="title">{plot.groundType.name}</a>
                                {/* <span className="tag">Offer</span> */}
                            </h3>
                                <img src="field.png" alt=""></img>
                        </div>
                        {/* <h4 className="location">
                            <a href="contact.html">{location}</a>
                        </h4> */}
                        <div className="price">{plot.area} m2</div>
                        <div className="meta">
                            <figure>
                                <i className="fa fa-user"></i>{owner}
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CExample;