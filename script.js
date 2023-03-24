const  quizData= [
    {
        question:"How old are you?",
        a:19,
        b:29,
        c:39,
        d:49,
        correct:'b',
         },
    
         {
            question:"What is your favourite color",
            a:'green',
            b:'blue',
            c:'yellow',
            d:'pink',
            correct:'b',
             },

       {
                question:"what is your name",
                 a:'Abebe',
                 b:'Kebede',
                 c:'Abebech',
                 d:'Kebedech',
                 correct:'b',
             },
                
]
const answersEl=document.querySelectorAll('.answer');
const quizEl=document.getElementById('quiz')
const questionEl= document.getElementById('question')
 const a_text= document.getElementById('a-text')
 const b_text=document.getElementById('b-text')
 const c_text=document.getElementById('c-text')
 const d_text=document.getElementById('d-text')
 const submitbtn=document.getElementById('submit')

let currentQuiz=0;


loadQuiz();

function loadQuiz(){

    deselectAnswer()
{

    const currentQuizData=  quizData[currentQuiz];
    questionEl.innerText= currentQuizData.question;
    a_text.innerText= currentQuizData.a;
    b_text.innerText= currentQuizData.b;
    c_text.innerText= currentQuizData.c;
    d_text.innerText= currentQuizData.d;




    
}
}


let score=0;


function getSelected(){
   
    
    let answer=undefined;

    answersEl.forEach((answersEL) =>{
      if(answersEL.checked){
        answer= answersEL.id;
       

      }

     
    });

    return answer;


}

function deselectAnswer()
{
    
    answersEl.forEach((answersEL) =>{
        answersEL.checked=false;
    }) 
}

submitbtn.addEventListener("click", ()=>{

    
    const answer=getSelected();
    console.log(answer)
     

    if(answer)
    {
        if(answer===quizData[currentQuiz].correct)
        {
          score++;
        } 

        currentQuiz++;
        if(currentQuiz<quizData.length)

        {
           
             loadQuiz();
        }
       else{
        quizEl.innerHTML =
         `<h1>you answered  ${score} / ${quizData.length}.</h1>
         <button onclick="location.reload()">Reload <button>`;
      }
    

    }
  


    

   


});

