import React from 'react'

const NewsItem = (props) =>{
   
        let { title, discription, imageUrl, newsDetail, author, date, source } = props
        return (
            <div className='my-2'>
                <div className="card" style={{ width: "18rem" }}>
                    <div style={{display: "flex", justifyContent: "flex-end", position:"absolute", right:"0"}}>
                    <span className=" badge rounded-pill bg-danger"  >
                        {source}
                    </span>
                    </div>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{discription}...</p>
                        <p className="card-text"><small className="text-danger">by {author} on {new Date(date).toGMTString()}</small></p>

                        <a href={newsDetail} target="_blank" rel="noopener noreferrer" className="btn btn-dark">Detail News</a>
                    </div>
                </div>
            </div>
        ) 
}
export default NewsItem
