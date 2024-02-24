import { storeToRefs } from 'pinia';

import type { Table } from '@/entity/table';
import { useBranchStore } from '../store/branch';


export const useBranch  = () => {

    const branchStore = useBranchStore();

    // const {  branchTable, currentPage, quantityPages,currentBranch, allBranchs , quantityBranchs , currentText} = storeToRefs( branchStore );

    const getBranchTable = async (datSet:Table) =>{
        const resp = await  branchStore.getBranchTable(datSet)
        return resp
    }
 

    
    return{
        getBranchTable,

    }
}

export default useBranch