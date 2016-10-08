import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editTask: function (id) {
      var me = this,
        title = this.get('model.title'),
        date = this.get('model.date'),
        description = this.get('model.description');

      //Update task
      this.store.findRecord('task',id).then(function(task){
        task.set('title',title);
        task.set('date', new Date(date));
        task.set('description',description);

        task.save();

        me.transitionToRoute('tasks');
      });
    }
  }
});
