document.addEventListener('DOMContentLoaded', function() {
    var additionalOptions = document.getElementsByClassName('type');
    Array.prototype.forEach.call(additionalOptions, function(element) {
      element.style.display = 'none';
    });
  
    document.getElementById('service').addEventListener('change', function() {
      var displayStyle = this.value === 'handyman' ? 'block' : 'none';
      Array.prototype.forEach.call(additionalOptions, function(element) {
        element.style.display = displayStyle;
      });
    });
  });
      