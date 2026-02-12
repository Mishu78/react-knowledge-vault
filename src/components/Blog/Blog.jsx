import PropTypes from 'prop-types';
const Blog = ({blog}) => {
 const {title,cover,author,author_img,reading_time} = blog
    return (
        <div>
             <img src={cover} alt="" />
             <div className="flex justify-between">
                <div>
                <img className="w-6"src={author_img} alt="" />
                <div>

                </div>
                </div>
                <div>
                <span>{reading_time} min read</span>
                </div>
             </div>
            <h2 className="text-4xl">{title}</h2>
          
        </div>
    );
};
//proptype is used to check are we receiving the correct data or data type correct or is required or not.
//proptype used in blog component because in this component a prop receiving as object .
Blog.propTypes = {
    blog:PropTypes.object.isRequired
}
export default Blog;