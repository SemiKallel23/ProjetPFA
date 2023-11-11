
import { API_URL } from "../Common";
import { resetToken, setToken } from "../Redux/Reducers/AuthReducer/AuthReducer";
import { apiRefreshToken } from "./RefreshToken";
import {store} from "../Redux/Store"
function ObjectToJsonString(obj) {
    const jsonString = JSON.stringify(obj);
    return jsonString
}

function createHeader(token, contentType = 'application/json') {
    if (contentType === 'form-data') {
        return {
            Authorization: 'Bearer ' + token
        };
    } else {
        return {
            'Content-Type': contentType,
            accept: 'application/json',
            Authorization: 'Bearer ' + token
        };
    }
};
async function processResponse(response, callback) {
    let responseJson;
    try {
        responseJson = await response?.json();
    } catch (e) {
        return { statusCode: 500 };
    }
    if (responseJson.statusCode === 401) {
        const res = await apiRefreshToken();
        if (res.statusCode === 200) {
            store.dispatch(setToken(res));
            return callback();
        } else {
            store.dispatch(
                resetToken()
            );
            return null;
        }
    } else if (responseJson.statusCode === 200) {
        return responseJson;
    } else {
        return responseJson;
    }
}

export async function apiGet(api) {
    const token = store.getState().auth.accessToken;
    let response
    try {
        response = await fetch(API_URL + api, {
            method: 'Get',
            headers: createHeader(token),
        });
    } catch (error) {
    }
    const resp = await processResponse(response, () => apiGet(api));
    return resp;
}

export async function apiPost(api, body) {
    body = ObjectToJsonString(body)
    const token = store.getState().auth.accessToken;
    const response = await fetch(API_URL + api, {
        method: 'POST',
        headers: createHeader(token),
        body: body
    });
    return processResponse(response, () => apiPost(api, body));
}

export async function apiDelete(api, body) {
    const token = store.getState().auth.accessToken;
    const response = await fetch(API_URL + api, {
        method: 'Delete',
        headers: createHeader(token, 'application/json'),
        body: body
    });
    return processResponse(response, () => apiDelete(api, body));
}

export async function apiPut(api, body, contentType = 'application/json') {
    const token = store.getState().auth.accessToken;
    body = ObjectToJsonString(body)
    const response = await fetch(API_URL + api, {
        method: 'Put',
        headers: createHeader(token, contentType),
        body: body
    });
    return processResponse(response, () => apiPost(api, body));
}

export async function apiPostUpload(api, body, contentType = 'form-data') {
    const token = store.getState().auth.accessToken;
    const response = await fetch(API_URL + api, {
        method: 'POST',
        headers: createHeader(token, contentType),
        body: body
    });
    return processResponse(response, () => apiPost(api, body));
}