/**
 * Created by zhyuanyuan on 2015/12/13.
 */
define(["jquery","range"],function($,range){

   function scale(obj1,obj2){
       var downX = 0;
       var downY = 0;
       var downW = 0;
       var downH = 0;
       obj2.on("mousedown",function(ev){
           downX = ev.pageX;
           downY = ev.pageY;
           downW = obj1.get(0).offsetWidth;
           downH = obj1.get(0).offsetHeight;

           $(document).on("mousemove", function (ev) {
               var W =  ev.pageX - downX + downW;
               var H = ev.pageY - downY + downH;
               W= range(W,500,100);
               H=range(H,500,100);
               obj1.width(W).height(H);
           });
           $(document).on("mouseup", function (ev) {
               $(document).off();
           });
           return false;
       });

   }
    return {
        scale : scale
    }
});