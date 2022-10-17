import React, {Component} from "react"
 class  CourseForm extends Component{
    state = {
            name:" "   
    }
    handleChange = (e) => {
        this.setState({
            name : e.target.value
        })
        
    }
    handleSubmit =(e) => {
        e.preventDefault()
        this.props.AddCourse(this.state)
        this.setState({
            name: " "
        })
    }
    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <input type="text"  onChange={this.handleChange}  id="name" value={this.state.name}/>
            <button type="submit">Add Course</button>
        </form>
        )
    }    
 }
 export default CourseForm