const  router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('index');
});
router.get('/ruta2',(req,res)=>{
    res.render('index');
});

module.exports = router;