function MoeNotification(undefined){
	var self = this;
	this.create = function(text,type,callback){
		_callback = callback || function(){};
		_text = text  || '喵~';
		var _type = type || 'success';
		$("#MoeNotification").append(
			$("<div>").addClass('MoeNotification-notice')
			          .addClass('MoeNotification-notice-' + _type)
			          .append('<span>' + _text + '</span>')
			          .fadeIn(300)
		);
		self.bind();
		self.clear();
		_callback($("#MoeNotification").find('.MoeNotification-notice').last());
	}
	this.clear = function(){
		if ($(".MoeNotification-notice").length>=10){
			//self.slideLeft($(".MoeNotification-notice").first());
			$("#MoeNotification").children().first().fadeOut(150,function(){
				$(this).remove();
			});
			setTimeout(self.clear,300);
		}
		else{
			return false;
		}
	}
	this.bind = function(){
		$(".MoeNotification-notice").mouseover(function(){
			self.slideLeft($(this));
		});
	}
	window.slideLeft = this.slideLeft = function(object,speed){
		object.css('position','relative');
		object.animate({
			left: "-200%",
		    },
			speed || 150, function() {
				$(this).fadeOut('fast',function(){
					$(this).remove();
				});
		});
	}
	this.init = function(){
		$("body").append('<div id="MoeNotification"></div>');
	}
	if (!$("#MoeNotification").length>0){
		this.init();
	}
}