import React, {useContext} from 'react'
import {AlertContext} from "../Context/Alert/AlertContext";

const Alert = () => {

    const {alert, hide} = useContext(AlertContext)

    if(!alert) return null

    return (
        <div className={`alert alert-${alert.type || 'secondary'} alert-dismissible`} role="alert">
            <strong>{alert.text}</strong>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Alert