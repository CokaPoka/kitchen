import axios from 'axios'

// const BASE_URL = 'http://localhost4000'

const getPhotos = () => {
    return axios.get(`http://localhost:4000/gallery`)
}

const getBlogs = () => {
    return axios.get(`http://localhost:4000/blog`)

}

export { getPhotos, getBlogs }