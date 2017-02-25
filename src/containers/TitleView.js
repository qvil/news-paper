// React
import { connect } from 'react-redux';
// Custom
import { toggleLeftMenu } from '../actions';
import TitleBar from '../components/TitleBar';

const styles = {
    textAlign: "center"
}

const props = {
    title: "seowon",
    zDepth: 2,
    iconClassNameRight: "muidocs-icon-navigation-expand-more"
}

const mapStateToProps = (state) => ({
    leftMenu: state.leftMenu
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