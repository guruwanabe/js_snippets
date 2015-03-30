function toogleStateText(obj){
	var el = $j(obj);
	if (el.text() == el.data('text-swap')) {
		el.text(el.attr('title'));
	} else {
		el.attr('title', el.text());
		el.text(el.data('text-swap'));
	}
}