
import { useEffect, useState } from "react";
import "./app.css"
import { ReactDOM } from "react";
import Task from "./taxt";
function App() {

    const questions = [{
      Questiontext : "what is the capital of France ? " ,
      AnswerOptions : [
        {answer : "ISLAMABAD" , iscorrect : false} ,
        {answer : "PARIS" , iscorrect : true} ,
        {answer : "DILHI" , iscorrect : false} ,
        {answer : "NEW YORK" , iscorrect : false} ,
      ],
    },

    {
      Questiontext : "what is iPhone compney name ?" ,
      AnswerOptions : [
        {answer : "intel" , iscorrect : false},
        {answer : "simsung" , iscorrect : false},
        {answer : "Apple" , iscorrect : true},
        {answer : "Dell" , iscorrect : false},
      ], 
    },

    {

        Questiontext : "who is famous cricketer ?" ,
        AnswerOptions : [
          {answer : "baber Azam" , iscorrect : false } ,
          {answer : "kholi" , iscorrect : false } ,
          {answer : "david warner" , iscorrect : false } ,
          {answer : "Shahid Afridi" , iscorrect : true } ,
        ],  
      },
      
      {
        Questiontext : "who is famous football Player ?" ,
        AnswerOptions : [
          {answer : "neymer" , iscorrect : false} ,
          {answer : "Ronaldo" , iscorrect : true} ,
          {answer : "Messi" , iscorrect : false} ,
          {answer : "Ronaldeno" , iscorrect : false} ,
        ] ,
      },

      {
       Questiontext : "What is Pakistan Famous for ?" ,
       AnswerOptions : [
        {answer : "CLOTHES" , iscorrect : false} ,
        {answer : "SPORTS" , iscorrect : false} ,
        {answer : "FOOD" , iscorrect : false} ,
        {answer : "TEA" , iscorrect : true} ,
       ]
      }
  ]

  const [Questionnumber , setQuestionnumber] = useState (0)
  const [showmarks , setshowmarks] = useState (false)
  const [marks , setmarks] = useState (0)


  function Optionbutton(iscorrect){

    if(iscorrect === true){
      setmarks(marks + 1)
    }

    const object = Questionnumber + 1
    if(object < questions.length){
      setQuestionnumber(object)
    } else{
      setshowmarks (true)
    }
  }

  function TryAgain(){
    setQuestionnumber(0);
    setmarks(0);
    setshowmarks (false);
  }

      

  return (
    <div className="App">
        {showmarks? (
          <div className="score" >YOU GOT {marks} OUT OF {questions.length} <br />
          <h3 className="h3Percentage" >({(marks/questions.length) * 100 }%)</h3>
          <button onClick={()=>TryAgain()} className="TRYAGAIN" >TRY AGAIN</button> </div>
        ) : (
      <div className="divcontainer">          
          <div className="questionnumber" >Question {Questionnumber + 1} / {questions.length}</div> <br />
        <div className="question">{questions[Questionnumber].Questiontext}</div>
        <div>{questions[Questionnumber].AnswerOptions.map((e)=>(
          <button className="Options" onClick={()=> Optionbutton(e.iscorrect)} >{e.answer}</button>
          )
        )}</div>
      </div>
          )}
    </div>
  );
  }

export default App;











// const questions = [{
//   Questiontext : "what is the captial of pakistan ? ", 
//   AnswerOptions : [
//     {answer : "islamabad" , iscorrect : true},
//     {answer : "paris" , iscorrect : false},
//     {answer : "delhi" , iscorrect : false},
//     {answer : "New york" , iscorrect : false},
//   ],
// },

//   {

//     Questiontext : "what is iPhone compney name ?" ,
//     AnswerOptions : [
//     {answer : "intel" , iscorrect : false},
//     {answer : "simsung" , iscorrect : false},
//     {answer : "Apple" , iscorrect : true},
//     {answer : "Dell" , iscorrect : false},
//   ],
// },
// {

//   Questiontext : "who is famous cricketer ?" ,
//   AnswerOptions : [
//     {answer : "baber Azam" , iscorrect : false } ,
//     {answer : "kholi" , iscorrect : false } ,
//     {answer : "david warner" , iscorrect : false } ,
//     {answer : "Shahid Afridi" , iscorrect : true } ,
//   ],  
// },

// {
//   Questiontext : "who is famous football Player ?" ,
//   AnswerOptions : [
//     {answer : "neymer" , iscorrect : false} ,
//     {answer : "Ronaldo" , iscorrect : true} ,
//     {answer : "Messi" , iscorrect : false} ,
//     {answer : "Ronaldeno" , iscorrect : false} ,
//   ] ,
// },

// ];

// const [Questionnumber , setQuestionnumber] = useState (0)
// const [showscore , setshowscore] = useState(false)
// const [score , setscore] = useState (0)
// function clickoption (iscorrect) {
 
//   if(iscorrect == true){
//     setscore(score + 1)
  
//   }
  
//   const nextQuestion = Questionnumber + 1
//   if(nextQuestion < questions.length){
//     setQuestionnumber (nextQuestion)

//   }else{
//     setshowscore(true)
//   }
// }




        //   {showscore?(
            
        //     <div className="score" >YOUR SCORE IS {score} OUT of {questions.length}</div>
        //     ):(
        //     <div className="divcontainer">

            
        //     <div> Question {Questionnumber + 1} / {questions.length}</div>
        //   <div className="questions" >{questions[Questionnumber].Questiontext}</div>
        //   <div>{questions[Questionnumber].AnswerOptions.map((e)=>(
        //     <button className="Options" onClick={()=>clickoption(e.iscorrect)} >{e.answer}</button>
        //   ))}</div>
        // </div>
        //   )}