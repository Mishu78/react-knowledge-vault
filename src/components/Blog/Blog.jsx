import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    console.log(blog);
    return (
        <div>
            
        </div>
    );
};
//proptype is used to check are we receiving the correct data or data type correct or is required or not.
Blog.propTypes = {
    blog:PropTypes.object.isRequired
}
export default Blog;