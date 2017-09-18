const selectors = require("../constants").selectors;
const credentials = require("../credentials");

exports.login = function login() {
  this.evaluate(
    function(nameInputSelector, passwordInputSelector, creds) {
      document
        .querySelector(nameInputSelector)
        .setAttribute("value", creds.username);
      document
        .querySelector(passwordInputSelector)
        .setAttribute("value", creds.password);
    },
    selectors.loginNameInput,
    selectors.loginPasswordInput,
    credentials
  );
  this.then(function() {
    if (this.exists(selectors.loginButton)) {
      this.click(selectors.loginButton);
      this.waitWhileSelector(
        selectors.loginButton,
        function() {
          this.echo("Done logging in");
        },
        function() {
          this.echo(
            "Login timed out, make sure input credentials are valid."
          ).exit();
        }
      );
    } else {
      this.echo("Login button not found").exit();
    }
  });
};
