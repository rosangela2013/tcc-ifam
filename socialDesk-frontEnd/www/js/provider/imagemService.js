appService.factory('ImagemService', function() {
    var self = {};

    self.mostrarImagem = function(base64) {
            if (base64) {
                return 'data:image/jpeg;base64,' + base64;
            }
            return undefined;
    };

    return self;
});