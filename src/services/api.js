const baseUrl = 'http://localhost:3000'
const logInUrl = baseUrl + '/log_in'

const youTubeAPIKey = 'AIzaSyBes66Lx5mt4r_lt_FCE_axUQW6QzfLk_g'
const youTubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='
// 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=young%20thug&type=video&key='

export const fetchSearch = (text) => {
    return fetch(youTubeUrl + text + `&type=video&key=${youTubeAPIKey}`)
        .then(resp => resp.json())
}

export const handleLogin = (name, password) => {
    return fetch(logInUrl, {
	    method: 'POST',
	    headers: { 'Content-Type': 'application/json' },
	    body: JSON.stringify({ name, password })
    }).then(resp => resp.json())
}

export const userInventory = () => {
    return fetch(baseUrl + '/inventory', {
        headers: { 'Authorisation': localStorage.token }
    }).then(resp => resp.json())
}

export const validate = () => {
    return fetch(baseUrl + '/validate', {
        headers: { 'Authorisation': localStorage.token }
    }).then(resp => resp.json())
}

export default { handleLogin, userInventory, validate, fetchSearch }