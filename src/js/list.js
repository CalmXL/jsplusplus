import $ from 'jquery';

import '../styles/resets.css';
import '../styles/common.css';
import '../styles/iconfont.css';
import '../styles/ui.scss';
import '../styles/header.scss';
import '../styles/courseNav.scss';
import '../styles/courseList.scss';
import '../styles/courseItem.scss';
import '../styles/noDataTip.scss';
import '../styles/footer.scss';

import CourseNav from '../modules/CourseNav';
import Serach from '../modules/Search';

;(($) => {

  const courseNav = CourseNav($);
  const search = Serach($);

  const init = () => {
    courseNav.init();
    search.init();
  }

  init();

})($)