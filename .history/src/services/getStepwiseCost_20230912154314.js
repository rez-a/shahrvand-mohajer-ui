import { handleRequest } from "services";
import { STEPWISE_COST } from "./endPoints";

export async function getStepwiseCost($price){
    return await handleRequest({
        url: `${STEPWISE_COST}/${orderPrice}`,
        method: 'get',
    });
}