module.exports = function(app){
    app.post('/login', function(req, res){

        var userData = [
            {
                id : "alex",
                pwd : "123"
            },
            {
                id : "troy",
                pwd : "as2"
            },
            {
                id : "pet",
                pwd : "aaa"
            },
        ]
        var result = false

        for (var i = 0; i < userData.length; i++){
            var person = userData[i]

            if (person.id === req.body.id && person.pwd === req.body.pwd){
                result = true
            }
        }

        var resMsg 

        if (result == false){
            resMsg = {
                "ok" : false,
                "errors" : {}
            }
        }else{
            resMsg = {
                "ok" : true
            }
        }
        
                
        res.status(201).send(resMsg)
    })
}