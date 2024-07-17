import axios from "axios"

const api = axios.create({
baseURL: 'https://api.themoviedb.org/3/',
params: {
    api_key: 'c932d28e62c181f1a8f8d1097ce82d0a',
    language: 'pt-BR',
    page: 1
}

})

export default api