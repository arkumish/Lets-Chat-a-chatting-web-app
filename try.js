function checkpp(){
    
console.log("i a here");
if(document.getElementById("name23").value!=null)
{jk=0;document.getElementById("name23").disabled = false;}
else
{jk=1;document.getElementById("name23").disabled = true;}
gogo_kl();

}

function new_url(){
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?'+"chatroom="+document.getElementById('name1').value;
    window.history.pushState({path:newurl},'',newurl);
}

function gogo_kl(){
    console.log("klklk");
    console.log(window.location.href+"klklk");
    var hj="http://www.jquery4u.com?city=Gold Coast";
$.urlParam = function(name){
var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
if (results==null){
   return null;
}
else{
   return decodeURI(results[1]) || 0;
}
}

console.log($.urlParam('chatroom'));  
var xc=$.urlParam('chatroom');

//output: Gold%20Coast
if($.urlParam('chatroom')!=null){
alert("lets welcome you in " + decodeURIComponent($.urlParam('chatroom')) + " chat room" );
document.getElementById('name1').defaultValue=$.urlParam('chatroom');
loadMessages();
}

console.log(decodeURIComponent($.urlParam('chatroom')));
var zx=decodeURIComponent($.urlParam('chatroom')); 
if(zx!=null)
{console.log(xc+"ki am nowhrer here");}


}


function test1(sount){
    var m1=document.getElementById('name1').value;
    return firebase.database().ref('/'+m1+'/'+"countm").set({
        counter: sount
        
      }).catch(function(error) {
        console.error('Error writing new message to Firebase Database', error);
      });


      
      
    

}
