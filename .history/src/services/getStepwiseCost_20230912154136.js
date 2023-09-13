import { handleRequest } from "services";

export async function getStepwiseCost($price){
    return await handleRequest({
        url,
        method: 'post',
        data,
        headers: setHeaderRequest(),
    });
}