window.onerror=function (msg,url,line,colemn) { 
  alert('��������������� JavaScript ���������� ������:\n'+
      '�������: '+msg+'\n'+           //,colemn
      '����: '+url+'\n'+
      '������ ����: '+line+'\n'+
      '����� �������: '+colemn) ;
  }
 
  if('onhelp' in window) {
     window.onhelp=function(){ help(); return false; }
  }
  else document.onkeydown=function(e){ 
    if(e.which==112){ help(); return false;}
  }

var allTags;
function createAllTags() { // �������� ��������� allTags, ���������� ��� �������� Web-��������
  allTags=document.getElementsByTagName("*");
  for (i=0, l=allTags.length; i<l; i++)  
  allTags[i].setAttribute("data-i",i); 
}    

  function showAllTags() { // ����� ������� ���� ��������� ���-��������
      for (i=0;i<allTags.length; i++) { 
      var o=allTags[i];
      tags_+= "\n" +o.getAttribute('data-i') + " "+ o.tagName + " " + o.id;  
      if (o.tagName !="BODY" && o.tagName !="HTML" && o.tagName !="HEAD")
      tags_+=" "+o.innerHTML;       
      }
  } 

                          
  function changeTag() { // ��������� ������� �������� Web-��������
    this.className=dataTag[k]["class"]; 
    this.innerHTML=dataTag[k]["text"]; 
  }

  function restoreTag() { // �������������� ������� �������� Web-��������
     this.className=dataTag[0]["class"];
     this.innerHTML=dataTag[0]["text"];  
     document.body.oncontextmenu=function() {return false;} 
  }

function showTagInf(e) { // ����������� ������� ����������� ������ �������� ���-��������
  var o=e.target;
  dataEvent='������ � �������:';
  dataEvent+= "<br>�������: "+ e.type + "<br>����� ��������: " + o.getAttribute("data-i") +
    "<br>�������: "+o.tagName +        
    (e.relatedTarget ? "<br>��������� �������: "+e.relatedTarget.tagName : "") +
    (o.style.marginLeft ? "<br> ������������: " +o.style.marginLeft : "") +
    (o.style.color ? "<br> ����: " +o.style.color : "") +
    (o.style.fontSize ? "<br> ������: " +o.style.fontSize : "") +
    (o.style.fontStyle ? "<br> �����: " +o.style.fontStyle : "") +
    (o.style.fontWeight ? "<br> ��������: " +o.style.fontWeight : "") +
    (o.style.backgroundColor ? "<br> ���� ����: " +o.style.backgroundColor : "");
}

function changeCollection() { // ��������� ������� �������� ���� ��������� <P> ���-��������
    var tagsP=document.getElementsByTagName('P');
    for(i=0;i<tagsP.length;i++) { 
      var o=tagsP[i].style;              
      var ed=o.fontSize.slice(o.fontSize.length-2); 
      var size=parseFloat(o.fontSize);
      switch (ed) {
        case "mm": d=0.5; break;
        case "cm": d=0.05; break;
        case "px": d=3;
      }
      if(k==1) o.fontSize=size+d+ed;
      else if(k==2&&size>2*d) o.fontSize=size-d+ed;
    }
}


