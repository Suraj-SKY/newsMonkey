import React from 'react'
import defaultImg from './Picture.png'
// import defaultImg from './Newsmonkey.jpg'
// this image will shown if no image is avaialble from api

const Newsitem = (props) => {

  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-primary" style={{ left: '50%', zIndex: '1' }}>
          {source}
        </span>
        <img src={imageUrl ? imageUrl : defaultImg} className="card-img-top" alt="NewsMonkey" style={{ height: "250px" }} />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
          <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Newsitem