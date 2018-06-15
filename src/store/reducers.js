import { combineReducers } from 'redux'
import {
    GETDATA_D,
    SELECTED_D,
    SELECTED_S,
    COMPUTED_N,
    DELETES_D
} from './action'
function shoplist(state=[],action){
    return state
}
function getdata(state=[],action){
    switch(action.type){
        case GETDATA_D:
            return action.payload
            break;
        case SELECTED_D:
        let newSe = [...state]
            return newSe.map(item=>{
                if(action.cid===item.shoplist.cid){
                    item.shoplist.selected = action.selected;
                    item.shoplist.tooth.map(items=>{
                        items.selected = action.selected
                    })
                }
                return item
            })
            break;
        case SELECTED_S:
            let len = 0;
            let newArr = [...state]
             return newArr.map(item=>{
                item.shoplist.tooth.map(items=>{
                    if (items.qid === action.qid) {
                        items.selected = action.payload;
                    }
                    if (items.selected){
                        ++len;
                    }else{
                        --len
                    }
                   if (len===item.shoplist.tooth.length) {
                       item.shoplist.selected=true
                   }else{
                       item.shoplist.selected = false
                   }
                })
                return item
            })
            break;
        case COMPUTED_N:
            let { initNum,index,ind } = action;
            let arr = [...state]
            let Items = arr[index].shoplist.tooth[ind]
            Items.num = Items.num + initNum;
            let sum = 0;
            if (!Items.total){
                Items.total = Items.price;
            }
            if (Items.num < 1) Items.num = 1;
            sum += Items.price * Items.num;
            Items.total = sum;
            return arr
            break;
        case DELETES_D:
            let {indexs,inds} = action.payload;
            let news = [...state]
            news[indexs].shoplist.tooth.splice(inds,1);
            if (!news[indexs].shoplist.tooth[0]){
                news.splice(indexs,1)
            }
            return news
            break;
    }
    return state
}
export default combineReducers({
    shoplist,getdata
})