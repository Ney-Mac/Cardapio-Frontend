import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interfaces/FoodData";
import { useMutation, useQueryClient } from "react-query";
import { API_LOCAL_URL } from "../config";

const API_URL = API_LOCAL_URL;

const postData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.post(`${API_URL}/food`, data);
    return response;
}

export function useFoodDataMutate() {
    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        },
        onError: (error) => {
            console.error(`Erro registar dados do alimento: ${error}`);
        }
    });

    return mutate;
}