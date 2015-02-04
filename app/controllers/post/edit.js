import Ember from "ember";

export default Ember.ObjectController.extend({


  actions: {

    editPost: function () {
      var title = this.get('title');
      var body = this.get('body');
      if (body) {
      post.set('title', '');
      post.set('body', '')
      this.transitionTo('posts');
    }

  }
}

});
