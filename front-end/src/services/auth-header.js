export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
        // for Node.js Express back-end
        return { 'x-access-token': user.accessToken };
    } else {
        return {};
    }
}
// It checks Local Storage for user item.
// If there is a logged in user with accessToken (JWT), 
// return HTTP Authorization header. Otherwise, return an empty object.