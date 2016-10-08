import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTask: function () {
      var title = this.get('title'),
        date = this.get('date'),
        description = this.get('description');

      //Create task
      var newTask = this.store.createRecord('task',{
        title : title,
        date: new Date(date),
        description: description
      });

      newTask.save();

      this.setProperties({
        title:'',
        date:'',
        description:''
      });
    }
  }
});
