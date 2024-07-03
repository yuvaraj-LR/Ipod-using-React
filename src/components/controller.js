import { Component } from "react";

class Controller extends Component {
    constructor() {
        super();
    }

    render() {
        const {state, onClickMenuButton, onClickForwardButton, onClickBackwardButton, onClickPlayButton, onClickNextButton} = this.props;

        return (
            <>
                <div className="flex flex_col control_container">
                    <button className="control_button menu_button" onClick={onClickMenuButton}><h1>Menu</h1></button>
                    <button className="control_button forward_button" onClick={onClickForwardButton}>
                        <img src="https://cdn-icons-png.flaticon.com/512/26/26309.png" className="button_icons" />
                    </button>
                    <button className="control_button backward_button" onClick={onClickBackwardButton}>
                        <img src="https://cdn-icons-png.flaticon.com/512/26/26309.png" className="button_icons" />
                    </button>
                    <button className="control_button song_button" onClick={onClickPlayButton}>
                        <img src="https://cdn-icons-png.flaticon.com/512/64/64595.png" className="button_icons" />
                    </button>
                    <button className="control_button home_button" onClick={onClickNextButton}>

                    </button>
                </div>
            </>
        )
    }
}

export default Controller;