const AdminModel = require('../db/models/admin');

class AdminServices {
  async crearteAdminAccount (account) {
    const username = account.username;

    const result = AdminModel.findOne({
      where: { username }
    });

    if (result) {
      AdminModel.update(account, {
        where: { username }
      })
    } else {
      AdminModel.create(account);
    }
  }

  async login (userInfo) {
    const { username, password } = userInfo;
  
    const usernameExist = await AdminModel.findOne({
      where: { username }
    });

    if (!usernameExist) {
      return 10003
    }


    const dbPassword = usernameExist.get('password');
    
    if (password !== dbPassword) {
      return 10004;
    }

    const uid = usernameExist.get('id');

    return  {
      uid,
      username
    }

  }
}

module.exports = new AdminServices();