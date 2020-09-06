import React, {useContext} from 'react'
import Search from "../Components/Search";
import Card from "../Components/Card";
import GithubContext from "../Context/Github/GithubContext";

const Home = props => {

    const {loading, users} = useContext(GithubContext)

    return (
        <>
            <Search/>
            <div className="row">
                {loading ? <p>Loading ... </p> : users.map((user, id) => (
                    <div className="col-sm-4 mb-4" key={id}>
                        <Card user={user}/>
                    </div>
                ))}
            </div>
        </>
    )}

export default Home