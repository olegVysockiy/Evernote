const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: "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",
  callbackURL: "http://localhost:3001/google/callback"
},
  function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));
