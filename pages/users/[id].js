import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";

export default function () {
    const {query} = useRouter();
    return (
        <MainContainer>
            <h1>User Page</h1>
            <p>User id: {query.id}</p>
        </MainContainer>
    );
}
