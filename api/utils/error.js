export const errorHandler = (stausCode, message)=>{
    const error = new Error()
    error.statusCode = stausCode
    error.message = message
    return error
}