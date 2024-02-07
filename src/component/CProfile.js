import { useState, useEffect } from "react";
import CCard from "./CCard";
import axios from "axios";
import { useParams } from "react-router-dom";



const CProfile = ({ ...others }) => {
    const [user, setUser] = useState({user:null});
    const [fields, setField] = useState([]);
    const { id } = useParams();

    console.log(id+"qdsqkjdlsqjdlsq");
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8080/api/owner?id='+id); // Replace '/api/data' with your backend endpoint
            setUser(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        const fetchField = async () => {
            try {
              const response = await axios.get('http://localhost:8080/api/owner/fields?idUser='+id); // Replace '/api/data' with your backend endpoint
              console.log(response.data);
              setField(response.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
    
        fetchData();
        fetchField();
      }, [id, user.id]); 
    return (
        <>
            <section className="content">
            <section className="block">
                <div className="container">
                    <div className="row flex-column-reverse flex-md-row">
                        <div className="col-md-9">
                            <section className="my-0">
                                <div className="author big">
                                    <div className="author-image">
                                        <div className="background-image">
                                            <img src="assets/img/author-09.jpg" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="author-description">
                                        <div className="section-title">
                                            <h2>{user.name}</h2>
                                            <h4 className="location">
                                                <a href="/">Manhattan, NY</a>
                                            </h4>
                                            <figure>
                                                <div className="float-left">
                                                    <div className="rating" data-rating="4"></div>
                                                </div>
                                            </figure>
                                        </div>
                                        <div className="additional-info">
                                            <ul>
                                                <li>
                                                    <figure>Phone</figure>
                                                    <aside>+1 516-480-4273</aside>
                                                </li>
                                                <li>
                                                    <figure>Email</figure>
                                                    <aside><a href="/">{user.email}</a></aside>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu,
                                            sit amet fermentum sem. className aptent taciti sociosqu ad litora torquent per
                                            conubia nostra, per inceptos himenaeos.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <hr></hr>

                            <section>
                                <h2>My Fields</h2>
                                <div className="section-title clearfix">
                                    <div className="float-left float-xs-none">
                                        <label className="mr-3 align-text-bottom">Sort by: </label>
                                        <select name="sorting" id="sorting" className="small width-200px" data-placeholder="Default Sorting" >
                                            <option value="">Default Sorting</option>
                                            <option value="1">Newest First</option>
                                            <option value="2">Oldest First</option>
                                            <option value="3">Lowest Price First</option>
                                            <option value="4">Highest Price First</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="read-more" data-read-more-link-more="Show More" data-read-more-link-less="Show Less">
                                    <div className="items grid grid-xl-3-items grid-lg-3-items grid-md-2-items">
                                        {fields !== null ? (
                                            fields.map(field => (
                                                <CCard></CCard>
                                            ))
                                        ) : (null)

                                        }
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-md-3">
                            <aside className="sidebar">
                                
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        </>
    );
};
export default CProfile;