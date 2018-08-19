// function Loadjson(file,callback){
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange =function(){
// 			if(xhr.readyState == "4" && xhr.status == "200"){
// 			callback(xhr.responseText);
		
// 		}
// 	};
// 	xhr.send(null);
// }
// Loadjson("data.json",function(text){
// 	var data =JSON.parse(text);

// 	console.log(data);
// 	basics(data.details);
// 	careerinfo(data.careerobjectives);
// 	qual(data.education);
// 	skillset(data.technicalskills);
// 	achiev(data.achievements);

// })
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}
var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
 	basics(data.details);
 	careerinfo(data.careerobjectives);
 	qual(data.education);
 	skillset(data.technicalskills);
 	achiev(data.achievements);
})
var left=document.querySelector(".left");
function basics(det){
	var img = document.createElement("img");
	img.src =det.Image;
	left.appendChild(img);
	var name1 = document.createElement("h3");
	name1.textContent = det.Name;
	left.appendChild(name1);
	var about = document.createElement("h3");
	about.textContent = det.contact;
	left.appendChild(about);
	var email = document.createElement("a");
	email.href = "mailto:meghanapotu153@gmail.com";
	email.textContent = det.Email;
	left.appendChild(email);
	var add = document.createElement("h3");
	add.textContent = "ADDRESS";
	left.appendChild(add);
	var hrline = document.createElement("hr");
	left.appendChild(hrline);
	var addre = document.createElement("h3");
	addre.textContent = det.ADDRESS;
	left.appendChild(addre);
}
var right=document.querySelector(".right");
function careerinfo(info){
	var qua = document.createElement("h2");
	qua.textContent = info.Info1;
	right.appendChild(qua);
	var qua1 = document.createElement("h3");
	qua1.textContent = info.qualification;
	right.appendChild(qua1);
	var hr2line = document.createElement("hr");
	right.appendChild(hr2line);
}
function qual(q){
	var add1 = document.createElement("h4");
	add1.textContent="Educational Qualification";
	right.appendChild(add1);
	var hr3line = document.createElement("hr");
	right.appendChild(hr3line);
	var table1 = document.createElement("table");
	table1.border="2";
	right.appendChild(table1);
	tabledata="";
	for(i=0;i<q.length;i++)
	{
		tabledata+="<tr><td>"+q[i].qualification+"</td><td>"+q[i].percent+"</td><td>"+q[i].institute+"</td><td>"+q[i].yearofpass+"</td></tr>";
	}
	table1.innerHTML = tabledata;
}
function skillset(skill){
	var tech = document.createElement("h4");
	tech.textContent="Technical skills";
	right.appendChild(tech);
	var hr4line = document.createElement("hr");
	right.appendChild(hr4line);
	for(i=0;i<skill.length;i++)
	{
		var s =document.createElement("h3");
		s.textContent = skill[i].title;
		right.appendChild(s);
		var ul = document.createElement("ul");
		var li = document.createElement("li");
		li.textContent = skill[i].info;
		ul.appendChild(li);
		right.appendChild(ul);
	}
}
function achiev(ac)
{
	var ar = document.createElement("h3");
	ar.textContent="Achievements";
	right.appendChild(ar);
	var hr5line = document.createElement("hr");
	right.appendChild(hr5line);
	for(i=0;i<ac.length;i++)
	{
		var d=document.createElement("ul");
		var l=document.createElement("li");
		l.textContent = ac[i].titles;
		d.appendChild(l);
		right.appendChild(d);
	}
}
function openpage(){
	window.open("resume.html","_self",true)
	
}