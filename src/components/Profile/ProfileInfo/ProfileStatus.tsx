import React from 'react';

type ProfileStatusPropsType = {
    status: string
}
type ProfileStatusStatePropsType = {
    editMode: boolean,
    title: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStatePropsType> {
    state: ProfileStatusStatePropsType = {
        editMode: true,
        title: 'Yo'
    }

    activateEditMode = () => {
        debugger
        console.log('this:', this)
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        autoFocus={true}
                        onBlur={this.deactivateEditMode.bind(this)}
                        value={this.props.status}/>
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;