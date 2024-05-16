import React from 'react';


function Card(){

    let data = [
        {
            name:"Mahiya Vee",
            description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        },
        {
            name:"Gumnaam",
            description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        },
        {
            name:"Jabra Fan",
            description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        }
    ];

    let handelDownload = () =>{
       alert("Hey");
    }
    return(
        <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 items-center justify-center">
            {data.map((elem , index)=>(
                <div key={index} className="w-70 song px-3 py-2 bg-zinc-100 rounded-md">
                <h3 className="font-semibold text-xl">{elem.name}</h3>
                <p className='text-xs font-medium mt-2'>{elem.description}</p>
                <button onClick={handelDownload} className="font-semibold bg-blue-500 text-xs text-zinc-100 rounded mt-2 px-2 py-1">Download Now</button>
            </div>
            ))}
        </div>
    )
}

export default Card;