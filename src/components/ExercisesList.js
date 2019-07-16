import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = props => {
  const { username, description, duration, date, _id } = props.exercise;
  return (
    <tr>
      <td>{username}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + _id}>edit</Link> |{" "}
        <a
          href="/"
          onClick={() => {
            props.deleteExercise(_id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
};

class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {
      exercises: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/exercises/")
      .then(response => {
        this.setState({ exercises: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteExercise(id) {
    const { exercises } = this.state;
    axios.delete(`http://localhost:8000/exercises/${id}`).then(response => {
      console.log(response.data);
    });

    this.setState({
      exercises: exercises.filter(el => el._id !== id)
    });
  }

  exerciseList() {
    const { exercises } = this.state;
    return exercises.map(currentexercise => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ExercisesList;
