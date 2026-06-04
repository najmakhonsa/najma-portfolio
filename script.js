const texts=['Information Systems Student','GIS Analyst','UI/UX Designer','Business Intelligence Enthusiast'];
let i=0,j=0,current='',typing=document.getElementById('typing');
function type(){
if(j<texts[i].length){current+=texts[i][j++];typing.textContent=current;}
else{setTimeout(()=>{current='';j=0;i=(i+1)%texts.length;typing.textContent='';},1500);}
}
setInterval(type,100);
