function toogleStateText(obj){
	var el = $(obj);
	if (el.text() == el.data('text-swap')) {
		el.text(el.attr('title'));
	} else {
		el.attr('title', el.text());
		el.text(el.data('text-swap'));
	}
}
toogleStateText('#testOOP');
console.log(el)
