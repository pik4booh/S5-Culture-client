import CHeader from "./CHeader";

const CLayout = ({ children }) => {
    return(
        <>
            <CHeader></CHeader>
            {children}
        </>
    );
}
export default CLayout;