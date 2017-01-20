;( function( window ) {
	
	'use strict';

	function extend(a, b) {
		for(var key in b) { 
			if(b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function BSMTabs(obj, options) {
		this.obj = obj;
		this.options = extend({}, this.options);
  		extend(this.options, options);
  		this._init();
	}

	BSMTabs.prototype.options = {
		start : 0
	};

	BSMTabs.prototype._init = function() {
		// tabs elemes
		this.objTabs = [].slice.call(this.obj.querySelectorAll('.bsm-tab > ul > li'));
		// content items
		this.objItems = [].slice.call(this.obj.querySelectorAll('.bsm-tab-content'));
		// current index
		this.intActive = -1;
		// show current content item
		this._show();
		// init events
		this._initEvents();
	};

	BSMTabs.prototype._initEvents = function() {
		var self = this;
		this.objTabs.forEach(function(objTab, intIndex) {
			objTab.addEventListener('click', function(e) {
				e.preventDefault();
				self._show(intIndex);
			} );
		} );
	};

	BSMTabs.prototype._show = function(intIndex) {
		if(this.intActive >= 0) {
			this.objTabs[this.intActive].className = '';
			this.objItems[this.intActive].className = '';
		}
		// change current
		this.intActive = intIndex != undefined ? intIndex : this.options.start >= 0 && this.options.start < this.objItems.length ? this.options.start : 0;
		this.objTabs[this.intActive].className = 'active';
		this.objItems[this.intActive].className = 'active';
	};

	// add to global namespace
	window.BSMTabs = BSMTabs;

})(window);

// Usage
// new BSMTabs(document.getElementById('bsm-tabs'));
