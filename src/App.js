import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import images from "./images.json";
import Footer from "./components/Footer";

class App extends Component {  
     //setting this.state.images to the images.json array
    constructor(props) {
    super(props);
    this.state = {
        images:images,
        topScore:0,
        currentScore:0
    };
    this.checkIfClicked = this.checkIfClicked.bind(this);
}
checkIfClicked(id)  {
    //variables
    let clickedCard = this.state.images.filter(card => card.id === id)[0];
    let imagesCopy = this.state.images.slice().sort(function(a, b){return 0.5 - Math.random()});
    //if card hasn't been clicked, set to true
    if(!clickedCard.clicked) {
        clickedCard.clicked = true;
        //shuffle the images
        imagesCopy[imagesCopy.findIndex((card) => card.id === id)] = clickedCard;
        this.setState({
            //set the new array
            images: imagesCopy,
            //change scores
            currentScore: this.state.currentScore + 1,
            topScore: (this.state.currentScore + 1 > this.state.topScore ? this.state.currentScore + 1 : this.state.topScore)
        });
    } else {
           //reset the game 
        let resetimagesCopy = imagesCopy.map((card) => {
            return {
                id:card.id,
                image:card.image,
                clicked: false,
            }
        });
        //reset the score
        this.setState({
            images:resetimagesCopy,
            currentScore: 0,
        });
    }
}
render() {
        return (
            <div className = "container">
                <Header currentScore = {this.state.currentScore} topScore={this.state.topScore}/>
            <Wrapper>
                    {this.state.images.map(card => (
                            <Card
                            //FINALLY FOUND OUT THERE WAS A TYPO IN THE LINE BELOW
                            //checkifClicked --> checkIfClicked WOWWWWWW
                            checkIfClicked={this.checkIfClicked}
                            id={card.id}
                            key={card.id}
                            image={card.image}
                            />
                ))}
            </Wrapper>
            <Footer />
            </div>
        );
    }
}
export default App;

