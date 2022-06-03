import React from 'react'
import '../../scss/_custom.scss';

const PUBLIC = process.env.REACT_APP_PUBLIC_URL;

export const ImageLogout = () =>{
    return (
        <div className="image-logout--div">
            <img src={PUBLIC +'logout.png'} title="Logout"  alt="Logout"/>
        </div>
    );
}
