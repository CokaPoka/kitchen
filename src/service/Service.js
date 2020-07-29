import axios from 'axios'


// const BASE_URL = 'http://localhost4000'

const getPhotos = () => {
    return axios.get(`http://localhost:4000/gallery`)


}


export default getPhotos