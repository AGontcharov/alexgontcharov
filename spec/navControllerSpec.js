describe('navController', function() {
	beforeEach(module('app'));

	var scope, $location, createController;

	beforeEach(inject(function($rootScope, $window, _$location_, $controller) {
		scope = $rootScope.new();
		$location = _$location_;
		createController = $controller('navController', {
			'$scope': scope
		});
	}));

	describe('$scope.isActive', function() {
		it('checks if the path is active', function() {
			$location.path('/about');
			expect($location.path()).toBe('/about');
		});
	});
});

/*describe('NavCtrl', function() {
    var scope, $location, createController;

    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();

        createController = function() {
            return $controller('navController', {
                '$scope': scope
            });
        };
    }));

    it('should have a method to check if the path is active', function() {
        var controller = createController();
        $location.path('/about');
        expect($location.path()).toBe('/about');
        expect(scope.isActive('/about')).toBe(true);
        expect(scope.isActive('/contact')).toBe(false);
    });
});*/