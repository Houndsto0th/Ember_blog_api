import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("posts", { path: '/' }, function () {
    this.route("new", { path: 'new' });
    this.resource('post', { path: '/:post_id' }, function () {
      this.route('edit', { path: 'edit' });
    });
  });
});

export default Router;
