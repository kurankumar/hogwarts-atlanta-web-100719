import React from 'react'
import HogCard from './HogCard'

class HogCardContainer extends React.Component{
    
    render(){
        return(

            <div>
                {this.props.hogs.map((hog) => <HogCard hog={hog}  key={hog.id} handleShowInfo={this.props.handleShowInfo} showInfo={this.props.showInfo}/>)}
            </div>

        )
    }
}

export default HogCardContainer