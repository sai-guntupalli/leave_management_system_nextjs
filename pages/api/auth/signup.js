import auth0 from "../../../lib/auth0";

export default async function signup(req, res) {
  try {
    console.log("inside signup page");
    await auth0.handleLogin(req, res, {
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
