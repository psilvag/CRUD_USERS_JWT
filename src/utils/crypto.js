

  const bcrypt=require('bcrypt')

  
  const hashpassword=(password)=>{
   return bcrypt.hashSync(password,10)
  }

  const comparePass=(password,hashpass)=>{
    return bcrypt.compareSync(password,hashpass)
  }

  module.exports={
    hashpassword,
    comparePass
  }
