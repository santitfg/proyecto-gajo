import "./InputFile.css";

const InputFile = ({
  label,
  name,
  msg,
  imageChange,
  source,
  removeSelectedImage,
  aceptFormat,
}) => {
  //www.kindacode.com/article/react-show-image-preview-before-uploading/

  //https://www.w3docs.com/snippets/html/how-to-allow-the-file-input-type-to-accept-only-image-files.html
  //https://www.w3docs.com/learn-html/html-accept-attribute.html
  //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file

  /** podria generar 4 posibilidades, aceprtar audio/video/img/txt y preview  */

  //https://developer.mozilla.org/es/docs/Web/HTML/Element/video

  //https://stackoverflow.com/questions/54899725/how-to-preview-audio-with-input-file-on-changed
  //https://developer.mozilla.org/es/docs/Web/HTML/Element/audio

  https: return (
    <>
      <div>
        {/* style={styles.container} */}
        <input accept={aceptFormat} type="file" onChange={imageChange} />
        {source && (
          <div>
            {/* style={styles.preview} */}
            <img
              src={URL.createObjectURL(source)}
              // style={styles.image}
              alt="Thumb"
            />{" "}
            <br />
            <button
              onClick={removeSelectedImage}
              // style={styles.delete}
            >
              Remove This Image
            </button>
          </div>
        )}
      </div>
    </>

    // <>
    //   <label>{label} </label>
    //   <br />
    //   <input
    //     type="file"
    //     onChange={imageChange}
    //     if={name}
    //     name={name}
    //     accept="image/*"
    //   />
    //   <br />
    //   <br />
    //   {/* <!-- <input type="file" onchange="previewFile()" /><br /> --> */}
    //   <img src={source} id="previewImg" height="200" alt="Image preview..." />
    //   <button type="button" onClick={() => console.log(source)}>
    //     revisar foto
    //   </button>
    // </>
  );
};

export default InputFile;
