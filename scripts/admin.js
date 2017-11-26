function fill(){
	    $.post('http://localhost:4000/admin')
    .done(function (data)
    {
    	for(var i =0;i< Object.keys(data).length;i++)
    	{
    		console.log(data);
    		var div = "";
    		div += '<div class="individual-intern"> <div class = "container-fluid">';
    		div += '<header> <div class="work">'+data[i].headline+'</div>';
    		div += '<div class="hiring-company">Google</div> </header><div class="row"><div class="col-md-12">Location(s):<span class="location">';
            div +=  data[i].location+'</span></div></div><div class="row"><div class="col-md-4 col-sm-4 col-xs-4">';
            div += '                   <div class="title">';
            div += 'Start Date</div>';
        	div +=  '<div class="content">'+data[i].start+'</div>';
            div += '</div><div class="col-md-2 col-sm-2 col-xs-2"><div class="title">Duration</div>'
			div+='<div class="content">';
			div+=data[i].duration;
			div+='</div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="title">Stipend</div><div class="content">';
			div+=data[i].stipend;
			div+='</div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="title">Posted On</div><div class="content">';
			div+=data[i].Posted_on;
			div +='</div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="title">Apply By</div><div class="content">15 Dec</div>';
	        div +=  '</div></div></div><form action="/admin1" method = "post"><input type="hidden" name="form_id" value="'+data[i].form_id+'"/> <input type ="submit" value="Approve"/></div>';

        document.getElementById('list').innerHTML+=div;
    	}
    });
}