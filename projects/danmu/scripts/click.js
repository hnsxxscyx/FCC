var i = 0;
$(function(){
	var ref = new Wilddog("https://danmu-my-first.wilddogio.com/");
	$("#go").click(function(){
		var txt = $("#txt").val();
		ref.child(i).set(txt);
		i++;
		$("#txt").val('');
	});
	$("#clean").click(function(){
		$("#wall p").remove();
	});
	$("#txt").keypress(function(e){
		if(e.which == 13){
			$("#go").trigger("click");
		}
	});//一度因为在html设置了表单而提交不灵
	ref.on("child_changed", function(datasnapshot) {    
	    objMove(createObj(datasnapshot.val()));   // 放置在click上会提交两次，本地一次云端一次
	}, function(error){
	    // 处理请求失败打错误
	});
})

function randomInt(min,max){
	return Math.floor(Math.random() * (max - min) + min);
}

function randomColor(){
	var color = "0123456789ABCDEF".split("");
	return "#"+color[randomInt(0,15)]+color[randomInt(0,15)]+color[randomInt(0,15)]+color[randomInt(0,15)]+color[randomInt(0,15)]+color[randomInt(0,15)];
}

function createObj(txt){
	var p = $("<p/>")
	$(p).css({
			fontSize: randomInt(1,3).toString()+'em',
			position: 'absolute',
			top: randomPlace(),
			right: '0px',//设为左并全长便会显示不全
			color: randomColor,
		})
		  .html(txt)
		  .appendTo("#wall");
	return $(p);
}

function objMove(obj){
	var wall_width = $("#wall").width();
	obj.animate({left:-wall_width},randomInt(10000,20000));
}

function randomPlace(){
	var wall_height = $("#wall").height();
	var bottom = randomInt(32,wall_height-40);
	return bottom;
}

//#wall设置成relative，p设置absolute就能实现边框外隐藏~why
//修改了弹幕从最右边依次流出的设定，防止了高度跳跃变化
//参照了https://codepen.io/fingerection/pen/aZOEGB和https://codepen.io/fingerection/pen/aZOEGB的代码设计，修改了弹幕速度，方式，和显示问题