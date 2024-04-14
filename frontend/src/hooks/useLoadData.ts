import axios from 'axios';
import {useState} from 'react';
import { UserData } from '../types';

const useLoadData = ()=> {
    const [dataApi, setDataApi] = useState<UserData[]| []>([]);

    const getDataApi = (qParams: string|null)=> {
        const baseUrl = import.meta.env.VITE_REACT_APP_API || 'http://localhost:3000'
        const url = qParams ? `${baseUrl}/api/users?q=${qParams}` : `${baseUrl}/api/users`
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