import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    const changleHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) { // true to upload an image file
            setFile(selected);
            setError('');
        } else { // false, failed to select a correct image file
            setFile(null);
            setError('Please select an image file (png or jpeg).');
        }
    }
  return (
    <div>
        <form>
            <label 
            for="input-file" 
            id="drop-area"
            >
                <input 
                type="file" 
                id="input-file" 
                onChange={changleHandler}
                />
                <div id="img-upload">
                    <div className="text-area">
                        <p>Drag and drop or click here to upload image.</p>
                    </div>
                </div>
            </label>
            
            <div className="output">
                { error && <div className="error">{ error }</div>}
                { file && <div className="displayFile">{ file.name }</div>}
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    </div>
  )
}

export default UploadForm