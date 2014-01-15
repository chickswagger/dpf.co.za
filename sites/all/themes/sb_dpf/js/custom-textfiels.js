jQuery(document).ready(function() {
var default_values = new Array();
  jQuery("input.form-text").css("color", '#444343');
  
  jQuery("input.form-text").focus(function() {
    if (!default_values[this.id]) {
      default_values[this.id] = this.value;
	    //this.style.color = '#000';
	 // jQuery(this).css("color", '#000');
    }
    if (this.value == default_values[this.id]) {
      this.value = '';
	     this.style.color = '#000000';
         }
		 
    jQuery(this).blur(function() {
      if (this.value == '') {
	  this.id=='input.form-text';	
         this.value = default_values[this.id];
		 this.style.color = '#444343';
      }
    });
  });
});

		
		
