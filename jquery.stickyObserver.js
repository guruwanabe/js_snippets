/**
  * @param {element} element
  * @param {string} className
  */
  function addSentinels(element, className, height, offset) {
      var el = document.querySelector(element);
      var sentinel = document.createElement('div');
      sentinel.classList.add('sticky-sentinel', className);
      sentinel.style.height = height+"px";
      sentinel.style.top = offset+"px";
      return el.appendChild(sentinel);
  }
  /**
   * @param {string} $stuck
   * @param {string} target
   */
  function dispatchEvents($stuck, target){
      var event = $.Event('sticky-change', {
          detail:{
              stuck: $stuck,
              target: target
          }
      });
      $(document).trigger(event);
  }
  /**
   * @param {string} className
   */
  function observer(className){
      var options = {
          threshold: [0]
      };
      var observer = new IntersectionObserver(observerCallback, options);
      var sentinels = addSentinels($element, className);
      var el = document.getElementsByClassName(className);
      observer.observe(el[0])
  }
  /**
   * @param {object} entries
   * @param {object} observer
   */
  function observerCallback(entries, observer){
      entries.forEach(function (entry) {
          var targetInfo   = entry.boundingClientRect;
          var rootBounds   = entry.rootBounds;
          var target       = entry.target;
          var stickyTarget = target.parentElement;

          if (targetInfo.top < rootBounds.bottom) {
              dispatchEvents(true, stickyTarget);
          }
          if (targetInfo.bottom >= rootBounds.top &&
              targetInfo.bottom < rootBounds.bottom) {
              dispatchEvents(false, stickyTarget);
          }
      })
  }
  //Run if supported
  if(window.IntersectionObserver){
    observer("sticky-sentinel-top");
    $(document).on('sticky-change', function (e) {
        $(e.detail.target).toggleClass("stuck", e.detail.stuck);
    });
  }
