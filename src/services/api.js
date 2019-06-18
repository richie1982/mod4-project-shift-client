const baseUrl = 'http://localhost:3000'
const logInUrl = baseUrl + '/log_in'

const youTubeAPIKey = 'AIzaSyBes66Lx5mt4r_lt_FCE_axUQW6QzfLk_g'
const youTubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='
// 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=young%20thug&type=video&key='

export const fetchSearch = (text) => {
    return fetch(youTubeUrl + text + `&type=video&key=${youTubeAPIKey}`)
        .then(resp => resp.json())
}

export const handleSignUp = (name, password) => {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            password: password
        })
    }).then(resp => resp.json())
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

export const saveTrack = (title, videoId, user) => {
    return fetch(baseUrl + '/tracks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: title,
            video_id: videoId,
            user_name: user
        })
    }).then(resp => resp.json())
}

// export const deleteTrack = (username, trackId) => {
//     return fetch(baseUrl +'/delete_track', {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             track_id: trackId,
//             user_name: username
//         })
//     }).then(resp => resp.json())
// }


export const deleteTracks = (username, ...trackIds) => {
    return fetch(baseUrl +'/delete_tracks', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            track_ids: trackIds,
            user_name: username
        })
    }).then(resp => resp.json())
}

window.deleteTracks = deleteTracks


// deleteTracks('richie', 4, 7, 8, 9)


export default { handleLogin, userInventory, validate, fetchSearch, saveTrack, deleteTracks }