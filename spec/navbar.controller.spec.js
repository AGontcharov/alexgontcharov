describe('Navbar Controller', function() {
	beforeEach(module('myApp'));

	var scope, controller, $window, $location;

	beforeEach(inject(function($controller, $rootScope, _$window_, _$location_) {
		scope = $rootScope.$new();
		$location = _$location_;
		$window = _$window_;
		controller = $controller('navbar', {
			$scope: scope
		});
	}));

	describe('isActive', function() {
		it('should check if the path is active', function() {
			$location.path('/about');
			expect($location.path()).toBe('/about');
        	expect(scope.isActive('/about')).toBe(true);        	
		});
	});

	describe('pdfViewer', function() {

		beforeEach(function() {
			spyOn($window, 'open');
		});

		it('should call the window service', function() {
			scope.pdfViewer();
			expect($window.open).toHaveBeenCalled();
			expect($window.open.calls.count()).toBe(1);
		});

		it("Should call the window service with '/resume.pdf'", function() {
			scope.pdfViewer();
			expect($window.open).toHaveBeenCalledWith('/resume.pdf');
		});
	});
});