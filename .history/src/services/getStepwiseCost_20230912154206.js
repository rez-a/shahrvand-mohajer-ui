import setHeaderRequest from "helper/setHeaderRequest";
import { handleRequest } from "services";

export async function getStepwiseCost($price){
    return await handleRequest({
        url,
        method: 'get',
    });
}