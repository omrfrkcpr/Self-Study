module.exports = (req,res,next)=>{
    if(req.isLogin){
        return next()
    }
    res.errorStatusCode = 401;
    throw new Error("Not authorized!")
}