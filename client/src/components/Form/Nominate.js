import React from "react";
import {Input} from "./Input";
import {FormBtn} from "./FormBtn";
import API from "../../utils/API";
import "./Nominate.css";


class Nominate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            g6Student: '',
            g7Student: '',
            teacher: '',
            grade: '',
            award: '',
        };
    }

    handleFormSubmit = (event, data) => {
        event.preventDefault();
        if (this.state.g6Student || this.state.teacher) {
            API.saveStudent({
                g6Student: this.state.g6Student,
                g7Student: this.state.g7Student,
                teacher: this.state.teacher,
                grade: this.state.grade,
                award: this.state.award
            })
                .then(res => this.loadStudents(), alert("You have nominated " + this.state.g6Student))
                .catch(err => console.log(err));
        }
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render(){
        return(
            <div className="card bg-dark" style={this.props.size}>
                <div className="bg-success text-white text-center card-header">
                {this.props.award}
                </div>
                    <div className="card-body">
                    
                        <form>
                            <Input
                                // testing {this.state.g6Student}
                                value={this.state.g6Student}
                                onChange={this.handleInputChange}
                                name="g6Student"
                                placeholder="Name (required)"
                            />
                            <Input
                                value={this.state.teacher}
                                onChange={this.handleInputChange}
                                name="teacher"
                                placeholder="Teacher (required)"
                            />
                            {/* <Input
                                value={this.state.award}
                                onChange={this.handleInputChange}
                                name="award"
                                placeholder="Award (Optional)"
                            /> */}
                            <div className="btn-div">
                            <FormBtn
                                disabled={!(this.state.teacher || this.state.g6Student)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Student
                            </FormBtn>
                            </div>
                        </form>
                    </div>
            </div>

        )
    }
}



export default Nominate;