document.addEventListener('DOMContentLoaded', function() {
  var debugBtn = document.getElementById('debug');
  var toggle = false;
  debugBtn.addEventListener('click', function() { 
    if (!toggle) {
      toggle = true;
      chrome.tabs.executeScript({
        code: '[].forEach.call(document.all,function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)});'
      });
    } else {
      toggle = false;
      chrome.tabs.executeScript({
        code: '[].forEach.call(document.all,function(a){a.removeAttribute("style");});'
      });
    }
  }, false);
}, false);