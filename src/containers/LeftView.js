// React
import { connect } from 'react-redux';
// Custom
import { toggleLeftMenu } from '../actions';
import LeftMenu from '../components/LeftMenu';

const mapStateToProps = (state) => ({
    open: state.open
});

const mapDispatchToProps = (dispatch) => ({
    onLeftMenuClick: dispatch(toggleLeftMenu)
});

const LeftView = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftMenu);

export default LeftView;