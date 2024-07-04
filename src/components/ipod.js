import { Component } from "react";
import Controller from "./controller";
import Display from "./Display";

class Ipod extends Component {
    constructor() {
        super();
    }

    render() {

        const {state, onClickMenuButton, onClickForwardButton, onClickBackwardButton, onClickPlayButton, onClickNextButton} = this.props;
        const {gameVisible, menuVisible, coverVisible, musicVisible, settingVisible, optionIndex} = this.props.state;

        let screenData;

        return (
            <>
                <div className="w-100 flex flex_center ipod_container">
                    <div className="w-100 flex flex_col ipod_wrapper" >
                        <div className="ipod_display">
                            {musicVisible ? ( <Display screenData={this.props.state.music.options} optionIndex={optionIndex} />) : gameVisible ? (<Display backgroundBG={true} gameVisible={true} />) : coverVisible ? (<Display backgroundBG={true} coverVisible={true} />) : settingVisible ? (<Display screenData = {this.props.state.settings.options} optionIndex={optionIndex} />) : menuVisible ? ( <Display screenData={this.props.state.menu.options} optionIndex={optionIndex} />) : ("")}
                        </div>
                        <div className="w-100 flex flex_center ipod_controller">
                            <Controller state={state} onClickMenuButton={onClickMenuButton} onClickForwardButton={onClickForwardButton} onClickBackwardButton={onClickBackwardButton} onClickPlayButton={onClickPlayButton} onClickNextButton={onClickNextButton}/>
                        </div>  
                    </div>
                </div>
            </>
        )
    }
}

export default Ipod;