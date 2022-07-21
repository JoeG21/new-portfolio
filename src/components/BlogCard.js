import React from 'react'

function BlogCard(props) {

    return (
        <div className='blog-card'>
            <a href={props.blog.link} target="_blank" rel='noopener noreferrer'>
                <div className='card-top'> 
                    <img src={props.blog.thumbnail} alt='Blog Cover' />
                </div>

                <div className='card-bottom'>
                    <h3> {props.blog.title} </h3>
                </div>
            </a>
        </div>
    )
}

export default BlogCard