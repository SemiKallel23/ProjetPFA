const getUrl = () => {
    if (window.location.hostname === 'localhost') {
        return "https://dev.backend.dollycar.hello-pomelo.ovh/";
    }
    let host = window.location.hostname
    host = host.replace('backoffice', "backend")
    return window.location.protocol + '//' + host + "/"
};
const API_URL = process.env.REACT_APP_BK_URL ? process.env.REACT_APP_BK_URL + '/' : getUrl()
const PER_PAGE = 10
export { API_URL, PER_PAGE };