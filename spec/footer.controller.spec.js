describe('Footer Controller', function() {
	beforeEach(module('myApp'));

	var scope, controller, $window;

	beforeEach(inject(function($controller, $rootScope, _$window_) {
		scope = $rootScope.$new();
		$window = _$window_;
		controller = $controller('contactController', {
			$scope: scope
		});
	}));

	describe('$scope.sendMail', function() {

		beforeEach(function() {
			spyOn($window, 'open');
		});

		it('should call the window service', function() {
			scope.sendMail();
			expect($window.open).toHaveBeenCalled();
			expect($window.open.calls.count()).toBe(1);
		});

		it("should call the window service with 'mailto:alexander.goncharov@gmail.com'", function() {
			scope.sendMail();
			expect($window.open).toHaveBeenCalledWith('mailto:alexander.goncharov@gmail.com');
		});
	});
});