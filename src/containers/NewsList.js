import { connect } from 'react-redux';
import News from '../components/News';

const mapStateToProps = (state) => ({
    news: state.news
    // title: "state.title",
    // text: "state.text",
});

const NewsList = connect(
    mapStateToProps
)(News);

export default NewsList;