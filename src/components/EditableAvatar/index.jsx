export default function EditableAvatar({ src, onChange, isUploading, innerRef = null }) {
  const onChangeHere = (e) => {
    const { files } = e.target;
    !!files[0] && onChange(files[0]);
  };

  return (
    <div>
      {isUploading ? <div>Uploading....</div> : <img src={src} width={80} height={80} alt="avatar" />}
      <input type="file" onChange={onChangeHere} ref={innerRef} />
    </div>
  );
}
