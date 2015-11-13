(function($){
		var objTable = $('.table');
	    $.each(objTable, function(){
					var objSelectAll = $(this).find('input[name="selectall"]'),
					        objInput = $(this).find('input[type="checkbox"]'),
					        objRows  = $(this).find('tr.case');

					objSelectAll.on('change', function(){
						if(objSelectAll.is(':checked')){
							objRows.find(objInput).prop('checked', true);
						}else{
							objRows.find(objInput).prop('checked', false);
						}
					});
					objSelectAll.trigger('change');
	    });
	})(jQuery);