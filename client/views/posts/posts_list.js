var postsData = [
	{
		title: 'introducing Telescope',
		author: 'sacha giref',
		url: 'http://www.piac.co.uk' 
	},
	{
		title: 'this is going to plan',
		author: 'hugh hopkins',
		url: 'http://www.bbc.co.uk'
	},
	{
		title: 'no big mistake so far',
		author: 'tom bovey',
		url: 'http://www.apple.co.uk'
	}
];
Template.postsList.helpers({
	posts: postsData
});