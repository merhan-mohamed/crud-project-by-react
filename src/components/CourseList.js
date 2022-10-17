import React, { Component, Fragment} from "react";
class CourseList extends Component {
    state = {
        isEdit: false
        }

        //render course
        renderCourse = () => {
        return(
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={() => this.Toggle()}>Edit Course</button>
                <button onClick={() => {this.props.delete(this.props.index)}}>Delete</button>
            </li>
        )
        }
        

        // Toggle
        Toggle = () => {
          let  {isEdit} = this.state
          this.setState({
            isEdit : !isEdit
          })
        }

        //renderEdit

        UpdateCourseItem = (e) => {
            e.preventDefault();
            this.props.EditCourse(this.props.index,this.input.value)
            this.Toggle()
        }

        //Update
        UpdateForm = () => {
            return(
            <form onSubmit={this.UpdateCourseItem}>
                <input type="text" defaultValue={this.props.details.name} ref={(v)=>{this.input = v}}/>
                <button>Update Course</button>
            </form>
            )
        }

        render(){
            let {isEdit} = this.state
            return(
                <Fragment>
                    {isEdit ? this.UpdateForm() : this.renderCourse()}
                </Fragment>
            )
        }
}

export default CourseList
