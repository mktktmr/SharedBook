Books = new Mongo.Collection("books");

if (Meteor.isClient) {

  Meteor.subscribe('borrowBooks');
  Meteor.subscribe('lendBooks');

  Template.contentTabBorrow.helpers({
      borrowBooks: function () {
        return Books.find({owner:{$ne: Meteor.user().username}});
      }
  });

  Template.contentTabLend.helpers({
      lendBooks: function () {
        return Books.find({});
      }
  });

  Template.body.events({
    "click .menu .tab" : function(event) {
      var clickItem =  $(event.target);
      clickItem.siblings().removeClass('active'); 
      clickItem.addClass('active');
      
      if(clickItem.prop('id') == 'menu-tab-lend') {
        $('#contentTabBorrow').show();
        $('#contentTabLend').hide();
      } else if(clickItem.prop('id') == 'menu-tab-borrow') {
        $('#contentTabLend').show();
        $('#contentTabBorrow').hide();
      }
    }
  });

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  }); 
}
