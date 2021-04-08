import axios from 'axios';
import config from 'config';
import { authHeader } from '../_helpers';

export const itemService = {
    add,
   // delete: _delete
};


function add(item) {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(user)
    // };

    return axios.post(`${config.apiUrl}/add`,item).then(handleResponse);
}



// prefixed function name with underscore because delete is a reserved word in javascript

function handleResponse(response) {
    //converted response.text() to .json
    console.log(response.data);
    console.log(typeof(response));
    
    return response.data;
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}