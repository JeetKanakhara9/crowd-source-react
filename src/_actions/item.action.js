import { itemConstants } from '../_constants';
import { itemService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const itemActions = {
    add,
    post,
    // getAll,
   // delete: _delete
};


function add(item) {
    return dispatch => {
        dispatch(request(item));

        itemService.add(item)
            .then(
                item => { 
                    dispatch(success());
                     history.push('/profile');
                    dispatch(alertActions.success('Item Added successfully'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(item) { return { type: itemConstants.ADD_REQUEST, item } }
    function success(item) { return { type: itemConstants.ADD_SUCCESS, item } }
    function failure(error) { return { type: itemConstants.ADD_FAILURE, error } }
}

function post(item,ID) {
    return dispatch => {
        dispatch(request(item));

        itemService.post(item,ID)
            .then(
                item => { 
                    dispatch(success());
                    history.push('/profile');
                    dispatch(alertActions.success('Item Added successfully'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(item) { return { type: itemConstants.ADD_REQUEST, item } }
    function success(item) { return { type: itemConstants.ADD_SUCCESS, item } }
    function failure(error) { return { type: itemConstants.ADD_FAILURE, error } }
}



// prefixed function name with underscore because delete is a reserved word in javascript
