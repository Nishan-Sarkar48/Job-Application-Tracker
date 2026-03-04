let InterviewList = [];
let RejectedList = [];
let currentStatus = "all-btn";

const TotalCount = document.getElementById('tCount');
const InterviewCount = document.getElementById('iCount');
const RejectedCount = document.getElementById('rCount');

const allcardssection = document.getElementById('allcards');
const filtersection = document.getElementById('filterSection');
const maincontainer = document.querySelector('main');

const allfilterbtn = document.getElementById('all-btn');
const interviewbtn = document.getElementById('interview-btn');
const rejectedbtn = document.getElementById('rejected-btn');


// ===== COUNT =====

function updateCount(){
            
    document.getElementById('tCount2').innerText =
allcardssection.children.length + " jobs";
          
    TotalCount.innerText = allcardssection.children.length;
    InterviewCount.innerText = InterviewList.length;
    RejectedCount.innerText = RejectedList.length;
}

updateCount();


// ===== FILTER STYLE =====

function toggleStyle(id){

    allfilterbtn.classList.remove('bg-blue-700','text-white');
    interviewbtn.classList.remove('bg-blue-700','text-white');
    rejectedbtn.classList.remove('bg-blue-700','text-white');

    allfilterbtn.classList.add('bg-gray-300','text-black');
    interviewbtn.classList.add('bg-gray-300','text-black');
    rejectedbtn.classList.add('bg-gray-300','text-black');

    const selected = document.getElementById(id);

    selected.classList.remove('bg-gray-300','text-black');
    selected.classList.add('bg-blue-700','text-white');

    currentStatus = id;

    if(id === 'interview-btn'){
        allcardssection.classList.add('hidden');
        filtersection.classList.remove('hidden');
        renderInterview();
    }
    else if(id === 'rejected-btn'){
        allcardssection.classList.add('hidden');
        filtersection.classList.remove('hidden');
        renderRejected();
    }
    else{
        allcardssection.classList.remove('hidden');
        filtersection.classList.add('hidden');
    }
}


// ===== EVENT DELEGATION =====


maincontainer.addEventListener('click', function(event){

    const interviewBtn = event.target.closest('.interview-btn2');
    const rejectedBtn = event.target.closest('.rejected-btn2');
    const deleteBtn = event.target.closest('.delete-btn');

    // INTERVIEW ACTION
    if(interviewBtn){

        const parent = interviewBtn.closest('.card');

        const jobname = parent.querySelector('.jobName').innerText;
        const PName = parent.querySelector('.PName').innerText;
        const notes = parent.querySelector('.notes').innerText;

        if(!InterviewList.find(item=>item.jobname===jobname)){
            InterviewList.push({
                jobname,
                PName,
                status:'Interview',
                notes
            });
        }

        RejectedList = RejectedList.filter(item=>item.jobname!==jobname);

        parent.querySelector('.light').innerText = 'Interview';

        updateCount();

        if(currentStatus === 'interview-btn') renderInterview();
    }


    // REJECT ACTION
    if(rejectedBtn){

        const parent = rejectedBtn.closest('.card');

        const jobname = parent.querySelector('.jobName').innerText;
        const PName = parent.querySelector('.PName').innerText;
        const notes = parent.querySelector('.notes').innerText;

        if(!RejectedList.find(item=>item.jobname===jobname)){
            RejectedList.push({
                jobname,
                PName,
                status:'Rejected',
                notes
            });
        }

        InterviewList = InterviewList.filter(item=>item.jobname!==jobname);

        parent.querySelector('.light').innerText = 'Rejected';

        updateCount();

        if(currentStatus === 'rejected-btn') renderRejected();
    }


    // DELETE ACTION
    if(deleteBtn){

        const parent = deleteBtn.closest('.card');
        const jobname = parent.querySelector('.jobName').innerText;

        InterviewList = InterviewList.filter(item=>item.jobname!==jobname);
        RejectedList = RejectedList.filter(item=>item.jobname!==jobname);

        parent.remove();

        updateCount();
    }

});


// ===== RENDER INTERVIEW =====

function renderInterview(){

filtersection.innerHTML='';

if(InterviewList.length===0){
return;
}

for(let interview of InterviewList){

let div=document.createElement('div');
div.className="flex justify-between border border-blue-800 p-4 card";

div.innerHTML=`
<div class="space-y-4">

<p class="jobName text-4xl">${interview.jobname}</p>
<p class="PName">${interview.PName}</p>

<p class="status">${interview.status}</p>

<p class="light inline-block bg-gray-300 px-3 py-1 rounded">
Interview
</p>

<p class="notes">${interview.notes}</p>

<div class="flex gap-5">
<button class="interview-btn2 bg-white px-4 py-2 border border-green-500 text-green-600">
Interview
</button>

<button class="rejected-btn2 bg-white px-4 py-2 border border-red-600 text-red-700">
Rejected
</button>
</div>

</div>

<div>
<button class="delete-btn bg-blue-300 px-4 py-2">Delete</button>
</div>
`;

filtersection.appendChild(div);
}
}
// ===== RENDER REJECTED =====

function renderRejected(){

filtersection.innerHTML='';

if(RejectedList.length===0){
return;
}

for(let rejected of RejectedList){

let div=document.createElement('div');
div.className="flex justify-between border border-blue-800 p-4 card";

div.innerHTML=`
<div class="space-y-4">

<p class="jobName text-4xl">${rejected.jobname}</p>
<p class="PName">${rejected.PName}</p>

<p class="status">${rejected.status}</p>

<p class="light inline-block bg-gray-300 px-3 py-1 rounded">
Rejected
</p>

<p class="notes">${rejected.notes}</p>

<div class="flex gap-5">
<button class="interview-btn2 bg-white px-4 py-2 border border-green-500 text-green-600">
Interview
</button>

<button class="rejected-btn2 bg-white px-4 py-2 border border-red-600 text-red-700">
Rejected
</button>
</div>

</div>

<div>
<button class="delete-btn bg-blue-300 px-4 py-2">Delete</button>
</div>
`;

filtersection.appendChild(div);
}
}



