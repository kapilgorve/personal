import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

const Resume = () => (
  <Layout>
    <SEO
        title="Kapil Gorve Resume"
        description="Freelance ReactJs,Redux,NodeJs, React Native in Pune, India."
        image="https://images.unsplash.com/photo-1586281380349-632531db7ed4?fit=crop&w=1200&h=630"
        pathname="resume/"
      />
    <div className="resume" />
    <iframe
      src="https://drive.google.com/file/d/1zRF8P8AOiy27hFat_VIaaiil9dngrCXr/preview"
      type="application/pdf"
      height="768px"
      width="100%"
      title="Kapil Gorve Resume"
      loading="lazy"
    />
  </Layout>
)

export default Resume
