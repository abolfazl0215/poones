import axios from "axios";
import toastr from "toastr";

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(null, error => {
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedErrors) {
        console.log(error);
        toastr.error("فکر کنم اینترنتت خاموش شده");
    }

    return Promise.reject(error);
});

const methods={
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}

export default methods;