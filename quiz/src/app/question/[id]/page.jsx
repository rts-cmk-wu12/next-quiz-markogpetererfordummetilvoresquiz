export default async function Question() {
export default async function Question({params}){

let actual = 0;
const id = await params
const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${id?.id}&type=multiple`);

const data = await response.json()
console.log(data.results[actual])
const answers = [...data?.results[actual]?.incorrect_answers,data?.results[actual]?.correct_answer ]
console.log(answers)

    return (
        <main className="bg-[url('https://static.wixstatic.com/media/c23ee4_8eb76a5d097f4425b3801b5420707127~mv2.gif')] h-lvh  bg-[cover] px-[10vw] grid">
            <div className="h-1 bg-red-500 mt-10"> <div className="h-1 bg-amber-300"></div></div>
            <article className="justify-self-center bg-amber-50">
                <h1>Quiz navn</h1>
    return(
<main className="bg-[url('https://static.wixstatic.com/media/c23ee4_8eb76a5d097f4425b3801b5420707127~mv2.gif')] grid-cols-1 grid-rows-1 h-lvh  bg-[cover] px-[10vw] flex flex-col">
    <div className="h-1 bg-red-500 mt-10"> <div className="h-1 bg-amber-300"></div></div>
        <article className=" bg-amber-50 mt-10 p-10">
        <h1 className="text-center">{data.results[actual].question}</h1>
        <div className="grid grid-rows-2 grid-cols-2 pt-16 gap-11">
         {answers?.map((element) =>{
            return <button className="border-4 border-amber-300" key={element}>{element}</button>
         })}
         </div>

            </article>
        </main>
    )


}