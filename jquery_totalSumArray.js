(function($){
	var arr = [1,2,3,5,9,15,12,18,4],
	    total = 0;

	$.each(arr,function() {
	    total += this;
	  
	});
	alert('The total is:' + total);
})(jQuery)