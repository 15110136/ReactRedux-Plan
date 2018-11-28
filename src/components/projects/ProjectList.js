import React from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import { deleteProject } from "../../store/actions/projectAction";

class ProjectList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: ""
    }
  }
  handleDelete = (project) => {
    this.props.deleteProject(project.id);
  }

  render() {
    const { projects } = this.props;
    return (
      <div className="project-list section">
        {projects && projects.map(project => {
          return (
            <div className="card z-depth-0 project-summary" key={project.id}>
              <Link to={`/project/${project.id}`}>
                <ProjectSummary project={project} />
              </Link>
              <button className="btn-floating btn-large waves-effect waves-light red" onClick={() => this.handleDelete(project)}><i className="material-icons">DEL</i></button>
              <button className="right btn-floating btn-large waves-effect waves-light cyan" onClick={() => this.handleDelete(project)}><i className="material-icons">edit</i></button>
            </div>
          )
        })}
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteProject: (id) => dispatch(deleteProject(id))
  }
}
export default connect(null, mapDispatchToProps)(ProjectList);