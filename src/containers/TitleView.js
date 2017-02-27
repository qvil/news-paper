// React
import { connect } from 'react-redux';
// Custom
import { toggleLeftMenu } from '../actions';
import TitleBar from '../components/TitleBar';

const styles = {
    textAlign: "center"
}

const mapStateToProps = (state) => ({
    leftMenu: state.leftMenu,
    titleMenu: state.titleMenu,
});

// const mapDispatchToProps = (dispatch) => ({
// const mapDispatchToProps = (dispatch) => ({
//     onLeftMenuClick: dispatch(toggleLeftMenu)
// });

const TitleView = connect(
    mapStateToProps,
)(TitleBar);

/*const TitleView = () => (
    <TitleBar
        styles={styles}
        props={props}
    />
);*/

export default TitleView;