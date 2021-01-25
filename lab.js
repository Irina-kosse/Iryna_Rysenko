var allTags; 
function createAllTags() { // Создание коллекции allTags 
var allTags=document.getElementsByTagName("*") ;
for (i=0,k=allTags.length;i<k;i++) 
allTags[i].setAttribute("data-i",i); 
}

function showAllTags() { // Вывод свойств всех элементов веб-страницы
for (i=0;i<allTags.length; i++) with (allTags[i]) { 
tags_+="\n" + allTags[i].getAttribute("data-i") + " " + tagName +" " + id; 
if (tagName ! ="HTML" && tagName != "BODY" && tagName != "HEAD") 
tags_+=" " + innerHTML;
} 
}

function changeCollection() { // Изменение размера символов элементов <p> веб-страницы
var tagsP=document.getElementsByTagName("P");
for(i=0;i<tagsP.length;i++) { 
var o=tagsP[i].style; 
var ed=o.fontSize.slice(o.fontSize.length-2); 
var size=parseFloat(o.fontSize); 
switch (ed) { 
case "mm": d=0.5;break; 
case "cm": d=0.05;break; 
case "px": d=3; 
} 
if(k==1) o.fontSize=size+d+ed; 
else if(k==2&& size>2*d) o.fontSize=size-d+ed; 
}
}

function changeTag() { // Изменение свойств элементов веб-страницы
this.className=dataTag[k]["class"]; 
this.innerHTML=dataTag[k]["text"]; 
}

function restoreTag() { //Восстановление свойств элементов Web-страницы
this.className=dataTag[0]["class"];
this.innerHTML=dataTag[0]["text"]; 
document.body.oncontextmenu=function() { return false; } 
}
function showHelp() { 
form.txt.rows=5; 
form.txt.cols=80; 
form.txt.value=help; 
} 

function showTagInf(e) { // Определение свойств отмеченного мышкой элемента веб-страницы
var o=e.target; 
dataEvent='ДАННЫЕ О СОБЫТИИ:'; 
dataEvent+= "<br>событие: "+ e.type + 
"<br>номер элемента: "+ o.getAttribute("data-i") + 
"<br>элемент: "+o.tagName + 
(e.relatedTarget ? "<br>связанный элемент: "+e.relatedTarget.tagName : "") + 
(o.style.marginLeft ? "<br> выравнивание: " +o.style.marginLeft : "") + 
(o.style.color ? "<br> цвет: " +o.style.color : "") + 
(o.style.fontSize ? "<br> размер: " +o.style.fontSize : "") + 
(o.style.fontStyle ? "<br> стиль: " +o.style.fontStyle : "") + 
(o.style.fontWeight ? "<br> жирность: " +o.style.fontWeight : "") + 
(o.style.backgroundColor ? "<br> цвет фона: " +o.style.backgroundColor : ""); 
} 