/**
 * Created by zhyuanyuan on 2015/12/13.
 */
define(function(){
    function range(val , max , min){

        if( val > max ){
            return max;
        }
        else if( val < min ){
            return min;
        }
        else{
            return val;
        }

    }
    return range;
});