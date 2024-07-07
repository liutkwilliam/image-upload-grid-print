import React, { useState, useEffect, useRef } from 'react'

function NewUpload(props) {
  const [file,setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const filePickerRef = useRef();

  useEffect(()=>{
    if(!file){
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload()={
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  },[file]);

  function pickedHandler(event){
    let pickedFile;
    if(event.target.files && event.target.files.length===1){
      pickedFile=event.target.files[0];
      setFile(pickedFile);
    }
  }

  function pickedImageHandler(){
    filePickerRef.current.click();
  }


  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

    useEffect(() => {
        listAll(imagesListRef).then((response) => {
          response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
              setImageUrls((prev) => [...prev, url]);
            });
          });
        });
      }, []);
  return (
    <div>
        <input
        id={props.id}
        ref={filePickerRef}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
        // onChange={(event) => {
        //   setImageUpload(event.target.files[0]);
        // }}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className='image-upload_preview'>
          {previewUrl && <img src={previewUrl} alt="preview" />}
          {!previewUrl && (
            <div className='center'>
              <button className='image-upload-button' type="button" onClick={pickedImageHandler}>Choose</button>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className='center'>
          <button className='image-upload-button' type="button" onClick={pickedImageHandler}>Change Image</button>
        </div>
      </div>
      <button onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url) => {
        return <img className="image-list" src={url} />;
      })}
    </div>
  )
}

export default NewUpload