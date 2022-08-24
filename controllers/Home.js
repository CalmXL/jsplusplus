const PAGE_CONF = require('../configs/page'),
      navData = require('../configs/nav');

const { getSliderData } = require('../services/slider');
const { getRecomCourse } = require('../services/RecomCourse');
const { getCollectionData } = require('../services/Collection');
const { getTeacherData } = require('../services/Teacher');
const { getStudentData } = require('../services/Student');
const { getCourseCategory } = require('../services/CourseTab');
const { getCourseData } = require('../services/Course');

const { searchData } = require('../libs/utils');

class Home {

  async index (ctx, next) {

    const sliderData = await getSliderData();
    const recomCourse = await getRecomCourse();
    const collectionData = await Promise.all(
                              await getCollectionData());
    const teacherData = await getTeacherData();
    const studentData = await getStudentData();


                              
    await ctx.render('index', {
      PAGE_CONF: PAGE_CONF.INDEX,
      navData,
      sliderData,
      recomCourse,
      collectionData,
      teacherData,
      studentData
    });
  }

  async list (ctx, next) {

    const keyword = ctx.params.kw,
          courseTabData =  await getCourseCategory(),
          courseData = await getCourseData();

    await ctx.render('list', {
      PAGE_CONF: PAGE_CONF.LIST,
      navData,
      courseTabData,
      courseData: keyword ? searchData(courseData, keyword) : courseData,
      courseDataStr: JSON.stringify(courseData)
    })
  }


  async error (ctx, next) {

    await ctx.render('error', {
      PAGE_CONF: PAGE_CONF.ERROR,

    })
  }
}


module.exports = new Home();