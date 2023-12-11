import React, { useContext, useState } from 'react'
import githubContext from '../../context/github/githubContext';
import alertContext from '../../context/alert/AlertContext';

const Search = () => {

    const githubCon = useContext(githubContext);
    const alertCon = useContext(alertContext);

    const [text, setText] = useState('');
    
    const onSubmit = e => {
        e.preventDefault();
        if(text === '') {
           alertCon.setAlert('Please enter something', 'light');
        }else {
            githubCon.searchUsers(text);
            setText('');
        }
    }
    
    const onChange = e => setText(e.target.value);
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type='text'
                    name='text' 
                    placeholder='Search Users...'
                    value={text}
                    onChange={onChange}
                />

                <input
                    type='submit'
                    value='Search'
                    className='btn btn-dark btn-block'
                />

                {
                    githubCon.users.length > 0 && <button 
                    className='btn btn-light btn-block'
                    onClick={githubCon.clearUsers}
                    >
                        Clear
                    </button>
                }
                
            </form>
        </div>
    )
}

export default Search;