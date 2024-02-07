import { Link } from 'react-router-dom';

const CCard = ({ field }) => {
    const encodedObject = encodeURIComponent(JSON.stringify(field));

  return (
    <>
        <div className="item" id={field.idField}>
            <div className="wrapper">
                <div className="image">
                    <h3>
                        <a className="tag category">FIELD</a>
                        {/* <a href="single-listing-1.html" className="title">Will Buy "Behind the Sea" Book</a> */}
                        {/* <span className="tag">Demand</span> */}
                    </h3>
                    <img src="field.png" alt="hello"></img>
                </div>
                <h4 className="location">
                    <a href="">{field.location}</a>
                </h4>
                {/* <div className="price">$30</div> */}
                <div className="meta">
                    <figure>
                        <i className="fa fa-user"></i>{field.owner.name}
                    </figure>
                </div>
                <div className="description">
                    <p>{field.description}</p>
                </div>
                <Link to={`/details?data=${encodedObject}`} className="detail text-caps underline">Detail</Link>
            </div>
        </div>
    </>
  );
};

export default CCard;
