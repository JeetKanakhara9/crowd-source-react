import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { alertActions, itemActions } from '../_actions';
import { userActions } from '../_actions';

function AddItem() {
    const [item, setItem] = useState({
        itemName: '',
        description: '',
        baseprice: ''  
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(alertActions.clear());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setItem(item => ({ ...item, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (item.itemName && item.description && item.baseprice) {
            dispatch(itemActions.add(item));
        }
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Add Item</h2>
            <form name="form" onSubmit={handleSubmit}>
            <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="itemName" value={item.itemName} onChange={handleChange} className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />
                    {submitted && !item.itemName &&
                        <div className="invalid-feedback">Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="firstName" value={item.description} onChange={handleChange} className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} />
                    {submitted && !item.description &&
                        <div className="invalid-feedback">Description is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Base Price</label>
                    <input type="text" name="lastName" value={item.baseprice} onChange={handleChange} className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} />
                    {submitted && !item.baseprice &&
                        <div className="invalid-feedback">Base Price is required</div>
                    }
                </div>
                
                <div className="form-group">
                    <button className="btn btn-primary">
                        {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Add Item
                    </button>
                    {/* <Link to="/login" className="btn btn-link">Cancel</Link> */}
                </div>
            </form>
        </div>
    );
}

export { AddItem };