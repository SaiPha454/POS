//json response data to the client for passing along the http response
const response = (status=200, msg, meta=null, data=null, links= null)=>{

    let res= {
        status,
        message: msg
    }

    if(meta != null){
        res.meta= meta
    }
    
    if(data != null){
        res.data= data
    }

    if(links !=null){
        res.links = links
    }

    return res;
}

//json error response data for passing along the http response
const errorResponse = (status=400, message)=>{
    let res={
        status,
        message
    }
    
    return res;
}

module.exports={
    response,
    errorResponse
}