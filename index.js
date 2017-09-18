const casper = require("casper").create({
  httpStatusHandlers: {
    "404": function(resource) {
      this.echo("404 Error: ");
      this.echo(resource);
      this.exit();
    },
    "500": function(resource) {
      this.echo("500 Error: ");
      this.echo(resource);
      this.exit();
    }
  }
});
const steps = require("./steps/index");
const utils = require("utils");
const constants = require("constants");
const selectors = constants.selectors;
const searchTerm = casper.cli.get("search");

casper.start(constants.moongateUrl);

casper.then(steps.login);
casper.then(function() {
  if (searchTerm) {
    this.fill(
      selectors.searchForm,
      {
        kw: searchTerm
      },
      true
    );
  } else {
    this.echo("No search term found").exit();
  }
});
casper.then(function() {
  this.captureSelector("results.png", selectors.searchResultsList);
});
// starts headless browser
casper.run(function() {
  this.echo("Completed.");
  this.exit();
});
