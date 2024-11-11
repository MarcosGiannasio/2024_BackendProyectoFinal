const passport = require('passport')
const jwt      = require('passport-jwt')
const { PRIVATE_KEY } = require('../utils/jwt.js')

const JWTStrategy = jwt.Strategy
const ExtractJWT     = jwt.ExtractJwt

const initializePassport = () => {

    const cookeExtractor = req => {
        let token = null
        if(req && req.cookies){
            token = req.cookies['token']
        }
        return token
    } 

    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookeExtractor]),
        secretOrKey: PRIVATE_KEY
    }, async (jwt_payload, done)=>{
        try {
            return done(null, jwt_payload)
        } catch (error) {
            return done(error)
        }
    }))

}

module.exports = {
    initializePassport
}