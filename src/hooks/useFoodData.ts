import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interfaces/FoodData";
import { useQuery } from "react-query";
import { API_LOCAL_URL } from "../config";

const API_URL = API_LOCAL_URL;

const fetchData = async (): AxiosPromise<FoodData[]> => {
    const response = await axios.get(`${API_URL}/food`);
    return response;
}

export function useFoodData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2,
        onError: (error) => {
            console.error(`Erro ao buscar os dados dos alimentos: ${error}`);
        }
    });

    return {
        ...query,
        data: query.data?.data
    }
}