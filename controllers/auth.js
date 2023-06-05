const passport = require("passport");
const users = require("../models/users");
const authService = require("../services/authService");

/**
 * Fetches the user info from GitHub and authenticates User
 *
 * @param req {Object} - Express request object
 * @param res {Object} - Express response object
 * @param next {Function} - Express middleware function
 */
const githubAuth = (req, res, next) => {
  let userData;
  const rdsUiUrl = new URL(config.get("services.rdsUi.baseUrl"));
  let authRedirectionUrl = /* 'http://8000-wygin-websitebackend-tqf7xjfehsf.ws-us98.gitpod.io/auth/github/callback' */ /* rdsUiUrl;*/  req.query.state ?? rdsUiUrl;
  console.log('github got authredirecturi: ', authRedirectionUrl)
  logger.error(req.query.state);

  try {
    return passport.authenticate("github", { session: false }, async (err, accessToken, user) => {
      if (err) {
        logger.error(err);
        console.log('auth error github:', '\ncurrent redirect uri\n', user, accessToken , '\ngot error\n', err)
        return res.boom.unauthorized("User cannot be authenticated");
      }

      userData = {
        github_id: user.username,
        github_display_name: user.displayName,
        tokens: {
          githubAccessToken: accessToken,
        },
      };

      const { userId, incompleteUserDetails } = await users.addOrUpdate(userData);

      const token = authService.generateAuthToken({ userId });

      // respond with a cookie
      res.cookie(config.get("userToken.cookieName"), token, {
        domain: rdsUiUrl.hostname,
        expires: new Date(Date.now() + config.get("userToken.ttl") * 1000),
        httpOnly: true,
        secure: true,
        sameSite: "lax",
      });

      if (incompleteUserDetails) authRedirectionUrl = 'http://8000-wygin-websitebackend-tqf7xjfehsf.ws-us98.gitpod.io/auth/github/login' // config.get("services.rdsUi.baseUrl"); // "https://my.realdevsquad.com/new-signup";
      console.log('github login above return', authRedirectionUrl)
      return res.redirect(authRedirectionUrl);
    })(req, res, next);
  } catch (err) {
    logger.error(err);
    console.log('github login catch error: ', err)
    return res.boom.unauthorized("User cannot be authenticated");
  }
};

const signout = (req, res) => {
  const cookieName = config.get("userToken.cookieName");
  const rdsUiUrl = new URL(config.get("services.rdsUi.baseUrl"));
  res.clearCookie(cookieName, {
    domain: rdsUiUrl.hostname,
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });
  return res.json({
    message: "Signout successful",
  });
};

module.exports = {
  githubAuth,
  signout,
};
