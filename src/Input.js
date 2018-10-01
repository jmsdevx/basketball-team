import React, {Component} from 'react'
import Substitute from './Substitute'

class Input extends Component {

    constructor(){
        super()
        this.state = {
            input: '',
            players: [],
            bench: [],
            court: [],
        }
        this.addToBench=this.addToBench.bind(this)
        this.addToCourt=this.addToCourt.bind(this)
        this.addToPlayers=this.addToPlayers.bind(this)
        this.rmCourt=this.rmCourt.bind(this)
        this.rmBench=this.rmBench.bind(this)
        this.cutPlayer=this.cutPlayer.bind(this)
    }

    handleInput(value){
        this.setState({input: value})
    }

    addToPlayers(){
        this.setState({players: [...this.state.players, this.state.input]})
        this.setState({input: ''})
    }

    addToBench(i=0){
        let player = this.state.players.splice(i, 1)
        this.setState({bench: [...this.state.bench, player]})
    }

    addToCourt(i=0){
        let player = this.state.players.splice(i, 1)
        this.setState({court: [...this.state.court, player]})
    }

    rmCourt(i=0){
        let player = this.state.court.splice(i, 1)
        this.setState({players: [...this.state.players, player]})
    }

    rmBench(i=0){
        let player = this.state.bench.splice(i, 1)
        this.setState({players: [...this.state.players, player]})
    }

    cutPlayer(i=0){
        this.state.players.splice(i,1,)
        this.setState({players: [...this.state.players]})
        
    }

    render(){

        return(<div>
            <h1 id="Title">Create Your Squad</h1>
            <div className="inputHolder">
            <input type="text" placeholder="Who is on your team?" value={this.state.input} onChange={(event)=>this.handleInput(event.target.value)} />
            <button onClick={this.addToPlayers}>Add Player</button>
            </div>

            <Substitute myPlayers={this.state.players}
                        toBench={this.addToBench} 
                        toCourt={this.addToCourt} 
                        myBench={this.state.bench}
                        myCourt={this.state.court}
                        removeBench={this.rmBench}
                        removeCourt={this.rmCourt}
                        cut={this.cutPlayer}/>

            </div>
        )
    }
}

export default Input