import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('notebook', { user: params.user_id });
  },
  actions: {
    addNotebook: function() {
      var notebook = this.store.createRecord('notebook', {
        title: this.controller.get('title'),
        user: this.controllerFor('application').get('user')
      });
      notebook.save().then(() => {
        console.log('save successful');
        this.controller.set('title', null);
        this.refresh();
      }, function() {
        console.log('save failed');
      });
    }
  }
});
