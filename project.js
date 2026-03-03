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

const maincontainer= document.querySelector('main');
const allfilterbtn=document.getElementById('all-btn');
const allinterview=document.getElementById('interview-btn');
const allrejected=document.getElementById('rejected-btn');

function toggleStyle(id){
 
 allfilterbtn.classList.remove('bg-black','text-white');
 allinterview.classList.remove('bg-black','text-white');
 allrejected.classList.remove('bg-black','text-white');

allfilterbtn.classList.add('bg-gray-300','text-black');
 allinterview.classList.add('bg-gray-300', 'text-black');
 allrejected.classList.add('bg-gray-300' , 'text-black');
//console.log(id);

 const selected =document.getElementById(id);
//console.log(selected);
// selected.classList.remove('bg-gray-300','text-black');
selected.classList.remove('bg-blue-700','bg-gray-300','bg-black','text-black');
selected.classList.add('bg-gray-300','text-white');
}
maincontainer.addEventListener('click', function (event)
{
    const parentnode=event.target.parentNode.parentNode ;
    const jobname=parentnode.querySelector('.jobName').innerText;
    
})

