MovieSearch = new Mongo.Collection("moviesearch");
TVSearch = new Mongo.Collection("tvsearch");

Meteor.subscribe('movies');
Meteor.subscribe('tv');
Meteor.subscribe('cpapi');

Session.set('searchType', '');

$("#showmodal").on("click", function() {
    $('#myModal').modal('show');
    return false;
});

Router.configure({
  notFoundTemplate: "NotFound"
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/couchpotato', function () {
  this.render('couchpotato');
});

Router.route('/plex', function () {
  this.render('plex');
});

Template.body.helpers({
    url: function () {
    return Meteor.absoluteUrl();
    }
});

Houston.menu({
  'type': 'link',
  'use': Meteor.absoluteUrl() + 'plex',
  'title': 'Plex Auth Setup',
  'target': '_blank'
});

Houston.menu({
  'type': 'link',
  'use': Meteor.absoluteUrl() + 'couchpotato',
  'title': 'CouchPotato Status',
  'target': '_blank'
});

Houston.menu({
  'type': 'link',
  'use': 'http://plexrequests.8bits.ca',
  'title': 'Plex Requests Info',
  'target': '_blank'
});