if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Introducing my attempt',
		author: 'the one and only',
		url: 'http://bbc.co.uk'
	});

	Posts.insert({
		title: 'the second title',
		author: 'Tom Hopkins',
		url: 'http://www.pirac.co.uk'
	});

	Posts.insert({
		title: 'last one',
		author: 'casio',
		url: 'https://news.ycombinator.com/'
	});
}