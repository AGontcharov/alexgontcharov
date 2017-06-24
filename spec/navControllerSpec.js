describe('navController', function() {
	var scope, $location, createController;

	beforeEach(inject(function($rootScope, $controller, _$location_) {
		$location = _$location_;
		scope = $rootScope.new(); //Create a new child scope

		createController = function() {
			return $controller('navController' {
				'$scope': scope
			});
		};
	}));

	it('should have a method to check if the path is active', function() {
	// 	var controller = createController();
	// 	$location.path('/about');
	// 	expect($location.path()).toBe('/about');
	// 	expect(scope.isActive('/about'))toBe(true);
	// 	expect(scope.isActive('/home'))toBe(false);
	});
});