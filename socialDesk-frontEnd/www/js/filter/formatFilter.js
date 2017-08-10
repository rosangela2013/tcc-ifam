angular.module("mainApp").filter("format", function () {
	
	 var formatadores =  {
		 'telefone': function(input){
			 if (!input) return "";
			 return input.replace( /^(\d{2})(\d{4,5})(\d{4})/g,"($1) $2-$3");
		 },
		 'cpf': function(input){
			 if (!input) return "";
			 return input.replace( /^(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4");
		 }
	 };
	
	
	
	return function (input, type) {
		
		if (!formatadores[type]) {
			return input;
		}
		return formatadores[type](input);
	};
});