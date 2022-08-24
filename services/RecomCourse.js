const recomCourseModel = require('../db/models/recomCourse');

class recomCourseService {
  async getRecomCourse () {
    return await recomCourseModel.findAll({
      raw: true,
      where: { status: 1 },
      attributes: {
        exclude: ['cid', 'createdAt', 'updatedAt']
      }
    })
  }
}

module.exports = new recomCourseService();