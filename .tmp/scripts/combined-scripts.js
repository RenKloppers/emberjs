(function() {

var EmberDemo = window.EmberDemo = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

EmberDemo.ApplicationAdapter = DS.FixtureAdapter;


})();

(function() {

EmberDemo.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['red', 'yellow', 'blue', 'green'];
    }
});


})();

(function() {


EmberDemo.Router.map(function () {
    this.resource('tables'); // '/#/tables'
});


})();