'use strict';

describe('About Controller', function() {
  beforeEach(module('myApp'));

  var controller, scope, lightbox;

  beforeEach(inject(function($controller, $rootScope, _lightbox_) {
    scope = $rootScope.$new();
    lightbox = _lightbox_;
    controller = $controller('about', {
      $scope: scope
    });

    // spies
    spyOn(lightbox, 'show');
    spyOn(lightbox, 'next');
  }));

  describe('showImage', function() {
    it('should call the lightbox service', function() {
      scope.showImage(1);
      expect(lightbox.show.calls.count()).toBe(1);
    });

    it('should call the lightbox service with index', function() {
      scope.showImage(4);
      expect(lightbox.show).toHaveBeenCalledWith(4);
    });
  });

  describe('nextImage', function() {
    it('should call the lightbox service', function() {
      scope.nextImage(-1);
      expect(lightbox.next.calls.count()).toBe(1);
    });

    it('should call the lightbox service with index', function() {
      scope.nextImage(-1);
      expect(lightbox.next).toHaveBeenCalledWith(-1);
    });
  });

  describe('onEventImage', function() {
    it('should call the lightbox service', function() {
      var event = { key: 'ArrowLeft' };

      scope.onEventImage(event);
      expect(lightbox.next.calls.count()).toBe(1);
    });

    it('should call the lightbox service with 1 on right arrow', function() {
      var event = { key: 'ArrowRight' };

      scope.onEventImage(event);
      expect(lightbox.next).toHaveBeenCalledWith(1);
    });

    it('should call the lightbox service with -1 on left arrow', function() {
      var event = { key: 'ArrowLeft' };

      scope.onEventImage(event);
      expect(lightbox.next).toHaveBeenCalledWith(-1);
    });
  });
});