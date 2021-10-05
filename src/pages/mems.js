import React from 'react';
import ImageGrid from '../components/imagegrid';
import Layout from '../components/layout'
import Modal from '../components/modal';
import SEO from '../components/seo'

const Photos = (props) => {

    const [selectedImg, setSelectedImg] = React.useState(null)

    return (
        <Layout>
            <SEO title="Photos" />
            <h1 className='title shrink fade-in'>mems of fun stuff</h1>
            <ImageGrid setSelectedImg={setSelectedImg}/>
            { selectedImg && <Modal selectedImg={selectedImg}
            setSelectedImg={setSelectedImg}
            />}
        </Layout>
    )
}

export default Photos;