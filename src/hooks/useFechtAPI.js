import { useEffect, useState } from "react"
import { URL_BASE } from "../enviroment";

export const useFetchAPI = () =>{

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
        });

        const response = await fetch(`${URL_BASE}/character/?page=19`);
        const data = await response.json();

        setState({
            ...state,
            data,
            isLoading: false,
            hasError: null,
        })
    }

    useEffect(() => {
        getFetch();

        return () => {

        }
    }, [`${URL_BASE}/character/?page=19`]);

    console.log(state.data)

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }

}