import React, {Component} from 'react'

class Substitute extends Component {

    displayPlayer(){
        let showPlayers = this.props.myPlayers.map((e,i)=>{
            return <h4 key={i}>{e}
              <button id="start" onClick={this.props.toCourt}>Start</button> 
              <button id="sit" onClick={this.props.toBench}>Sit</button> 
              <button id="cut" onClick={this.props.cut}>Cut</button></h4>
        })
        return showPlayers
    }

    displayCourt(){
        let courtPlayers = this.props.myCourt.map((e, i)=>{
            return <h4 key={i}>{e}
            <button onClick={this.props.removeCourt}>Remove</button></h4>
        })
        return courtPlayers
    }

    displayBench(){
        let benchPlayers = this.props.myBench.map((e, i)=>{
            return <h4 key={i}>{e}
            <button onClick={this.props.removeBench}>Remove</button></h4>
        })
        return benchPlayers
    }

    addToCourt(){
        this.props.toCourt()
    }

    addToBench(){
        this.props.toBench()
    }

    cutPlayer(){
        this.props.cutPlayer()
    }

    render() {

        return(<div>

            <div className="displaybox" id="Players"><h1>Players:</h1>
            {this.displayPlayer()}</div>

            <div className="displaybox" id="Court"><h2>Starters:</h2>
            {this.displayCourt()}</div>

            <div className="displaybox" id="Bench"><h2>Bench:</h2>
            {this.displayBench()}</div>

        </div>
        )
         
    }
}

export default Substitute