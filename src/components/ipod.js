import { Component } from "react";
import Controller from "./controller";
import Display from "./Display";

class Ipod extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w-100 flex flex_center ipod_container">
                    <div className="w-100 flex flex_col ipod_wrapper" >
                        <div className="ipod_display">
                            <Display />
                        </div>
                        <div className="w-100 flex flex_center ipod_controller">
                            <Controller />
                        </div>  
                    </div>
                </div>
            </>
        )
    }
}

export default Ipod;