# odoo_auto_reload
odoo实时更新数据要用到bus,看起来都好麻烦,
刚好有时候我只是想刷新下列表或者看板,就跟点击鼠标一样,那就更新吧

# usage
----------------------------
```
<tree ... class="...other_css auto_reload">
...//默认5秒刷新
</tree>
```
```
<tree ... class="...other_css auto_reload_3000">
...//修改默认刷新时间为3秒
</tree>
```
```
<kanban ... class="...other_css auto_reload">
...//默认5秒刷新
</kanban>
```
```
<kanban ... class="...other_css auto_reload_3000">
...//修改默认刷新时间为3秒
</kanban>
```
===不会或者不想做二次开发的,可以直接按下面的视频设置需要刷新的页面,不想用就删掉 auto_reload class
<img  src="https://github.com/openliu/odoo_auto_reload/blob/10.0/odoo_auto_reload/static/description/help2.gif?raw=true" />
