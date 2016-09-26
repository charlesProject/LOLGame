//初始化分页组件
function initPagePlugin(total,pageSize){
	$("#pagePluginBox").pagination(total, {
        items_per_page:pageSize,
        num_display_entries:1,
        num_edge_entries:1,
        prev_text:"前一页",
        next_text:"后一页",
        callback:handlePaginationClick
});
}
//分页回调函数
function handlePaginationClick(new_page_index, pagination_container) {
	console.log("分页-->"+new_page_index);
    return false;
}