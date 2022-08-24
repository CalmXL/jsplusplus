const StudentModel = require('../db/models/student');
      
class StudentService {
  async getStudentData () {
    return await StudentModel.findAll({
      raw: true,
      where: { status : 1 },
      attributes: {
        exclude: ['sid', 'createdAt', 'updatedAt']
      }
    })
  }
}

module.exports = new StudentService();