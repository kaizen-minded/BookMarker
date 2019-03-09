import React from 'react';
import "./css/Comment.css"

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        }
        this.handleHover = this.handleHover.bind(this)
    }
    handleHover() {
        this.setState(prevState => {
            return {
                isHovered: !prevState.isHovered
            }
        });
    }
    render() {
        const date = new Date(this.props.date)
        const month = date.getMonth() + 1
        const day = date.getDate()
        const year = date.getFullYear()
        const deleteButton = this.state.isHovered ?
            <button className="btn" onClick={() => this.props.deleteComment(this.props.bookId, this.props.id)}>
                delete </button> : null
        return (
            <div key={this.props.index} className="comment-card" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                <h3>Page:{this.props.page}</h3>
                <h4>{`${month}/${day}/${year}`}</h4>
                <p>{this.props.note}</p>
                {deleteButton}
            </div>
        )
    }

}
export default Comment

