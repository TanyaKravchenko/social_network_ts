import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}
type ProfileStatusStatePropsType = {
    editMode: boolean,
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStatePropsType> {
    state: ProfileStatusStatePropsType = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        console.log('this:', this)
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.activateEditMode}>{this.props.status || '----'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}/>
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;