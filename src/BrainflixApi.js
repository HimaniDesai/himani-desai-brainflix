const api = `https://unit-3-project-api-0a5620414506.herokuapp.com`
const apikey = `?api_key=59bca329-3f10-406f-9a20-55481f50a6ae`
const BrainflixAPI = {
    getList: api + `/videos` + apikey,
    getVideo:  id => api + `/videos/` + `${id}` + apikey,
    getVideofile: link => `${link}` + apikey,
    postComment: id => api + `/videos/` + `${id}` + `/comments` + apikey
}


export default BrainflixAPI