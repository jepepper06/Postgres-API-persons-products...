const success = function(req,res,message,status){
    res.status(status || 200 ).send({
        error:'',
        body:message
    })
}

const error = function(req,res,message,status,details){
    console.error('[response error]: '+details)
    res.status(status || 500).send({
        error: message,
        body:''
    })
}
module.exports = {success,error}