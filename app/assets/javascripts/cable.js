// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);
$(document).ready(function(){
    $('.parallax').parallax();
  });

$(document).ready(function(){
   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
   $('.modal').modal();
 });


 $('.fixed-action-btn').openFAB();
 $('.fixed-action-btn').closeFAB();
 $('.fixed-action-btn.toolbar').openToolbar();
 $('.fixed-action-btn.toolbar').closeToolbar();

 $(document).ready(function(){
     $('.collapsible').collapsible();
   });
         
