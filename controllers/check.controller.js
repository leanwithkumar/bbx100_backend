export const checkthis = ()=>{
    try{
        res.status(200).json({
            message : "backend is working"
        })
        console.log("sucess")

    }
    catch(error){
        res.status(400).json({
            message : "not working",
            error : error
        })
        console.log(error)
    }
}