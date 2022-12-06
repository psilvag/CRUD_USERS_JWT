
const {findUserByEmail}=require('../users/users.controllers')
const {comparePass}=require('../utils/crypto')

const checkUserCredential=async (email,password)=>{
    try{
        const user=await findUserByEmail(email)
        const verifyPassword=comparePass(password,user.password)
        if(verifyPassword){
            return user
        }
        return null
    }
    catch(error)
    {
        return null
    }
}

module.exports=checkUserCredential



 