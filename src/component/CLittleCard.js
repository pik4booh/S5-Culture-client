import { Link } from "react-router-dom";
const CExample = ({ plot,location,owner }) => {
    return (
        <>
            <div className="items compact" id={plot.idPlot}>
                <div className="item">
                    {/* <div className="ribbon-featured">Featured</div> */}
                    <div className="wrapper">
                        <div className="image">
                            <h3>
                                <Link className="tag category">PLOT</Link>
                                <Link className="title">{plot.groundType.name}</Link>
                                {/* <span className="tag">Offer</span> */}
                            </h3>
                                <img src="field.png" alt=""></img>
                        </div>
                        {/* <h4 className="location">
                            <a href="contact.html">{location}</a>
                        </h4> */}
                        <div className="price">{plot.area} m²</div>
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