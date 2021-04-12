import React from 'react'
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    const name=localStorage.getItem("name");
    return (
        <div>
            <p>Welcome {name}</p>
            <Link to="/additem" className="btn btn-link">Request A Item</Link>
            <Link to="/showallitems" className="btn btn-link">Post a Item</Link>
            <Link to="/showallreqitems" className="btn btn-link">See All Items Requested By You</Link>
        </div>
    )
}

export {ProfilePage};
