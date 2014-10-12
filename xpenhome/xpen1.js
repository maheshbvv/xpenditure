if (Meteor.isClient) {

	Template.page3.events({
		'click #goback' : function(){
			$('#ytCarousel').carousel(1);
			

		}
	});

	


}

if (Meteor.isServer) {

}
