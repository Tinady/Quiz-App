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
