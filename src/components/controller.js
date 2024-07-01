import { Component } from "react";

class Controller extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="flex flex_col control_container">
                    <button className="control_button menu_button"><h1>Menu</h1></button>
                    <button className="control_button forward_button">
                        <img src="https://cdn-icons-png.flaticon.com/512/26/26309.png" className="button_icons" />
                    </button>
                    <button className="control_button backward_button">
                        <img src="https://cdn-icons-png.flaticon.com/512/26/26309.png" className="button_icons" />
                    </button>
                    <button className="control_button song_button">
                        <img src="https://cdn-icons-png.flaticon.com/512/64/64595.png" className="button_icons" />
                    </button>
                    <button className="control_button home_button">

                    </button>
                </div>
            </>
        )
    }
}

export default Controller;