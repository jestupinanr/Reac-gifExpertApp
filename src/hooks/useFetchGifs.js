import { useEffect, useState } from "react"
import { getGift } from "../helpers/getGifs";


export const useFetchGifts = ( category )=>{
    
    const [state, setState] = useState({
        data:[],
        loading: true
    });
    
    useEffect(()=>{
        getGift( category )
        .then(imgs=>setState({
            data: imgs,
            loading: false
        }));
    },[category]);

    return state;
}