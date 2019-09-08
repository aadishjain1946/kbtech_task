const passport = require('passport');
const path = require('path')
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy({ passReqToCallback: true },
    (req, username, password, done) => {
        // console.log(username, password, req._toParam)
        const path = require('path');
        const userModel = require(path.join(__dirname, '../db/models/usermodel'));
        const jwt = require("./jwt");
        userModel.findOne({ "phnumber": username }, (err, doc) => {
            if (err) {
                throw err;
            }
            else {
                if (doc) {
                    if (password == doc.password) {
                        var token = jwt.generateToken(username);
                        done(null, token);
                    }
                    else {
                        done(null, false, { message: 'Password invalid' })
                    }
                }
                else {
                    userModel.create({ 'phnumber': username, 'password': password, 'category': req._toParam }, (err) => {
                        if (err) {
                            throw err;
                        }
                        else {
                            var token = jwt.generateToken(username);
                            done(null, token);
                            return true
                        }
                    })
                }
            }
        })
    }
));

passport.serializeUser((user, done) => {
    // console.log("####1", user)
    done(null, user);
})
passport.deserializeUser((user, done) => {
    const jwt = require("./jwt");
    // console.log("####", user)
    if (jwt.verifyToken(user)) {
        done(null, user);
    }
})
module.exports = passport;