import {ApiResponse} from "../utils/api-response.js";
import {ayncHandler} from "../utils/aync-handler.js";
/*
const healthCheck =async (req, res, next) => {
    try{
        const user = await getUserFromDB;
res.status(200)
.json(new ApiResponse(200, "Everything is working fine", "OK"));
    }
    catch(error){
        next(err);
}
};
*/
const healthCheck = ayncHandler(async (req, res) => {
    res.status(200)
    .json(new ApiResponse(200, "Server is running", "OK"));
});
export {healthCheck}; 
