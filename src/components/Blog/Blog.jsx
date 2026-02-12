import PropTypes from 'prop-types';
const Blog = ({blog}) => {
 const {title,cover} = blog
    return (
        <div>
            <h2 className="text-4xl">{title}</h2>
           <img src={cover} alt="" />
        </div>
    );
};
//proptype is used to check are we receiving the correct data or data type correct or is required or not.
//proptype used in blog component because in this component a prop receiving as object .
Blog.propTypes = {
    blog:PropTypes.object.isRequired
}
export default Blog;