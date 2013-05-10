Meteor.Router.add({
	'/': 'postsList',
	'/pots/:-od': {
		to: 'postPage',
		and: function(id) { Session.set('currentPostId', id); }
	}
});