import React from 'react'

function About({nome}){
   
    console.log(nome)

    return(
        <div>
            <h1>About</h1>
           <h3>{nome}</h3> 
        </div>
    )

}

export default About;