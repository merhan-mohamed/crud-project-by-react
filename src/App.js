import React, {Component} from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";


class App extends Component {
  state = {
    courses : [
      {id:1, name:"Html"},
      {id:2, name:"CSS"},
      {id:3, name:"JS"}
    ]
  }

  AddCourse = (item) => {
    let courses = this.state.courses
    courses.length ? item.id = courses[courses.length -1].id+1 : item.id =1
    courses.push(item)
    this.setState({courses})
  }

  Delete = (id) => {
    let courses = this.state.courses
    courses.splice(id,1)
    this.setState({courses})
  }

  EditCourse = (index, value) => {
    let courses = this.state.courses
    let course = courses[index]
    course["name"] = value 
    this.setState({courses})


  }
  render(){
    const {courses} = this.state
    const courselist = courses.map((course, index) => {
      return <CourseList details={course} key={index} delete={this.Delete} index={index} EditCourse={this.EditCourse}/>
    })
    return(
      <section className="App">
      <h2>Add Course</h2>
      <ul>{courselist}</ul>
      <CourseForm AddCourse = {this.AddCourse}/>
      </section>
    )
  }
}

export default App;
