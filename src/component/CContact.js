/* eslint-disable jsx-a11y/anchor-is-valid */

const CContact = ({username, idOwner, func}) => {
    const handleFunc = () => {
        const id = {idOwner};
        const receiver_name = {username};
        func(id, receiver_name);
    }
    return(
        <li>
            <a href="#" className="messaging__person" onClick={handleFunc}>
                <figure className="messaging__image-item" data-background-image="assets/img/image-01.jpg"></figure>
                <figure className="content">
                    <h5>{username}</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut</p>
                    <small>24 Hour Ago</small>
                </figure>
                <figure className="messaging__image-person" data-background-image="assets/img/author-01.jpg"></figure>
            </a>
        </li>
    );
}
export default CContact;