import { trimSpace } from '../utils/tools';

export default ($) => {

  const $input = $('.input-search')[0],
        $searchBtn = $('.btn-search');

  const init = () => {
    // console.log('input-search init');
    bindEvent();
  }

  function bindEvent () {
    $searchBtn.on('click', onSearchAction);
  }

  function onSearchAction () {
    // 输入框的值
    const inputVal = trimSpace($input.value);
    let pathName = window.location.pathname;

    if (inputVal.length === 0) return;  

    if (pathName.startsWith('/list')) {
      window.location.replace('/list/' + inputVal);
    } else {
      window.open('/list/' + inputVal);
      $input.value = '';
    }

  
  }

  return {
    init
  }
}