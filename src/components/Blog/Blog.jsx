import PropTypes from 'prop-types';
const Blog = ({blog}) => {
 const {title,cover,author,author_img,reading_time,posted_date,hashtags} = blog
    return (
        <div className="mb-20">
             <img className="w-full mb-8" src={cover} alt="" />
             <div className="flex justify-between">
                <div className="flex mb-4">
                <img className="w-6"src={author_img} alt="" />
                <div className="ml-6 rounded-xs">
                <h3 className="text-2xl rounded-xs">{author}</h3>
                <p>{posted_date}</p>
                </div>
                </div>
                <div>
                <span>{reading_time} min read</span>
                </div>
             </div>
            <h2 className="text-4xl mb-4">{title}</h2>
           
           <p>
            {
                hashtags.map((hash,idx)=> <span key={idx}><a href="">#{hash}</a></span>)
            }
           </p>
        </div>
    );
};
 //show title 
//proptype is used to check are we receiving the correct data or data type correct or is required or not.
//proptype used in blog component because in this component a prop receiving as object .
Blog.propTypes = {
    blog:PropTypes.object.isRequired
}
export default Blog;