const element=[{"id":"check1","message":"hand sanitizers"},
{"id":"check2","message":"Staff with masks"},
{"id":"check3","message":"Social distancing"},
{"id":"check4","message":"Deep Cleaned Buses"},
{"id":"check5","message":"Mandatory mask"},
{"id":"check6","message":"Punctuality"},
{"id":"check7","message":"AC"},
{"id":"check8","message":"Rest stop hygiene"},
{"id":"check9","message":"Driving"},
{"id":"check10","message":"Other"},
]






function display(el){
    console.log(el);
    const items = document.querySelectorAll('.rating-item');
   
    const elClass = el.classList;

    if (!elClass.contains("active")) {
        items.forEach( 
        item => item.classList.remove("active")
        );
    console.log(elClass);
    el.classList.add("active");

}
document.getElementById("flex1-heading").innerHTML="We will work to improve it";
document.getElementById("comment").innerHTML="3-Okay";
console.log("true");

let content ="";
content+= '<div class="parameter-heading">What could have been better?</div>'
var Container = document.getElementById("onclickcontent");
for (let i = 0; i < element.length; i++)
{
content += '<input type="checkbox" id="'+element[i]["id"]+'"/><label for="'+element[i]["id"]+'"><div class="parameter">'+element[i]["message"]+'<img class="thumb-down" src="thumb-down.png"></div></label>'
}

content+='<div class= "parameter-heading">Tell us more</div><textarea type="text" class="text-box" value="" rows="10" cols="80"></textarea><div class="button"><button type="submit" class="bc" id="submit" onclick="toastmessage()">SUBMIT</button></div>'
Container.innerHTML = content;
};




function toastmessage(){
    var nodes = document.getElementById("rating-content").getElementsByTagName('*');
    console.log(nodes);
    for(var i = 0; i < nodes.length; i++){
        // nodes[i].disabled = true;
         nodes[i].classList.add("disabledbutton");
    }   
    var popup=document.getElementById("modalpopup");
    popup.style.opacity=1;

};