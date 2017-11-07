describe('AppController', function() {
    var $rootScope, $controller, scope;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function(_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        scope = $rootScope.$new();

        $controller('AppController', {
            '$scope': scope
        });
    }));

    it('should hook controller', inject(function() {
        expect($controller).toBeDefined();
    }));
});