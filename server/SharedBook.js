Books = new Mongo.Collection("books");

if (Meteor.isServer) {
  Meteor.publish("borrowBooks", function () {
    return Books.find({owner:{$ne: Meteor.user().username}});
  });

  Meteor.publish("lendBooks", function () {
    return Books.find({});
  });
}
