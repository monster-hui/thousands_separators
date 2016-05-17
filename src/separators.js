'use strict';

function thousands_separators(num) {
        /*if(isNaN(num)){
		alert( "illegal input");
		return num;
		}/*
	 num+='';
	 var numArray= num.split('.');
	 var numLeft = numArray[0];
	 var numbRight = numArray.length > 1 ? '.' + numArray[1] : '';
	 var form = /(\d+)(\d{3})/;
	 while (form.test(numLeft)) {
	  numLeft = numLeft.replace(form, '$1' + ',' + '$2');
	 }
	var  outs= numLeft + numbRight;
	return outs;
}

module.exports = thousands_separators;
