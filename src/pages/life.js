import React from 'react';
import ImageGrid from '../components/imagegrid';
import Layout from '../components/layout'
import Modal from '../components/Modal';
import SEO from '../components/seo'

const Life = (props) => {

    const [selectedImg, setSelectedImg] = React.useState(null)

    
    return (
        <Layout>
            <SEO title="Highlights" />
            <ImageGrid setSelectedImg={setSelectedImg}/>
            { selectedImg && <Modal selectedImg={selectedImg}
            setSelectedImg={setSelectedImg}
            />}
        </Layout>
    )
}

export default Life;