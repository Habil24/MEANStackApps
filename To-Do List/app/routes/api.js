var User = require('../models/user');

module.exports = function(router){
        // Create a user router
    router.post('/users',function(req,res){
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;
        // Handling dublication and input pass
        if(req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == null || req.body.email == ''){
            res.send('Ensure username,password and email were provided.');
        }else{
            user.save(function(err){
                if(err){
                    res.send('Username or email already exists!');
                }else{
                    res.send('user has been created :)');
                }
            });
        }
    });
    return router;
}

