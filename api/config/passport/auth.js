const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const bcrypt = require("bcrypt");

const User = require("../../models/Users");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.find({ email: email });

        if (!user) {
          return done(null, false, { message: "user not found" });
        }

        const validate = await bcrypt.compare(password, user[0].password);

        if (!validate) {
          return done(null, false, { message: "Wrong Password" });
        }

        return done(null, user, { message: "Login successfull" });
      } catch (error) {
        console.log(error);
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
    done(null, user._id || user)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => done(null, user))
})
