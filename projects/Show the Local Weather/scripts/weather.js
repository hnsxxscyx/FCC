$(function(){
	getweather('新乡','201607');
})
function getweather(site,monthtime){
	$.get('http://route.showapi.com/9-7',{
		showapi_appid:'25169',
		showapi_sign:'fcba44ae8316480d808e7dad16cdc49b',
		area:site,
		month:monthtime,
	},function(data) {
		/*optional stuff to do after success */
		$('#time').text('日期：'+data.showapi_res_body.list[0].time);
		$('#city').text('城市：'+data.showapi_res_body.area);
		$('#weather').text('天气：'+data.showapi_res_body.list[0].weather);
		$('#max').text('最高温度：'+data.showapi_res_body.list[0].max_temperature);
		$('#min').text('最低温度：'+data.showapi_res_body.list[0].min_temperature);
		$('#wind').text('风力：'+data.showapi_res_body.list[0].wind_power);
	});
}//易源数据的天气数据更新不及时
//codepen full页面居然不会刷新数据，不出字也是醉了