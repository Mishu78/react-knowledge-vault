import PropTypes from 'prop-types';
const Blog = ({blog}) => {
 
    return (
        <div>
            
        </div>
    );
};
//proptype is used to check are we receiving the correct data or data type correct or is required or not.
//proptype used in blog component because in this component a prop receiving as object .
Blog.propTypes = {
    blog:PropTypes.object.isRequired
}
export default Blog;