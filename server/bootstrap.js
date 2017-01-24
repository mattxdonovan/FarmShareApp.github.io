import Moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { Users, Products } from '../lib/collections';


  Meteor.startup(function() {
//     if (Products.find().count() !== 0) return;
//
//     Products.remove({});
//
//
//      const products = [
//        {
//          product: 'orange',
//          description:'A round orange fruit',
//          price:'$2.00',
//          timestamp: Moment().subtract(1, 'hours').toDate()
//        },
//        {
//          product: 'meat',
//          description:'dead stuff',
//          price:'$3.00/lb',
//          timestamp: Moment().subtract(2, 'hours').toDate()
//        },
//      ];
//
//      products.forEach((prod) => {
//        Products.insert(prod);
//      });
//
//
//
//
//      const farmers = [
//     {
//       farmName:'Goats and More',
//       location:'Denver',
//       phoneNumber:'3038675309',
//       about:'Apples',
//       user_id:'',
//       imageUrl:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR7lQ4h5J0NI_11yS9hGonV93fu7ktvNP6KPKXATBP_bx5XjNjOo3dG9G94',
//       timestamp: Moment().subtract(1, 'hours').toDate()
//     },
//     {
//       farmName:'Goats and More',
//       location:'Denver',
//       phoneNumber:'3038675309',
//       about:'Apples',
//       user_id:'',
//       imageUrl:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR7lQ4h5J0NI_11yS9hGonV93fu7ktvNP6KPKXATBP_bx5XjNjOo3dG9G94',
//       timestamp: Moment().subtract(1, 'hours').toDate()
//     },
// ];
//
// farmers.forEach((farmr) => {
//   Farmers.insert(farmr);
// });
});
