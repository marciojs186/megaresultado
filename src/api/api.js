import Axios from 'axios'


const api = Axios.create({

    //rxwoiZBDkAS0pVc
    baseURL: 'https://economia.awesomeapi.com.br/json/USD-BRL'

})



export default api