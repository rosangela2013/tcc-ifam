angular.module("mainApp").filter("filterAccent",['$filter', function ($filter) {
	
  	function normalize(str) {
	
  		return str.toString().replace(/[áàäãâ]/g, "a")
		  			.replace(/[éèëê]/g, "e")
		            .replace(/[íìïî]/g, "i")
		            .replace(/[óòôõö]/g, "o")
		            .replace(/[úùüü]/g, "u")
		            .replace(/[ñ]/g, "n")
		            .toUpperCase();
	}

		
	 function comparator(actual, expected) {
		 return (normalize(actual).indexOf(normalize(expected))>=0) 
	 }
	
	
	return function (array, expression) {
		return $filter('filter')(array,expression,comparator);
	};
	
}]);