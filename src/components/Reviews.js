import React from 'react'

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showReviews: false
        }
        this.handleClick = this.handleClick.bind(this)
    };
    handleClick(e) {
        if(e.target){
            e.preventDefault();
            if(this.state.showReviews === false) {
                this.setState({
                    showReviews: true
                });
            }
            else {
                this.setState({
                    showReviews: false
                })
            }
            console.log(this.state.showReviews)
        }
    }
    
    
    
    render(){
        let reviews = this.props.productReviews;
        let reviewHTML = reviews.map((review)=>{
            return (
                <div> 
                    <h6>{review.description}</h6>
                    <h6>Rating: {review.rating}</h6>
                </div>
            )
        })
        let renderHTML = []
      
        if(this.state.showReviews === true){
            renderHTML = reviewHTML;
        }

        
     
        
        
        return (
            <div>
                <a onClick={this.handleClick}>Reviews : {reviews.length}</a>
                <div>{renderHTML}</div>
            </div>
        )
    }
}

export default Reviews;