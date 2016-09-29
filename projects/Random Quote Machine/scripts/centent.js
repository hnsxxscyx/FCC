//如何把内容链接到Twitter：https://twitter.com/intent/tweet?hashtags=TosMovie&text=
//短语内容库从哪里找
$(function(){
	getdata();
	$('#text').css('color','#16a085');
	$("#change").click(function(){
		getdata();
		var color = Colors(randomInt(0,12));
		$(".bccolor").css('backgroundColor',color);
		$('.color').css('color',color);
	});
	$('#qq').click(function(){
		$(this).attr('href', qzone($("p").text()));
	});
	$('#weibo').click(function(){
		$(this).attr('href', weibo($("p").text()));
	});
})

function randomInt(min,max){
	return Math.floor(Math.random() * (max - min) + min);
}

function getdata(){
	var i=randomInt(0,1280);
	var result ='324';
	$.get('http://route.showapi.com/341-1',{
		showapi_appid:'25090',
		showapi_sign:'f994313d02ef4feb8572b302bb037b9d',
		maxResult:'20',
		page:i.toString(),
	},function(data) {
		/*optional stuff to do after success */
		i=randomInt(0,20);
		result = data.showapi_res_body.contentlist[i].text;
		if(result.length<100){
			$('#text').html('<p>'+result+'</p>');
		}
		else{
			setTimeout(getdata(),1000);
		}
	});
}

function Colors(int){
	var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
	return colors[int];
}

function qzone(title){
	//title must string
	//QQ官方没有说明且各插件大多不能自定义图标,QQ空间分享必须有url，不然就是一片空白：http://www.jiathis.com/send/?webid=tsina&url=http://www.urlurl.com&title=自定义内容 
	var url = 'http://www.qiushibaike.com'
	return 'http://www.jiathis.com/send/?webid=qzone&url='+url+'&summary='+title+'&site='+title;
}

function weibo(title){
	//title must string
	return 'http://www.jiathis.com/send/?webid=tsina&url=http://www.urlurl.com&title='+title;
}




