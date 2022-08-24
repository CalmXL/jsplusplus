//  轮播图模块
import $ from 'jquery';

// 引入轮播图配置(1. 自动轮播 2. 图片跳转时间)
import { CAROUSEL } from '../config/config';
// 工具函数中 获取源对象 或 获取事件类型函数
import { getTarget, getEventType } from '../utils/tools';

export default class Carousel {
  constructor () {
    this.$carousel = $('.J_carousel');
    this.$sliders = this.$carousel.find('.slider-item');
    this.$indicators = this.$carousel.find('.indicator-item');

    this.curIdx = 0;
  }

  init () {
    CAROUSEL.autoPlay && this.autoPlay();
    this.bindEvent();
  }

  autoPlay () {
    Carousel.timer = setInterval(() => {
      this.setIndex('next');
    }, CAROUSEL.duration)
  }

  bindEvent () {
    this.$carousel.on('mouseenter', $.proxy(this.mouseInOut, this));
    this.$carousel.on('mouseleave', $.proxy(this.mouseInOut, this));
    this.$carousel.on('click', $.proxy(this.onCarouselClick, this));
  }

  mouseInOut (ev) {
    const tar = getTarget(ev),
          eventType = getEventType(ev);

    switch (eventType) {
      case 'mouseenter': 
        clearTimeout(Carousel.timer);
        break;
      
      case 'mouseleave': 
        CAROUSEL.autoPlay && this.autoPlay();
        break;

      default: 
        break;
    }
  }

  onCarouselClick (ev) {
    const tar = getTarget(ev),
          className = tar.className;

    console.log(className);
    switch (className) {
      case 'indicator-item':
        this.curIdx = $(tar).index();
        this.sliderAction(this.curIdx);
        break;
      case 'iconfont icon-arrow-right':
        this.setIndex('next');
        break;
      case 'iconfont icon-arrow-left':
        this.setIndex('prev');
        break;

      default: 
        break;
    }
  }
  
  setIndex (direction) {
    // console.log(this.$sliders.length);
    switch (direction) {
      case 'next': 
        this.curIdx = this.curIdx === this.$sliders.length - 1
                      ? 0
                      : this.curIdx + 1; 
        break;
      case 'prev': 
        this.curIdx = this.curIdx === 0
                      ? this.$sliders.length - 1
                      : this.curIdx - 1;
        break;
      default: 
        break;
    }

    this.sliderAction(this.curIdx);
  }

  sliderAction (index) {

    /**
		 * eq 返回被选元素中指定索引的元素
		 * fadeIn 淡入隐藏元素 
		 * fadeOut 淡出可见元素
		 * siblings 返回所有被选元素的同级元素
		 * 
		 * addClass 向被选元素添加一个类名
		 */

    this.$sliders.eq(index).fadeIn(300)
                  .siblings().fadeOut(300);

    this.$indicators.eq(index).addClass('current')
                    .siblings().removeClass('current');
  }

}