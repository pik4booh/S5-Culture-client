import CContact from "./CContact";
import CBubble from "./CBubble";
import axios from 'axios';
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CMessage = ({ ...others }) => {

    const [contacts, setContacts] = useState([]);
    const [receiver, setReceiver] = useState('');
    const [messages, setMessages] = useState([]);

    const handleMessages = async (userId, receiver_name) => {
        console.log(userId);
        console.log(receiver_name);
        setReceiver(receiver_name.username);

        const authenticatedUser = Cookies.get('userId');
        try {
            const response = await axios.get('http://localhost:8080/api/messages?p1='+authenticatedUser+'&p2='+userId.idOwner); // Replace '/api/data' with your backend endpoint
            console.log(response.data);
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching message data:', error);
        }
    }


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8080/api/owners'); // Replace '/api/data' with your backend endpoint
            setContacts(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []); 
    return (
        <>
        <section className="content">
            <section className="block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-lg-5 col-xl-4">
                            <div className="section-title clearfix">
                                <h3>People</h3>
                            </div>
                            <div id="messaging__chat-list" className="messaging__box">
                                <div className="messaging__header">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="/">All Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="messaging__content">
                                    {contacts.map(contact => (

                                    parseInt(Cookies.get('userId')) !== contact.idOwner ? (
                                        <ul className="messaging__persons-list" key={contact.idOwner}>
                                            <CContact username={contact.name} idOwner={contact.idOwner} func={(userId, receiver_name) => handleMessages(userId, receiver_name)}></CContact>
                                        </ul>) : (null)
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7 col-xl-8">
                            <div className="section-title clearfix">
                                <h3>Message Window</h3>
                            </div>
                            <div id="messaging__chat-window" className="messaging__box">
                                <div className="messaging__header">
                                    <div className="float-left flex-row-reverse messaging__person">
                                        <h5 className="font-weight-bold">{receiver}</h5>
                                        <figure className="mr-4 messaging__image-person" data-background-image="assets/img/author-02.jpg"></figure>
                                    </div>
                                    <div className="float-right messaging__person">
                                        <h5 className="mr-4">You</h5>
                                        <figure id="messaging__user" className="messaging__image-person" data-background-image="assets/img/author-06.jpg"></figure>
                                    </div>
                                </div>
                                <div className="messaging__content" data-background-color="rgba(0,0,0,.05)">
                                    <div className="messaging__main-chat">
                                    
                                        {messages.map(message => (
                                            
                                            parseInt(Cookies.get('userId')) === message.idSender ? (
                                            <CBubble message={message.body} isUser={true}></CBubble>) : (
                                            <CBubble message={message.body}></CBubble>
                                            )

                                        ))}
                                    </div>
                                </div>
                                <div className="messaging__footer">
                                    <form className="form">
                                        <div className="input-group">
                                            <input type="text" className="form-control mr-4" placeholder="Your Message"></input>
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="submit">Send <i className="fa fa-send ml-3"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        </>
    );
};
export default CMessage;