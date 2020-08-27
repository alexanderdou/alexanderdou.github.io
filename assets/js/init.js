var openPhotoSwipe = function() {
      var pswpElement = document.querySelectorAll('.pswp')[0];
      var options = {
        history: false,
        focus: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0
    };
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
    };

    function swipeInit() {
      openPhotoSwipe()
    };