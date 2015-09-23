
export const shortDate = function shortDate(val){
    if(!val) return val;
    return (val.getMonth() + 1) + "/" + val.getDate() + "/" + val.getFullYear();
}