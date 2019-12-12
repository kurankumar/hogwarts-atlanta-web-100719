import React from 'react'

const HogCard = (props) => {

    const slug = props.hog.name.toLowerCase().split(" ").join("_")

    return(

    <div data-id={props.hog.id}>

        <img src={require(`../hog-imgs/${slug}.jpg`)} alt='' /> 

        <div>                
            Name: {props.hog.name} <br></br>                   
        </div> 

        <button type="button" name="Show info" onClick={props.handleShowInfo}> 
        Show Info 
        </button> 
        <br></br>


        {
        props.showInfo === true &&

        <div> 
        Specialty: {props.hog.specialty} <br></br>
          
        Weight: {props.hog.weight} <br></br>
        </div>  
        }   
        
        <br></br>
    </div>

    )
}

export default HogCard