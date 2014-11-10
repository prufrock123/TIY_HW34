// var newsModel = Backbone.Model.extend({
// 	urlRoot: 'http://api.npr.org/query?&apiKey=MDExMDUwNjE5MDEzNjMzNzI4MzNkM2M2Zg001&format=json&'
// 	initialize: function(){
// 		this.on('change', function(model){
// 			alert('something was changed');
// 		});
// 		this.on('change:title', function(model){
// 			alert('title was changed');
// 		});
// 	},
// 	defaults: {
// 		title: 'News story',

// 	},
// 	validate: function(attrs, options){
// 		if (!attrs.title){
// 			return 'Your story must have a name!';
// 		}
// 	},
// 	setDone: function(){
// 		this.set('isDone', true);
// 	}
// });

// var newNews = new newsModel({id=1006})
// newNews.fetch().then(function(){
	
// })
