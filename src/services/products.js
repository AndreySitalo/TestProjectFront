import { ActionCreators } from '../redux/productsReduser';
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7250/api/products'
})


export const GetProducts = async (dispatch) => {
    try {
        const {data} = await axiosInstance.get('/GetAll');
        console.log(data);
        dispatch(ActionCreators.setProducts(data));

    } catch{
        console.log('Error');
    }
}
export const SetProducts = async (rows) => {
    try {

        const {data} =await axiosInstance.post('/CreateAll', rows, {
                                headers: {'Content-Type': 'application/json'}
                            });
        console.log(data);

    } catch{
        console.log('Error');
    }
}