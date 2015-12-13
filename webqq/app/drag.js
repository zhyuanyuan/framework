/**
 * Created by zhyuanyuan on 2015/12/13.
 */
define(["jquery"], function ($) {

    function drag(obj) {
        var disX = 0;
        var disY = 0;
        obj.on("mousedown", function (ev) {
            disX = ev.pageX - obj.offset().left;
            disY = ev.pageY - obj.offset().top;
            $(document).on("mousemove",function(ev){
                var L=ev.pageX - disX;
                var T=ev.pageY - disY;
                obj.css({left:L,top:T});
            });
            $(document).on("mouseup",function(){
                $(document).off();
            });
            return false;
        });
    }
    return {
        drag: drag
    }

});