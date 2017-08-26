import * as React from 'react';
import { connect } from 'react-redux';

import Snackbar from 'material-ui/Snackbar';

class TransmuteSnackbar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            open: false,
            message: 'hello',
        };
    }
    componentWillReceiveProps(nextProps: any) {
        if (nextProps.transmute.snackbarMessage) {
            this.setState({
                open: true,
                message: nextProps.transmute.snackbarMessage
            });
        }
    }
    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };
    render() {
        return (
            <div>
                <Snackbar
                    open={this.state.open}
                    message={`${this.state.message}`}
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        );
    }
}

export default connect((state: any) => ({
    transmute: state.transmute,
}))(TransmuteSnackbar);
