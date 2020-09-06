import React, {useContext, useState} from 'react'
import {AlertContext} from "../Context/Alert/AlertContext";
import GithubContext from "../Context/Github/GithubContext";

const Search = props => {

    const [value, setValue] = useState('')
    const {show, hide} = useContext(AlertContext)
    const {searchUsers, clearUsers} = useContext(GithubContext)



    const onSubmit = event => {
        if(event.key !== 'Enter')
            return

        if(value.trim()){
            searchUsers(value)
            hide();
        }
        else
        {
            show('Введите данные!')
            clearUsers();
        }

    }


    return (
    <div className="form-group">
        <input type="text"
               className="form-control"
               placeholder="Введите Nick пользователя..."
               onKeyDownCapture={onSubmit}
               onChange={event => setValue(event.target.value)}
        />
    </div>
    )
}
export default Search