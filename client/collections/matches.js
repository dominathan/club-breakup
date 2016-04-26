import Collection from 'ampersand-rest-collection';
import Match from '../models/match';

export default Collection.extend({
  url: '/api/targets',

  model: Match,


})
