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

