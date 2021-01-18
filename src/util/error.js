export const extractErrorMessage = error => {
    if (error && error.response && error.response.data) {
        const errorData = error.response.data;
        const keys = Object.keys(errorData);
        return keys.length > 0 ? errorData[Object.keys(errorData)[0]] : null;
    } else {
        return null;
    }
}