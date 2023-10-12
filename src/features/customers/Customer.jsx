import { useSelector } from "react-redux";

function Customer() {
    const account = useSelector((store) => store.account.fullName);
    return <h2>👋 Welcome, ${account}</h2>;
}

export default Customer;
