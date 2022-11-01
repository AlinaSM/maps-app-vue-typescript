import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiYWxpbmFzbTk1IiwiYSI6ImNsOXU4YndwMDBlYXgzcGtiNHFrbnRucHQifQ.CkcnSPwz7j5P75f7Ep5GPA',
    }
})

export default searchApi;
