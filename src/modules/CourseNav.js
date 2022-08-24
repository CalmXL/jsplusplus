import { filterData, tplReplace } from "../utils/tools";
import courseItemTpl from '../templates/courseItem.tpl';

export default ($) => {

  const $navList = $('.J_navList'), 
        $courseList = $('.J_courseList'),
        $navItem = $navList.children('.nav-item'),
        courseData = $.parseJSON($('#J_courseData').html() || []);

  const init = () => {
    bindEvent();
  }

  function bindEvent () {
    // on 监听事件， 
    $navList.on('click', '.nav-lk', onNavClick);
  }

  function onNavClick () {
    
    const $this = $(this),
          curIdx = $this.parent().index(),
          id = parseInt($this.attr('data-id')),
          data = filterData(courseData, id);
    tabChange(curIdx);
    renderList(data); 
  }

  function tabChange (index) {
    $navItem.eq(index).addClass('current')
              .siblings().removeClass('current');
  }

  function renderList (data) {
    let list = '';

    data.forEach((item, index) => {
      list += tplReplace(courseItemTpl, { 
        href: item.href,
        posterUrl: item.posterUrl,
        courseName: item.courseName,
        priceClass: item.price === '0' ? 'left free' : 'left price',
        price: item.price === '0' ? '免费' : `￥${item.price}`,
        studentCount: item.studentCount
      });
    });
    
    $courseList.html(list);
  }

  return {
    init
  }
}