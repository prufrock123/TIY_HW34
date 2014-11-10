	var NewsView = Backbone.View.extend({
	    tagname: "div",
	    className: "news",
	    initialize: function(opts) {
	        this.options = _.extend({}, {
	                $container: $('#feed')
	            },
	            opts
	        );
	        this.options.$container.append(this.el);
	        this.render();
	    },
	    template: "<div class='row'><div class='large-10 columns'><a href='{link[0].$text}'><h4>{title.$text}</h4></a></div></div><hr/>",
	    render: function() {
	        this.el.innerHTML = _.template(this.template, this.options);
	    }
	});

	var NewsClient = Backbone.Model.extend({
	    defaults: {
	        api_key: "MDExMDUwNjE5MDEzNjMzNzI4MzNkM2M2Zg001"
	    },
	    initialize: function() {
	        this.fetch().then(function(data) {
	            console.log(data);
	            var sortedData = data.list.story
	            sortedData.forEach(function(element) {
	                new NewsView(element);
	            });
	        });
	    },
	    urlRoot: function() {
	        return [
	            'http://api.npr.org/query?',
	            '&apiKey=',
	            this.get('api_key'),
	            '&format=json&'
	        ].join('');
	    }
	});

	$("#submit").on('click', function() {
	    var news = new NewsClient({
	        id: makeSelection()
	    });
	});

	var makeSelection = function() {
	    return $(':input').val();
	};
