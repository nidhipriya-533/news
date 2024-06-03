import React from 'react'

const NewsItem = (props)=> {

        let {title, description, imageUrl, newsUrl, author, date, source} = props; //ar yha pr v add krte jaana h i.e destructured kr ke propes ke liye jaise author date
        return (
            <div className="my-3">
                {/* my-3 se distance bnta h */}
                <div className="card">
                    {/* Niche jo statement h ushka mtlb h ki agr koi image reload nhi ho rha h toh ushke jagah pr ye link wala image aa jaaye */}
                    {/* Bootstrap me batch ka ue kiye h source likhne ke liye */}
                       <div style={{
                           display: 'flex',
                           justifyContent: 'flex-end',
                           position: 'absolute',
                           right: '0'
                       }
                       }>
                           <span className=" badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageUrl?"https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> {title}...</h5>
                            <p className="card-text">{description}...</p>
                            {/* btn-sm ek class hota h bootstrap me */}
                            {/* bootstrap mw card ka use kr ke author ar date laye h ar !author?"unlnown" means agr kisi me author null h toh wo unknown show karega... Ar yha GMT time wala date v use kr shkte h ar simple date v like {date} */}
                            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }


export default NewsItem
