

function init()
{
	console.log('pl');
	/*connection.query('SELECT * FROM form ',function(err,results,fields){
            console.log('hey there');
            console.log('results');
            if(err) throw err;
            result = parseIt(result);
            console.log(results);
        
    });*/
    $.post('http://localhost:4000/mem')
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
        div +=  '</div></div></div></div>';

        document.getElementById('list').innerHTML+=div;
    	}
    });


  /*  var div = "";//="<section id='sidebar'> ";
div+= "<div id='pj' class='details'>";

div+= "<p class='hospiname'>"+ place.hospiname +"</p>";
div+= "<a class='phone' href=tel:"+place.phone+">"+place.phone+"</a>";
div+= "<p><a class='website' href =http://"+place.website+">Website</a></p>";
div+= "<p class='distance'>"+ place.distance + " KM</p>";


div+="</div>";
//div+="</section>";
document.getElementById('sidebar').innerHTML+=div;
*/

}