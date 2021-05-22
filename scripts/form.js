function subForm(e){
	e.preventDefault();
	$.ajax({
    	url:"https://api.apispreadsheets.com/data/4456/",
		type:"post",
		data: $(e.target).serializeArray(),
			    success: function(){
                    document.getElementById("submitBtn").style.display = "none";
                    document.getElementById("responseMsg").style.display = "block";
                    document.getElementById("connectForm").style.display = "none";
				},
				error: function(){
					alert("There was an error :(")
				}
	});
}