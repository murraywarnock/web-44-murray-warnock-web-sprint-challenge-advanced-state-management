import axios from 'axios';

export const START_FETCH_SMURF = "START_FETCH_SMURF";
export const ADD_SMURF = "ADD_SMURF";
export const FAIL_FETCH_SMURF = "FAIL_FETCH_SMURF";
export const SET_VALUE_TO_ERROR_MESSAGE = "SET_VALUE_TO_ERROR_MESSAGE";
export const SUCCESS_FETCH_SMURF = "SUCCESS_FETCH_SMURF";

export const fetchStart = ()=> {
    return({type: START_FETCH_SMURF});
}
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        
        axios.get("http://localhost:3333/smurfs") 
        .then(resp => { // console.log("response from axios:", resp);
            dispatch(fetchSuccess(resp.data));
        })
        .catch(err=>{ // console.log("axios get error: ", err);
            dispatch(fetchFail(err));
       });
    }
}

export const fetchSuccess = (smurfs)=> {
    return({type: SUCCESS_FETCH_SMURF, payload:smurfs});
}

export const fetchFail = (err)=> {
    return({type: FAIL_FETCH_SMURF, payload:err});
}
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const addSmurf = (smurf) => {
    return({type:ADD_SMURF, payload:smurf});
}
//3. Add a standard action that allows us to set the value of the error message slice of state.
export const setError = (err) => {
    return({type: SET_VALUE_TO_ERROR_MESSAGE, payload:err});
}