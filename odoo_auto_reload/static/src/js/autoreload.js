// ##############################################################################
// #    odoo autoreload
// #    author:15251908@qq.com (openliu)
// #    license:'LGPL-3
// #
// ##############################################################################
odoo.define('autoreload', function (require) {
    "use strict";

    // var framework = require('web.framework');
    var ListView = require('web.ListView');
    var KanbanView = require('web_kanban.KanbanView');

    var interval;

    function isBlockUI () {
        var tmp = $('body').hasClass('o_ui_blocked');
        return !!tmp;
    }

    ListView.include({
        init: function() {
            var self = this;
            this._super.apply(this, arguments);
            if (interval){
                clearInterval(interval);
            }

            var auto_class = this.fields_view.arch.attrs.class;
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
                            self.reload();
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }, timeout);
            }
        },
    });

    KanbanView.include({
        init: function() {
            var self = this;
            this._super.apply(this, arguments);
            if (interval){
                clearInterval(interval);
            }

            var auto_class = this.fields_view.arch.attrs.class;
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
                            self.do_reload();
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }, timeout);
            }
        },
    });



});
