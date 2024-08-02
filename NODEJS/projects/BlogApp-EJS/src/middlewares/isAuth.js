module.exports = (req,res,next)=>{
    if(req.isLogin){
        return next()
    }
    if(req.url.includes("/api")){
        res.errorStatusCode = 401;
        throw new Error("Not authorized!");
    }else{
        req.session.message = "You must be login!"
        res.redirect("/login")
    }
}