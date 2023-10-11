import React from 'react'
import AppContext from '../context/AppContext'
import { useContext } from 'react'

const CreateProjectModal = () => {
    const {setIsCreateProjectModalOpen} = useContext(AppContext);

    const handleCloseCreateProjectModal = () => {
        setIsCreateProjectModalOpen(false);
    }

    const handleCreateProject = () => {
        setIsCreateProjectModalOpen(false);
    }
  return (
    <div className='CreateProjectModal'>
        <div className="tile">
            <h2>Create Project</h2>
            <form className='create-project-form'>
                <div className="field">
                    <label>Project name</label>
                    <input type="text" className='project-name-inp'/>
                </div>
                <div className="field">
                    <label>Document name</label>
                    <input type="text" className='document-name-inp'/>
                </div>
                <div className="field">
                    <label>Members</label>
                    <input type="text" className='memebers-inp'/>
                    <button className="add-members-btn">
                        Add member
                    </button>
                </div>
                <div className="field-invite">
                    <div className='container'>
                        <label>Invite link</label>
                        <input type="text" className='invite-inp'/>
                    </div>
                    <button className="invite-btn">
                        Invite
                    </button>
                </div>
                <div className="buttons">
                    <button className='cancel-btn'
                        onClick={() => handleCloseCreateProjectModal()}
                    >
                        Cancel
                    </button>
                    <button className="save-btn"
                        onClick={() => handleCreateProject()}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreateProjectModal