module.exports = function multiply(first, second) {

    var sum=[],
        buff="";
    function myzero(str) {
        var u="0";
        while (str.length%4){
            str=u+str;
        }
        return str;
    }
    first=myzero(first);
    second=myzero(second);
    var first_index=first.length/4,
        second_index=second.length/4,
        basis=first_index+second_index;

    for(var i=0;i<=basis-2;i++){
        sum[i]=0;
    }
    while (first_index){
        while (second_index){
            sum[basis-first_index-second_index]+=parseInt(first.substr((first_index-1)*4,4),10)*
                parseInt(second.substr((second_index-1)*4,4),10);
            --second_index;
        }
        second_index = second.length/4;
        --first_index;
    }

    for(var i=0;i<basis-2;i++){
        sum[i+1]+=Math.floor(sum[i]/(10000));
        buff=myzero(String(Math.floor(sum[i]%10000)))+buff;
    }
    buff=sum[sum.length-1]+buff;
    return buff;
// your solution
}
