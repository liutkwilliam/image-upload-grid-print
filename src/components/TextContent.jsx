import React from 'react'

function TextContent() {
  return (
    <>
        <div>
            <h2>Instructions</h2>
            <ol type="1">
                <li>Pick or drag an image to the blue box area</li>
                <li>Pick a layout</li>
                <li>Print the image when ready</li>
                <li>To mirror the image, press <b>Mirror the image</b>, then print again.</li>
            </ol>
        </div>
        <br />
        <div>
            <h2>Print Settings</h2>
            <ul>
                <li>Set the layout / orientation that fits</li>
                <li>Set paper size to A3</li>
                <li>Set Margins to "None"</li>
            </ul>
        </div>  
    </>
  )
}

export default TextContent