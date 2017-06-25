describe('contactController', function() {
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
		it('should open a window and invoke mailto:', function() {
			spyOn($window, 'open');
			scope.sendMail();
			expect($window.open).toHaveBeenCalled();
			expect($window.open).toHaveBeenCalledWith('mailto:alexander.goncharov@gmail.com');
			expect($window.open.calls.count()).toBe(1);
		});
	});
});