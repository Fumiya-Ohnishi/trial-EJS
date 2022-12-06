// accordion
$(function () {

  function toggleAccordion() {
    $('.js-accordion-trigger').on('click', function() {
      const content = $(this).parents('.js-accordion-wrap').find('.js-accordion-content');
      content.slideToggle(300,
        function(){
          $(this).parents('.js-accordion-wrap').toggleClass('is-active')
          content.toggleClass('is-active');
        }
      );
    });
  }

  toggleAccordion();
});