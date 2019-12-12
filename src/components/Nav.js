import piggy from '../porco.png'
import React from 'react'

const Nav = () => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<br></br>

			<div>
				
				<button> Sort By Name </button> <br></br>
				<button> Sort By Weight </button>
			
			</div>
		</div>
	)
}

export default Nav
