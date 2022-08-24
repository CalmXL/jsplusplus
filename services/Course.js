const CourseModel = require('../db/models/course');
      
class CourseService {
  async getCollectionCourseData (courseIdList) {
    const result = await CourseModel.findAll({
      raw: true,
      where: { status: 1 },
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });

    const data = result.filter((item) => {
      return courseIdList.includes(item.cid)
    })

    return data;
  }

  async getCourseData () {
    return await CourseModel.findAll({
      raw: true,
      where: { status: 1 },
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    })
  } 

}

module.exports = new CourseService();