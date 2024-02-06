
const CBubble = ({ message, isUser }) => {
    let className = 'messaging__main-chat__bubble';
    className += isUser ? ' user' : '';
    return (
        <div className={className}>
            <p>
                {message}
                <small>24 hour ago</small>
            </p>
        </div>
    );
}
export default CBubble;