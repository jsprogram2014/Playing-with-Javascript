(function(){
    var pElement=document.createElement("p");
    var text=document.createTextNode("I am creating HTML element using JS");
    pElement.appendChild(text);
    document.body.appendChild(pElement);        
})();