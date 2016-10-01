
$(function(){
	$('button').click(function(event) {
		/* Act on the event */
		var value = $(this).val();
		boxValue(value);
	});
})
function boxValue(value){
	//按过button后的处理动作
	//先添加，后计算
	var strarr = ['ac','ce','=','ans']
	if (strarr.indexOf(value)==-1) {
		var detail = $('#box').val();
		detail = detail.split('');
		detail.push(value.toString());
		detail = detail.join('');
		$('#box').val(detail);
	}
	else{
		if(value == 'ac'){
			$('#box').val('');
		}
		if(value == 'ce'){
			var detail = $('#box').val();
			detail = detail.split('');
			detail.pop();
			detail = detail.join('');
			$('#box').val(detail);
		}
		if (value == '=') {
			$('#box').val(eval($('#box').val()));
		};
		if(value == '+'){

		}
	}
}
