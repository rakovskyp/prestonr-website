import React from 'react';
import Layout from '../components/layout'

const Books = (props) => {
    return (
        <Layout>
            <div className='fade-in'>
              <h1 className='title shrink'>books</h1>
              <p>Books that I'm reading and the notes that I take on them.</p>
              <p>Work in progress...</p>
            </div>
        </Layout>
    )
}

export default Books;