const rollBack = function(num){
    let value = [];
    for(let i = 0; i < num; i++) {
        value.push( parseInt(Math.random() * 6)+1);
    }
    value.join(",");
    return value;
};
const arg = process.argv;
//console.log(arg);
const slice = arg.slice(2);
for(const data of slice){
    const convert = Number(slice);
    if(Number.isInteger(convert) && convert > 0){
        console.log("Rolled " + convert + " dice:" + rollBack(convert));
    }
}

