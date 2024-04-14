import axios from 'axios';
import {useState} from 'react';
import { UserData } from '../types';

const useLoadData = ()=> {
    const [dataApi, setDataApi] = useState<UserData[]| []>([]);

    const getDataApi = (qParams: string|null)=> {
        const url = qParams ? `http://localhost:3000/api/users?q=${qParams}` : 'http://localhost:3000/api/users'
        axios.get(url)
        .then(response=>{
            return response.data
        })
        .then(response=> setDataApi(response.data))
        .catch(error=>{
            console.error('Error fetching data:', error);
            if(error instanceof Error) alert(error.message);
        })
    }

    return{
        dataApi,
        getDataApi
    }
}

export default useLoadData