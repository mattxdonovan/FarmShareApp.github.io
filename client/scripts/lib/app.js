import 'angular-animate';
import 'angular-meteor';
import 'angular-meteor-auth';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';

// Modules
import farmer from '../controllers/signup.controller';
import product from '../controllers/product.controller';
import productinput from '../controllers/productinput.controller';
import faq from '../controllers/faq.controller';
import result from '../controllers/result.controller';
import productspg from '../controllers/products.controller';
import RoutesConfig from '../routes';
const App = 'Farmshare';

// App
Angular.module(App, [
  'angular-meteor',
  'accounts.ui',
  'ionic'
])

new Loader(App)
  .load(farmer)
  .load(product)
  .load(productinput)
  .load(faq)
  .load(result)
  .load(productspg)
  .load(RoutesConfig);

// Startup
if (Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
}
else {
  Angular.element(document).ready(onReady);
}

function onReady() {
  Angular.bootstrap(document, [App]);
}
