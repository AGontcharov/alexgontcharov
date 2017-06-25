describe('navController', function() {
	beforeEach(module('myApp'));

	var scope, controller, $window, $location;

	beforeEach(inject(function($controller, $rootScope, _$window_, _$location_) {
		scope = $rootScope.$new();
		$location = _$location_;
		$window = _$window_;
		controller = $controller('navController', {
			$scope: scope
		});
	}));

	describe('$scope.isActive', function() {
		it('should have a method to check if the path is active', function() {
			$location.path('/about');
			expect($location.path()).toBe('/about');
        	expect(scope.isActive('/about')).toBe(true);
        	expect(scope.isActive('/projects')).toBe(false);

			$location.path('/');
			expect($location.path()).toBe('/');
        	expect(scope.isActive('/')).toBe(true);
        	expect(scope.isActive('/about')).toBe(false);        	
		});
	});

	describe('$scope.pdfViewer', function() {
		it('should open a new tab', function() {
			spyOn($window, 'open');
			scope.pdfViewer();
			expect($window.open).toHaveBeenCalled();
			expect($window.open).toHaveBeenCalledWith('/resume.pdf');
			expect($window.open.calls.count()).toBe(1);
		});
	});
});