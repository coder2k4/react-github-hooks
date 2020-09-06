import React, {useContext, useEffect} from 'react'
import GithubContext from "../Context/Github/GithubContext";
import {Link} from "react-router-dom";
import Repos from "../Components/Repos";

const Profile = props => {

    const github = useContext(GithubContext)
    const urlName = props.match.params.name


    useEffect(() => {
        github.getUser(urlName)
        github.getRepos(urlName)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if (github.loading) {
        return <p className="text-center">Loading...</p>
    }

    const {name, company, avatar_url, location, bio, blog, login, html_url, followers, public_repos, public_gists, following} = github.user

    return (
        <>
            <Link to="/" className="brn btn-link"> На главную </Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img src={avatar_url} alt={name} style={{width: '100%'}}/>
                            <h3>{name}</h3>
                            {location && <p>Местоположение: {location}</p>}
                        </div>
                        <div className="col">
                            {bio && <>
                                <h5>BIO</h5>
                                <p>{bio}</p>
                            </>}
                            <a href={html_url} className="btn btn-dark" target="_blank" rel="noopener noreferrer">Открыть профиль</a>
                            <ul>
                                {login && <li><strong>Username: </strong>{login}</li>}
                                {company && <li><strong>Company: </strong>{company}</li>}
                                {blog && <li><strong>Website: </strong>{blog}</li>}
                            </ul>
                            <div className="badge badge-primary">Подписчики: {followers}</div>
                            <div className="badge badge-success">Подписан: {following}</div>
                            <div className="badge badge-info">Репозитории: {public_repos}</div>
                            <div className="badge badge-dark">Gist: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>

            <Repos repos={github.repos}/>
        </>
    )
}


export default Profile