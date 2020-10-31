window.$ = window.jQuery = $
import { slick } from 'slick-carousel'
import 'slick-carousel/slick/slick.css'

$.transLight = {
  init() {
    
    this
      .fixedHeaderFeatures()
      .projectSlider()
      .catalogTabs()
      .rentSlider()
      .gotoNavigation()

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
  },
  projectSlider() {
    const $slider = $(document).find('[data-projects-slider]'),
          $arrows = $(document).find('[data-projects-slider-arrows]')

    $slider.slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      prevArrow: $arrows.find('.prev-arrow'),
      nextArrow: $arrows.find('.next-arrow')
    })

    return this;
  },
  catalogTabs() {
    const $tabTitles = $(document).find('[data-projects-tabs-titles]'),
          $liner = $(document).find('[data-projects-tabs-liner]'),
          $tabContents = $(document).find('[data-projects-tabs-contents]')

    setTimeout(() => {
      const startOffsetLeft = $tabTitles.find('.item.active')[0].offsetLeft,
          startWidth = $tabTitles.find('.item.active').outerWidth()
      $liner.css({
        left: `${startOffsetLeft-1}px`,
        width: `${startWidth}px`
      })
    }, 1000)

    let startIndex = $tabTitles.find('.item.active').index()

    $tabContents
      .find('.item').eq(startIndex)
      .addClass('active').show()
      .siblings().removeClass('active').hide()
    
    $(document).on('click', '[data-projects-tabs-titles] .item', (e) => {
      e.preventDefault()
      const $this = $(e.currentTarget)
      $this.addClass('active').siblings().removeClass('active')

      let leftOffset = $this[0].offsetLeft,
          width = $this.outerWidth() + 2

      $liner.animate({ left: `${leftOffset-1}px`, width: `${width}px` }, 200)

      let tabIndex = $this.index()

      $tabContents
        .find('.item').eq(tabIndex)
        .addClass('active').slideDown(200)
        .siblings().removeClass('active').slideUp(200)
    })
    
    return this;
  },
  rentSlider() {
    const $slider = $(document).find('[data-rent-slider]'),
          $prevArr = $(document).find('[data-rent-slider-arrows] .prev-arrow'),
          $nextArr = $(document).find('[data-rent-slider-arrows] .next-arrow')

    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      prevArrow: $prevArr,
      nextArrow: $nextArr
    })

    return this;
  },
  gotoNavigation() {
    $(document).on('click', '[data-goto]', (e) => {
      e.preventDefault()
      const sectionId = $(e.currentTarget).data('goto')
      const $section = $(document).find(`[data-section="${sectionId}"]`)

      $('html, body').animate({
        scrollTop: $section.offset().top - 92
      }, 1000)
    })

    return this;
  }
}

jQuery(() => {
  $.transLight.init()
})