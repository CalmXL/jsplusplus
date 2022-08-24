function getTarget (ev) {
  const e = ev || window.event;
  return e.target || e.srcElement;
}

function getEventType (ev) {
	const e = ev || window.event;
	return e.type;
}

function filterData (datas, id) {
  // 筛选数据
  return datas.filter((data) => {
    return data.field === id;
  })
}

function tplReplace (template, replaceObject) {
  return template().replace(/{{(.*?)}}/g, (node, key) => {
    return replaceObject[key];
  })
}

function trimSpace (str) {
  return str.replace(/\s+/g, '');
}


export {
  getTarget,
  getEventType,
  filterData,
  tplReplace,
  trimSpace
}