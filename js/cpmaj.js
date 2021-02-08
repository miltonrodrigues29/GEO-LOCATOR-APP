var b=document.querySelector("button")



function xa()
{
	var inp=document.getElementById("txt")
console.log(inp.value)
var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/name/'+inp.value+'?fullText=true', true);

request.onload = function () {

  // Begin accessing JSON data here

  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    console.log(data[0].name+"    "+data[0].capital+"   "+data[0].latlng[0]+"   "+data[0].latlng[1]+"     "+data[0].currencies[0].code+"    "+data[0].population)

    var queryString = "?"+data[0].name +"&" + data[0].capital+"&"+data[0].population+"&"+data[0].currencies[0].code+"&"+data[0].languages[0].name+"&"+data[0].flag+"&"+data[0].latlng[0]+"&"+data[0].latlng[1];
window.location.href = "cpma2.html" + queryString;
  } else {
    alert("Country not found")
    $("#inrspan").removeClass("spinner-border spinner-border-sm")
b.disabled=false
  }
}
request.send();




}
$("button").on("click",function(){
  if($("input").val()!=""){
$("#inrspan").addClass("spinner-border spinner-border-sm")
b.setAttribute("disabled",true)
xa()
}
})



