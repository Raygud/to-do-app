import React,{useState} from 'react'

type Props = {}

const ImageUpload = (props: Props) => {
    const [schoolImage, setSchoolImage] = useState();
    let GeneratedImageUrl;


    const fileSelectedHandler = (event:any) => {
        const formdata = new FormData();
        formdata.append('image', event.target.files[0]);
        fetch('https://api.imgur.com/3/image/', {
          method: 'post',
          headers: {
            Authorization: 'Client-ID d4e7ab1dc021147',
          },
          body: formdata,
        })
          .then((data) => data.json())
          .then((data) => {
            console.log(data);
            sessionStorage.setItem('ImageToPost', data.data.link);
            if (data.data.link) {
              GeneratedImageUrl = data.data.link;
            } else {
              GeneratedImageUrl = schoolImage;
            }
            console.log(GeneratedImageUrl);
            setSchoolImage(GeneratedImageUrl);
          });
      };
  return (
    <>
    <div>ImageUpload</div>
    <input type="file" id="files" onChange={fileSelectedHandler} />
</>
  )
}

export default ImageUpload