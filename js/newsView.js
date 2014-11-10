(function(window, undefined){
	"use strict";
	
	var NewsView = Backbone.View.extend({
		tagname: "div",
		className: "news",
		initialize: function(opts) {
			this.options = _.extend(
				{},
				{
					$container: $('#feed')
				},
				opts
			);

			this.options.$container.append(this.el);

			this.render();
		},
		template: "<div class='row'><div class='large-10 columns'><a href='{link[0].$text}'><h4>{title.$text}</h4></a></div></div><hr/>",
		render: function(){
			this.el.innerHTML = _.template(this.template, this.options);
		}
	});

	var NewsClient = Backbone.Model.extend({
		// urlRoot: 'http://api.npr.org/query?&apiKey=MDExMDUwNjE5MDEzNjMzNzI4MzNkM2M2Zg001&format=json&',
		defaults: {
			title: 'News story',
			api_key: "MDExMDUwNjE5MDEzNjMzNzI4MzNkM2M2Zg001"
			// selection: function() {
			// 	var input = {};
			// 	var inputs = $(':input');

			// 	$(':input').each(function(element) {
			// 		input[this.name] = this.value;
			// 	});
				
			// 	// input[inputs.name] = input[inputs.value]
			// 	console.dir(input);
			// 	return input;
			// }
		},
		initialize: function(){
			// console.dir(selection);
			this.fetch().then(function(data){
				console.log(data);
				data.forEach(function(element){
					new NewsView(element);
				});
			});
			// this.on('change', function(model){
			// 	alert('something was changed');
			// });
		},
		urlRoot: function(){
			return [
				'http://api.npr.org/query?',
				'&apiKey=',
				this.api_key,
				'&format=json&'
				// selection.choice
			].join('');
		},
		validate: function(attrs, options){
			if (!attrs.title){
				return 'Your story must have a name!';
			}
		} 
		// setDone: function(){
		// 	this.set('isDone', true);
		// }
	});

	$("#submit").click(function(){
		var news = new NewsClient({id: makeSelection()});
	});

	// function NewsClient(options) {
	// 	this.options = _.extend({}, options, {
	// 		api_key: "MDExMDUwNjE5MDEzNjMzNzI4MzNkM2M2Zg001"
	// 	});

	// 	this.makeNewsRequest();
	// }

	var makeSelection = function() {
		// var input = {};
		// var inputs = $(':input');

		// $(':input').each(function(element) {
		// 	input[this.name] = this.value;
		// });
		
		// // input[inputs.name] = input[inputs.value]
		// console.dir(input);
		// return input;
		return $(':input').val();
	};

	// makeSelection();

	// NewsClient.prototype.queryAPI = function() {
			
	// 		var selection = this.makeSelection()

	// 		var newNews = new newsModel({id: selection.choice})
	// 		newNews.fetch().then(function(first, second, data){
	// 			console.log(data);
	// 			return data;
	// 		})1

	// 		// var url = [
	// 		// "http://api.npr.org/query?",
	// 		// selection.choice,
	// 		// "&apiKey=",
	// 		// this.options.api_key,
	// 		// "&format=json"
	// 		// ].join('');

	// 		// console.log(url);
	// 		// return $.getJSON(url).then(function(data){
	// 		// 	console.log(data.list.story);
	// 		// 	var show = data.list.story;
	// 		// 	// console.dir(show)
	// 		// 	show.forEach(function(element){ 
	// 		// 		console.log(element)
	// 		// 		console.log(element.title.$text);
	// 		// 	})
	// 		// 	return show;
	// 		// });
	// };

	// NewsClient.prototype.makeNewsRequest = function() {
	// 	var self = this;

	// 	$("#submit").click(function(){
	// 		$.when(
	// 			self.queryAPI()
	// 		).then(function(show){
	// 			console.log(show),
	// 			document.querySelector('#feed').innerHTML = "";
	// 			show.forEach(function(element){
	// 				new newsView(element);
	// 			})
	// 		})
	// 	})
	// }

	// NewsClient.prototype.Instigator = function(){
	// 	$("#submit").click(makeNewsRequest());
	// }

	window.NewsClient = NewsClient;
})(window, undefined);