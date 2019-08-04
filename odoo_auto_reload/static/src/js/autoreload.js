// ##############################################################################
// #    odoo autoreload
// #    author:15251908@qq.com (openliu)
// #    license:'MIT'
// #
// ##############################################################################
odoo.define('autoreload', function (require) {
    "use strict";

    var ListView = require('web.ListView');
    var KanbanView = require('web.KanbanView');
    var ListController = require('web.ListController');
    var KanbanController = require('web.KanbanController');


    
    var controller;

    var interval;

    function isBlockUI () {
        var tmp = $('body').hasClass('o_ui_blocked');
        return !!tmp;
    }

    ListController.include({
        renderPager: function () {
            controller=this;
            // console.log(this);
            return this._super.apply(this, arguments);
        }
    });

    KanbanController.include({
        renderPager: function () {
            controller=this;
            // console.log(this);
            return this._super.apply(this, arguments);
        }
    });

    ListView.include({
        init: function (viewInfo, params) {
            this._super.apply(this, arguments);
            if (interval){
                clearInterval(interval);
            }
            var auto_class = this.arch.attrs.class;
            // console.log("auto_reload:"+ auto_class );

            if(auto_class && auto_class.indexOf('auto_reload')>=0){
                var timeout=5000;
                var re=/auto_reload_(\d+)/;
                var arr = re.exec(auto_class);
                if (arr){
                    timeout=parseInt(arr[1]);
                }
                // console.log('timeout:'+timeout);

                interval = setInterval(function() {
                    try {
                        // console.log('reload:'+isBlockUI());
                        if (!isBlockUI()){
                            controller.reload();
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }, timeout);
            }
        },
    });

    KanbanView.include({

        init: function (viewInfo, params) {
            this._super.apply(this, arguments);
            if (interval){
                clearInterval(interval);
            }
            var auto_class = this.arch.attrs.class;
            // console.log("auto_reload:"+ auto_class );

            if(auto_class && auto_class.indexOf('auto_reload')>=0){
                var timeout=5000;
                var re=/auto_reload_(\d+)/;
                var arr = re.exec(auto_class);
                if (arr){
                    timeout=parseInt(arr[1]);
                }
                // console.log('timeout:'+timeout);

                interval = setInterval(function() {
                    try {
                        // console.log('reload:'+isBlockUI());
                        if (!isBlockUI()){
                            controller.reload();
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }, timeout);
            }
        }
    });

});
