describe('imageGalleryController', function() {
	
	// beforeEach(module('aadfadsfsdafasdfa'));

	var scope, controller;

	describe('$scope.getIndex', function() {
		
		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.new();
			controller = $controller('imageGalleryController', {
				'$scope': scope
			});
		}));

		it('get\'s the image index', function() {
			// controller.slideIndex = 5;
			// expect(controller.slideIndex).toBe(5);
		});
	});
});