
const jwtStrategy=require('passport-jwt').Strategy 
const extractJwt=require('passport-jwt').ExtractJwt 
const passport = require('passport')


const jwtSecret = require('../../config').api.jwtSecret
const {findUserById} = require('../users/users.controllers')


  const options={
        jwtFromRequest:extractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey:jwtSecret
        
  }

  passport.use(
    new jwtStrategy(options, async (tokenDecoded,done)=>{  
      
       try{
         const user=await findUserById(tokenDecoded.id)
         if(!user){
            return done(null,false) 
         }
            return done(null,tokenDecoded) 
       }
       catch(error){
          return done(error,false) 
       }
    })
  )


module.exports=passport

