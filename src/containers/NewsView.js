import { connect } from 'react-redux';
import NewsList from '../components/NewsList';

const mapStateToProps = (state) => ({
    newsList: state.newsList
    // title: "state.title",
    // text: "state.text",
});

const NewsView = connect(
    mapStateToProps
)(NewsList);

export default NewsView;