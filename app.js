const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('./utils/passport')
const path = require('path')
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-csrf-token");
    next();
});
app.use(session({
    secret: '24khbkhb6k24hjb626',
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.post('/adminlogin', (req, res,next) => {
    req._toParam = "a";
    passport.authenticate('local', function (err, user) {
        if (err) { return next(err) }
        if (!user) { return res.send('/unauthorized') }
        else { return res.send({ token: user }) }
    })(req, res, next);
})
app.post('/customerlogin', (req, res, next) => {
    req._toParam = "c";
    passport.authenticate('local', function (err, user) {
        if (err) { return next(err) }
        if (!user) { return res.send('/unauthorized') }
        else { return res.send({ token: user }) }
    })(req, res, next);
})
app.post('/deliverylogin', (req, res,next) => {
    req._toParam = "d";
    passport.authenticate('local', function (err, user) {
        if (err) { return next(err) }
        if (!user) { return res.send('/unauthorized') }
        else { return res.send({ token: user }) }
    })(req, res, next);
})
app.use(require(path.join(__dirname, 'utils/tokenmiddleware')))

app.use('/admin', require('./api/admin'));
app.use('/customer', require('./api/customer'));
app.use('/delivery', require('./api/deliveryboy'));


app.listen(process.env.PORT || 4560, (err) => {
    if (!err) {
        console.log("server started");
    }
    else {
        throw err;
    }
})