import axios from 'axios';
import * as type from "./type";
// import { authHeader } from "../../../libraries/authHeader";

export function loginGet(datas,_callback){
    const requestOptions = {
        method: 'POST',
        headers: {},
        data: datas
    };

    return dispatch =>{
          return axios({
                url: `api/users/findUser`,
                ...requestOptions
            }).then(e=>{
                if (e.data.status === 200) {
                    localStorage.setItem('TOKEN_PERSURATAN',e.data.token)
                }
                        dispatch({
                            type: type.PUT_USER,
                            data :{
                                items: e.data
                            }
                        })
                        _callback(e)
            })
            .catch((err)=>{
                console.log(err);
                return
            })
        }
}