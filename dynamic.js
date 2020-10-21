//xmlhttprequest(ajax call)
var getJson(file,callback)=>{
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=()=>{
		if (xhr.readyState===4&& xhr.status===200) {
			callback(xhr.responseText);
		}
	}
xhr.send();
}
getJson("./data.json",(text)=>{
	var d=JSON.parse(text);
	console.log(d);
	basics(d.details);
	friends_details(d.friends);

});



/*var getJson=(file)=>{
	return new promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if (response.ok) {
				resolve(response.json());
			}
			else{
				reject(new Error('Error'));
			}
		})
	})
} 


getJson("./data.json").then(d=>{
	console.log(d);
	friends_details(d.friends);
})*/

var main= document.querySelector(".main-div"); 

var basics=(s)=>{


var image=document.createElement("img");
image.src=s.image;
image.alt="raji image";
main.appendChild(image);

var n=document.createElement("h1");
n.textContent =s.name;
n.classList.add("my-name");
main.appendChild(n);


var n1=document.createElement("h1");
n1.textContent =s.email;
n1.classList.add("my-name");
main.appendChild(n1);


var n2=document.createElement("h1");
n2.textContent =s.mobile;
n2.classList.add("my-name");
main.appendChild(n2);

var d1=document.createElement("div");
main.appendChild(d1);
var h2=document.createElement("h1");
h2.responseText="hobbies of a person";
d1.appendChild(h2);
h2.appendChild(document.createElement("hr"));

var ul=document.createElement("ul");
for (var i=0;i<s.hobbies.length;i++){
	li.textContent=s.hobbies[i];
	ul.appendChild(li);
}


d1.appendChild(ul);
}


var friends_details=(t)=> {
	// body...

    var h=document.createElement("h1");
    h.textContent="friends details";
    main.appendChild(h);
    h.appendChild(document.createElement("hr"));





    var table=document.createElement("table");
    var row="";


       for(var i in t){

              row+="<tr><td>"+t[i].name+"</td><td>"+t[i].email+<"/td><td>"+t[i].ph+"</td></tr>"
       
       }

       table.innerHTML=row;
       main.appendChild(table);
}