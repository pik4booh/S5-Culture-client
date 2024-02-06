import CSearch from "./CSearch";
import CCard from "./CCard";

const CCulture = ({ ...others }) => {
    return(
        <>
            <form className="hero-form form">
                <div className="container">
                    <CSearch></CSearch>
                    <br></br>
                    <br></br>
                    <div className="items grid grid-xl-4-items grid-lg-3-items grid-md-2-items">
                        <CCard></CCard>
                        <CCard></CCard>
                        <CCard></CCard>
                        <CCard></CCard>
                    </div>
                </div>
            </form>
        </>
    );
}
export default CCulture;