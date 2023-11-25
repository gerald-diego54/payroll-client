import axios, { AxiosError, AxiosStatic } from "axios";
import React from "react";

const useAxios = (url: string, method: any, data: any) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [apiData, setApiData] = React.useState(null);
    const [serverError, setServerError] = React.useState(null);

    React.useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
            try {
                if (method === "post") {
                    const res = await axios.post(url, data);
                    console.log(res);
                }
            } catch (error: any) {
                console.log(error);
            }
        };

        fetchData();
    }, [url, data, method]);

    return { isLoading, apiData, serverError };
};

export default useAxios;
