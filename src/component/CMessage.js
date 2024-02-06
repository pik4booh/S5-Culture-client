import CContact from "./CContact";
import CBubble from "./CBubble";

const CMessage = ({ ...others }) => {
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
                                    <ul className="messaging__persons-list">
                                        <CContact></CContact>
                                    </ul>
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
                                        <h5 className="font-weight-bold">Rosina Warner</h5>
                                        <figure className="mr-4 messaging__image-person" data-background-image="assets/img/author-02.jpg"></figure>
                                    </div>
                                    <div className="float-right messaging__person">
                                        <h5 className="mr-4">You</h5>
                                        <figure id="messaging__user" className="messaging__image-person" data-background-image="assets/img/author-06.jpg"></figure>
                                    </div>
                                </div>
                                <div className="messaging__content" data-background-color="rgba(0,0,0,.05)">
                                    <div className="messaging__main-chat">
                                        <div className="messaging__main-chat__bubble">
                                            <p>
                                                Curabitur vel venenatis sem. Fusce suscipit pharetra nisl, sit amet blandit sem sollicitudin ac.
                                                <small>24 hour ago</small>
                                            </p>
                                        </div>

                                        <CBubble message="Vivamus laoreet nisl a odio commodo varius. Donec arcu mauris, molestie a euismod at,
                                        mattis eu arcu. Cras volutpat, velit sit amet cursus molestie, ex ipsum sagittis urna,
                                        vitae auctor augue erat eget justo. Sed dignissim lacus risus, ut blandit nunc volutpat
                                        quis. Fusce porta semper nisi, quis lobortis nulla ultricies ac."></CBubble>

                                        <div className="messaging__main-chat__bubble user">
                                            <p>
                                                Cras volutpat, velit sit amet cursus molestie, ex ipsum sagittis urna,
                                                vitae auctor augue erat eget justo. Sed dignissim lacus risus, ut blandit nunc
                                                <small>24 hour ago</small>
                                            </p>
                                        </div>
                                        <div className="messaging__main-chat__bubble user">
                                            <p>
                                                Sed dignissim lacus risus, ut blandit nunc
                                                <small>24 hour ago</small>
                                            </p>
                                        </div>
                                        <div className="messaging__main-chat__bubble">
                                            <p>
                                                Donec consequat lobortis erat non tempus. Quisque id accumsan velit. Nullam mollis bibendum ex.
                                                Integer egestas nisi nulla, ut tempus mi euismod in
                                                <small>24 hour ago</small>
                                            </p>
                                        </div>
                                        <div className="messaging__main-chat__bubble user">
                                            <p>
                                                Quisque id accumsan velit. Nullam mollis bibendum ex.
                                                Integer egestas nisi nulla, ut tempus mi euismod in
                                                <small>24 hour ago</small>
                                            </p>
                                        </div>
                                        <CBubble message="hehe bisou bisou" isUser={false} ></CBubble>
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