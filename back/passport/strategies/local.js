const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Users = require("../../models/Users");
const { checkHashed } = require("../../lib/hashing");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const registeredUser = await Users.findOne({ username });

      if (!registeredUser || !checkHashed(password, registeredUser.password)) {
        return done(null, false, {
          message: "Los datos incluidos son incorrectos.",
        });
      } else {
        return done(null, registeredUser);
      }
    } catch (error) {
      done(error);
    }
  })
);
