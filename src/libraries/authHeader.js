export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('TOKEN_PERSURATAN'));

    if (user) {
        return { 'Authorization': 'Bearer ' + user };
    } else {
        return {};
    }
}