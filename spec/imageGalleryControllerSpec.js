describe('Image Gallery Controller', function() {
	beforeEach(module('myApp'));

	var controller, scope;

	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		controller = $controller('imageGalleryController', { 
			$scope: scope 
		});
	}));

	describe('slideIndex', function() {
		it('should be defined', function() {
			expect(controller.slideIndex).toBeDefined();
		});

		it('should be initialized to 0', function() {
			expect(controller.slideIndex).toBe(0);
		});

		it('should get image index', function() {
			controller.slideIndex = 5;
			expect(controller.slideIndex).toBe(5);
		});	
	});
});