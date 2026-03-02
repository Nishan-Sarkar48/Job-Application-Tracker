let TotalCount=document.getElementById('tCount');
let InterviewCount=document.getElementById('iCount');
let RejectedCount=document.getElementById('rCount')

let InterviewList=[];
let RejectedList=[];
const allcardssection = document.getElementById('allcards');
//console.log(allcardssection.children.length);

function tOtalCount()
{
    TotalCount.innerText=allcardssection.children.length;
    InterviewList.innerText=document.getElementById('iCount');
    RejectedList.innerText=document.getElementById('rCount');


}
tOtalCount() ;