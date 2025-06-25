"use client"
import { useEffect, useState } from "react";

export default  function Question({params}){

const [data, setData] = useState({})
const [stats, setStats] = useState({correct: 0, false: 0})

const [answers, setAnswers] = useState([])
const [realAnswer, setRealAnswer] = useState("")
const [actual, setActual] = useState(0)
let test


useEffect(()=>{
    console.log("Kørt")
    async function name() {
     let param = await params
      console.log("hej")
       
const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${param?.id}&type=multiple`);
let newData =  await response.json()
setData(newData)
setAnswers([...newData?.results?.[actual]?.incorrect_answers,newData?.results?.[actual]?.correct_answer ])
setRealAnswer(newData?.results[actual]?.correct_answer)


    }
    name()

},[])
console.log(answers)


//her aver er en useEffect til hver gang actual ændrer sig 
useEffect(()=>{
    if(actual > 0 &&  actual < data?.results?.length -1 ){

    
setAnswers([...data?.results?.[actual]?.incorrect_answers,data?.results[actual]?.correct_answer ])
setRealAnswer(data?.results[actual]?.correct_answer)

}
}, [actual])




    return(
<main className="bg-[url('https://static.wixstatic.com/media/c23ee4_8eb76a5d097f4425b3801b5420707127~mv2.gif')] grid-cols-1 grid-rows-1 h-lvh  bg-[cover] px-[10vw] flex flex-col">
    <div className="h-1 bg-blue-500 mt-10"> <div id="progress" className="h-1 bg-amber-300 w-[0%]"></div></div>
        <article className=" bg-[rgb(255,255,255)] mt-10 p-10 ">
            <audio src="/set163.m4a" controls></audio>
        <h1 className="text-center">{data?.results?.[actual]?.question  }</h1>
        <div className="grid grid-rows-2 grid-cols-2 pt-16 gap-11">
         {answers?.map((element) =>{
            return <button value={element} onClick={(evt)=>{
                checkAnswer(evt)
            }} className="border-2 text-black duration-300 border-amber-300 hover:bg-red-500 hover:text-amber-50 " key={element}>{element}</button>
         })}
         </div>

        </article>
                 <div id="status" className="w-[90%] h-[100%] m-0 mx-auto bg-[cover] grid grid-cols-1 grid-rows-1 my-2">
                    <p className="place-self-center font-bold text-8xl text-center"></p>
                 </div>

        </main>
    )


    function checkAnswer(evt){
        const selecteval = evt.target.value
        console.log(evt.target.value)
        //her tjekker jeg om svar passer med correct answer
         const updateStat = stats
        if(selecteval == realAnswer){
           
          updateStat.correct++
          correct()
           
        
            
            

        }else{
            
            updateStat.false++
           wrong()
            
            
        
        }

        let newWidth = parseFloat(document.querySelector("#progress").style.width) +10 || 0 +10
            console.log(document.querySelector("#progress").style.width)
           document.querySelector("#progress").style.width = newWidth + "%"
        console.log(stats)
 setStats(updateStat)

 setActual(actual + 1)
 


 //her tjeker jeg for om spillet er slut
 if(actual == data?.results?.length -1 ){
    alert("rigtig: " +updateStat.correct + " false: "+ updateStat.false)
    done()
 }
        
    }


   function correct(){
        let gifs = ["https://i.pinimg.com/originals/4c/ea/03/4cea031fa751e7658f5e0355def16f29.gif", "https://images.steamusercontent.com/ugc/777280951081618781/EF93AA79B16C18A2A00CCFBDF212F3DE60065496/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", "https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyODQ1cG5iODBrdjkycDBjY2hja2hncm9hNWxlN25lNTFvOHRlYWd2YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/91o6Q8CZlGljO/source.gif"]
        let words = ["Tillyke", "Sådan mand", "Du kan jo godt", "Fortsæt!!"]
         document.querySelector("#status").style.backgroundImage = `url(${gifs[Math.floor(Math.random() * gifs.length)]})`
             document.querySelector("#status").style.backgroundPosition ="center"
             document.querySelector("#status p").textContent = words[Math.floor(Math.random() * words.length)]
              document.querySelector("#status p").style.color = "green"
        setTimeout(clean, 5000)

    }
    function wrong(){
        let gifs = ["https://www.gif-vif.com/gmedia/giphy/epic-fail.gif", "https://i.chzbgr.com/full/9281817344/h20249185/nope", "https://i.chzbgr.com/full/5530818560/hA1F25FC9/watch-me-fail-mommy", "https://media.tenor.com/vauuoXz1mgoAAAAM/epic-fail-falling.gif", "https://cdn.webfail.com/upl/img/921fc9fd031/post2.jpg"]
        let words = ["Hvordan fik du ikke den", "Næste gang....", "bro hvis du har fået forkert, har du ikke fortjent en opmuntring", "Ikke helt rigtigt", "Prøv igen", "Du skal bare lige igang"]
         document.querySelector("#status").style.backgroundImage = `url(${gifs[Math.floor(Math.random() * gifs.length)]})`
             document.querySelector("#status").style.backgroundPosition ="center"
             document.querySelector("#status p").textContent = words[Math.floor(Math.random() * words.length)]
              document.querySelector("#status p").style.color = "red"
        setTimeout(clean, 3500)

    }



    function clean(){
document.querySelector("#status").style.backgroundImage = ""
 document.querySelector("#status p").textContent = ""
    }
   



    //når spillet er slut

    function done(){

    }
  
}