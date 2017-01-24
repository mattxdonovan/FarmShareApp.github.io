import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


export const Farmers = new Mongo.Collection('farmers');
export const Users = new Mongo.Collection('user');
export const Products = new Mongo.Collection('products');
