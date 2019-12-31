import './ImageList.css';
import React from 'react';
import Image from './Image'

const ImageList = (props) => {
    console.log(props)
    const images = props.images.map(image => {
        return <Image key={image.id} image={image}></Image>
    })

    return (
        <div className='image-list'>
            {images}
        </div>
    )
}

export default ImageList;