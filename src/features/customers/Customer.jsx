import { useSelector } from "react-redux";

function Customer() {
    const { fullName, nationalId, createdAt } = useSelector(
        (store) => store.customer
    );

    console.log(nationalId);
    console.log(fullName);
    console.log(createdAt);
    return <h2>👋 Welcome, {fullName}</h2>;
}

export default Customer;
