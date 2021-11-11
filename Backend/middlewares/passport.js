const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
passport.use(new GoogleStrategy({
    clientID:     "136787475069-k8nuips5n9svi1uolkk2o6nq2uvmc2no.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));


passport.use(passport.initialize());
passport.use(passport.session());

passport.use(new JWTStrategy({ jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: process.env.JWTPRIVATEKEY },
 (payload, done) => {
    if (payload) {
        done(null, payload);
    } else done(null, false, { message: "Not found user." });
},
),
);