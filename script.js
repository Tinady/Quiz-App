const  quizData= [
    {
        question:"How old are you?",
        a:19,
        b:29,
        c:39,
        d:49,
         },
    
         {
            question:"What is your favourite color",
            a:'green',
            b:'blue',
            c:'yellow',
            d:'pink',
             },

       {
                question:"what is your name",
                 a:'Abebe',
                 b:'Kebede',
                 c:'Abebech',
                 d:'Kebedech',
             },
                
]

const questionEl= document.getElementById('question')
 const a_text= document.getElementById('a-text')
 const b_text=document.getElementById('b-text')
 const c_text=document.getElementById('c-text')
 const d_text=document.getElementById('d-text')
 const submitbtn=document.getElementById('submit')

let currentQuiz=0;


loadQuiz();

function loadQuiz(){

    const currentQuizData=  quizData[currentQuiz];
    questionEl.innerText= currentQuizData.question;
    a_text.innerText= currentQuizData.a;
    b_text.innerText= currentQuizData.b;
    c_text.innerText= currentQuizData.c;
    d_text.innerText= currentQuizData.d;




    
}

let answer;
let score=0;


function getSelected(){
    console.log('hi')
    const answersEl=document.querySelectorAll('.answer');

    answersEL.forEach((answersEL) =>{
      if(answersEL.checked){
        answer= answersEL.id;
        return answer;

      }

     
    });

    return undefined;


}

submitbtn.addEventListener("click", ()=>{

    
    const answer=getSelected();
    if(answer && answer===quizData(currentQuiz) )
    {
        currentQuiz++;
        

    }
    if(currentQuiz<=quizData.length)
    { loadQuiz();
    }
   else{
     alert('Done!!!')
  }

    getSelected()
    

   


});

