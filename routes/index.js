const router = require('koa-router')(),
      controller = require('../controllers/Home');

router.get('/', controller.index);
router.get('/list/:kw?', controller.list);
router.get('/error', controller.error);

// 以上都匹配不到的情况 -> 全部匹配到 error
router.get('*', controller.error);

module.exports = router
