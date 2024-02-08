
const CSearch = ({ func }) => {
    return(
        <>
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
                            <select name="category" id="category" data-placeholder="Select Category">
                                <option value="">Select Category</option>
                                <option value="1">Computers</option>
                                <option value="2">Real Estate</option>
                                <option value="3">Cars & Motorcycles</option>
                                <option value="4">Furniture</option>
                                <option value="5">Pets & Animals</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <button type="submit" className="btn btn-primary width-100">Search</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CSearch;