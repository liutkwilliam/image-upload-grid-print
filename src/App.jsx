import "./App.scss";
import { useState, useEffect, useRef } from "react";
import imageHolder from './image-holder.png';
import Title from "./components/Title";
import TextContent from "./components/TextContent";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,
//   list,
// } from "firebase/storage";
// import { storage } from "./firebase";
// import { v4 } from "uuid";

const App = () => {
   // defind variatbles
  // const [fileName, setFileName] = useState(''); // set file name, for uploading
  const inputFileRef = useRef(null); // insert file
  const paperRef = useRef(null); // paper
  const [layout, setLayout] = useState('portrait'); // radio button for the layouts
  const [isActive, setActive] = useState(false); // button for the mirror
  const [isMirrored, setIsMirrored] = useState(false); // make the paper mirrored or not

  // insert an image file to local preview on the paper
  const uploadImage = () => {
    const uploadedFile = inputFileRef.current.files[0];
    if (uploadedFile) {
      const imgLink = URL.createObjectURL(uploadedFile);
      // setFileName('File name: ' + uploadedFile.name);
      document.querySelectorAll(".img-box").forEach((element) => {
        element.src = `${imgLink}`;
        element.classList.add("no-border");
      });
      setActive(false); // reset mirror
      setIsMirrored(false);
    }
  };

  // allow dropping files from file mangers or online images
  const handleDrop = (e) => {
    e.preventDefault();
    inputFileRef.current.files = e.dataTransfer.files;
    uploadImage();
  };

  // radio buttons for the layout options 
  const handleOptionChange = (event) => {
    setLayout(event.target.value);
  };
  const layoutClass = layout === 'portrait' ? 'portrait' : 'landscape';

  //button for the mirror function
  const toggleButton = () => {
    setActive(prevState => !prevState);
    setIsMirrored(prevState => !prevState);
  };
  const buttonClass = isActive ? 'activeButton' : 'inactiveButton';

  // Reset the layout
  const handleResetClick = () => {
    document.querySelectorAll(".img-box").forEach((element) => {
      element.src = imageHolder;
      element.classList.remove("no-border");
    });
    setLayout("portrait");
    setActive(false); // reset the setActive to default state aka False
    setIsMirrored(false);
    // setFileName('');    
  };

  // Trigger printing dialog / modal
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
      <div className="no-print">
        <div className="info-container padding">
          <Title />
          <div className="container">
            <div>
              <TextContent />
            </div>
            <div>
              <div className="padding">
                <label htmlFor="input-file" id="drop-area" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
                  <input type="file" accept="image/*" id="input-file" ref={inputFileRef} hidden onChange={uploadImage} />
                  <div id="img-upload">
                    <div className="text-area">
                      <p>Drag and drop or click here to upload image.</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="padding row">
          <div>
            <h2>Layouts</h2>
            <div className="row">
              <div className="optionList">
                <input 
                type="radio" 
                name="layouts" 
                value="portrait" 
                checked={layout === 'portrait'} 
                onChange={handleOptionChange} 
                />
                <label for="grids4" className="radioBtnContent">4 Photos on portrait</label>
              </div>
              <div className="optionList">
                <input 
                type="radio" 
                name="layouts" 
                value="landscape" 
                checked={layout === 'landscape'} 
                onChange={handleOptionChange} 
                />
                <label for="grids2" className="radioBtnContent">2 Photos on landscape</label>
              </div>
            </div>
          </div>
          <div>
            <h2>Mirror</h2>
            <div className="row">
              <button className={`btn ${buttonClass}`} onClick={toggleButton}>Mirror The image</button>
            </div>
          </div>
          <div>
            <h2>Settings</h2>
            <div className="row">
              <button className="btn secondary" type="button" onClick={handlePrint}>Print the Image</button>
              <button className="btn secondary" onClick={handleResetClick}>Reset All</button>
            </div>
          </div>
        </div>
      </div>
      <div className="paper-container">
        <div id="paper" className={`two-columns ${layoutClass} ${isMirrored ? 'mirrored' : 'notmirrored'}`} ref={paperRef}>
          <div className="img-grid">
            <img className="img-box" src={imageHolder} alt="image01" />
          </div>
          <div className="img-grid">
            <img className="img-box" src={imageHolder} alt="image02" />
          </div>
          <div className="img-grid grids-4">
            <img className="img-box" src={imageHolder} alt="image03" />
          </div>
          <div className="img-grid grids-4">
            <img className="img-box" src={imageHolder} alt="image04" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;