function add(){
//	var email = $('#email').val();
//	$("#list").empty();
//	$('#list').append("<option value='" + email + "@qq.com'>" +
//		"<option value='" + email + "@126.com'>" +
//		"<option value='" + email + "@yahoo.com.cn'>" +
//		"<option value='" + email + "@163.com'>" +
//		"<option value='" + email + "@gmail.com'>");
		

	var p = document.getElementsByTagName('p');
	var email = document.getElementById('email');
	for(var i = 0;i<p.length;i++)
	{
		p[i].innerHTML = email.value;
	}

}
