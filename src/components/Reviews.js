import React from 'react'

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: this.props.product.reviews
        }
        
    };
    
    render(){
    let reviews = this.state.reviews
    
   
   

    console.log("Reviews: " + reviews)

        return (

            <h1>Reviews : {reviews.length}</h1>

        )
    }
}

export default Reviews;