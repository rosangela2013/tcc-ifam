appService.factory('CategoriaAPI', function($http, constants){
    var api = {};
    var baseURL = constants.BASE_URL + "/categoria";

    ///////////////////////////
    api.list = list;

    ///////////////////////////


    function list() {
        return $http.get(baseURL);
    }

    return api;
});