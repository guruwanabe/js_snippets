

  var currentZoom = parseInt($("body").css("font-size"),10);
  var objTextZoom = $('*[text-zoom]');
  var strZoom = objTextZoom.data('zoom');

  console.log(currentZoom);

  objTextZoom.on('click', function(el) {
  		el.preventDefault();
		ChangeCurrentFontSize(".intro", 0);
		ChangeCurrentFontSize(".accent", 0);
		ChangeCurrentFontSize("h1", 0);
		ChangeCurrentFontSize("h2", 0);
		ChangeCurrentFontSize("h3", 0);
		ChangeCurrentFontSize("h4", 0);
		ChangeCurrentFontSize("#content p", 0);
		ChangeCurrentFontSize("#content ul", 0);
  });
  
  $("#fs-big").on('click', function(el) {
  		el.preventDefault();
		ChangeCurrentFontSize(".intro", 1);
		ChangeCurrentFontSize(".accent", 1);
		ChangeCurrentFontSize("h1", 1);
		ChangeCurrentFontSize("h2", 1);
		ChangeCurrentFontSize("h3", 1);
		ChangeCurrentFontSize("h4", 1);
		ChangeCurrentFontSize("#content p", 1);
		ChangeCurrentFontSize("#content ul", 1);
  });
  
  function ChangeCurrentFontSize(el,step) {
  		var currentZoom = parseInt($(el).css("font-size"),10);
		if (step == 0) { 
			currentZoom = parseInt(currentZoom * 0.9); 
		}
		if (step == 1) { 
			currentZoom = parseInt(currentZoom * 1.1);
		}
		$(el).css("font-size",currentZoom);
  }
