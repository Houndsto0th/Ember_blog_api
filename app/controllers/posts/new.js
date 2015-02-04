import Ember from "ember";

export default Ember.ArrayController.extend({


  actions: {

    makeNewPost: function () {
      var title = this.get('postTitle');
      var body = this.get('postBody');
      var post = this.store.createRecord('post', { title: title, body: body });
      if (body) {
      this.set('postBody', '');
      this.set('postTitle', '')
      post.save();
      this.transitionTo('posts');
      }
    }

  }

});
