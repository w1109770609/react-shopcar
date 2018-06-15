export const GETDATA_D = 'GETDATA_D'
export const SELECTED_D = 'SELECTED_D'
export const SELECTED_S = 'SELECTED_S'
export const COMPUTED_N = 'COMPUTED_N'
export const DELETES_D = 'DELETE_D'
// function makeAction(type,...argName){
//     return function(...arg){
//         let action = {type}
//         argName.map((item,index)=>{
//             action[item] = arg[index]
//         })
//         return action
//     }
// }

export const deletes = ( inds, indexs) => {
    return {
        type: DELETES_D,
        payload:{
            indexs,
            inds
        }
    }
}
export const computed = (initNum, ind,index) => {
    return {
        type: COMPUTED_N,
        initNum,
        index,
        ind
    }
}
export const selects = (selected,qid)=>{
    return {
        type:SELECTED_S,
        payload:!selected,
        qid
    }
}
export const selectAll = (cid, selected) => {
    return {
        type: SELECTED_D,   
        cid,
        selected: !selected
    }
}
export function setData(){
    return dispatch=>{
        fetch('data/data.json').then(res=>res.json()).then(res=>{
            dispatch({
                type:GETDATA_D,
                payload:res
            })
        })
    }
}
