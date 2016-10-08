import Ember from 'ember';

export function format(params/*, hash*/) {
  return moment(params[0]).format('DD-MM-YYYY');
}

export default Ember.Helper.helper(format);
