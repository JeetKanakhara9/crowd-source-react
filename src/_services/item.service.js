import axios from 'axios';
import config from 'config';
import { authHeader } from '../_helpers';

export const itemService = {
    add,
    post,
    // delete: _delete
};

const user = localStorage.getItem("user");

// axios.interceptors.request.use(
//     config => {
//         config.headers.authorization = `Bearer ${user}`;
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// )


async function add(item) {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: authHeader(),
    //     body: {"item_name" : item.item_name, "description" : item.description, "base_price" : item.base_price }
    // };



    let body = {"item_name" : item.itemName, "description" : item.description, "base_price" : item.baseprice };

    return await axios.post(`${config.apiUrl}/requestItem`, body, {headers: authHeader()}).then(handleResponse);
}

async function post(item,ID) {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: authHeader(),
    //     body: {"item_name" : item.item_name, "description" : item.description, "base_price" : item.base_price }
    // };



    let body = {"item_name" : item.itemName, "description" : item.description, "base_price" : item.baseprice };

    return await axios.post(`${config.apiUrl}/postItem/`+ID, body, {headers: authHeader()}).then(handleResponse);
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