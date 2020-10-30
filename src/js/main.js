window.$ = window.jQuery = $

$.transLight = {
  init() {
    
    this.fixedHeaderFeatures()

    console.log('$.transLight STARTED')
  },
  fixedHeaderFeatures() {
    const $header = $(document).find('.header')

    $(window).on('scroll', () => {
      if (window.scrollY > 0) {
        $header.addClass('full-bg')
      } else {
        $header.removeClass('full-bg')
      }
    })

    return this;
  }
}

jQuery(() => {
  $.transLight.init()
})