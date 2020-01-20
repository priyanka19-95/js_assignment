let find=str=>{
    const map =new Map;
    let res;
    let maxcount =0;
    for(let ch of str){
        let count=(map.get(ch)||0)+1;
        map.set(ch,count);
        if(count>maxcount){
            maxcount=count;
            res=ch;
        }
    }
    return res;
}
console.log(find("hiii there"))