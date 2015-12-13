/**
 * Created by zhyuanyuan on 2015/12/13.
 */
require.config({
    baseUrl: "./app",
    paths: {
        jquery: "../js/jquery"
    }
});

require(["jquery", "drag", "scale"], function ($, drag, scale) {
    $(function () {
        var $input = $("#input1"), $div1 = $("#div1"), $div2 = $("#div2"), $div3 = $("#div3");
        drag.drag($div3);
        $input.on("click", function (ev) {
            $div1.show();
            scale.scale($div1, $div2);
        });
    });
});



