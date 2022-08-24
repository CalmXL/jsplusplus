const TeacherModel = require('../db/models/teacher');
      
class TeacherService {
  async getTeacherData () {
    return await TeacherModel.findAll({
      raw: true,
      where: { status : 1 },
      attributes: {
        exclude: ['tid', 'createdAt', 'updatedAt']
      }
    })
  }
}

module.exports = new TeacherService();