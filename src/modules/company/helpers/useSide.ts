import { storeToRefs } from 'pinia';

import { useSideStore } from '../store/side';


export const useSide  = () => {

    const sideStore = useSideStore();

    const {  status } = storeToRefs( sideStore );

    const changeStatus = async (stat:boolean) =>{
        const resp = await  sideStore.changeStatus(stat)
        return resp
    }
    
    return{
        changeStatus,
        status
    }
}

export default useSide