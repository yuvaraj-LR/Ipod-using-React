import { Component } from "react";

class Display extends Component {
    constructor() {
        super();
    }

    render() {
        const { screenData, optionIndex, coverVisible, gameVisible } = this.props;

        return (
            <>
                <div className="flex w-100 display_container">
                    <div className="flex flex_col display_list">
                        {gameVisible ? (
                            <img src="https://media.wired.com/photos/62feb60bcea7c0581e825cb0/4:3/w_2131,h_1598,c_limit/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg" alt="i am game img." className="bg_img" />
                        ) : coverVisible ? (
                            <img src="https://s3-alpha.figma.com/hub/file/3859795690/c1c2216f-d3d2-464e-8040-e8ed9b6d801b-cover.png" alt="i am cover img." className="bg_img" />
                        ) : (
                            screenData.map((data, i) => (
                            <div key={i} className={`flex list ${optionIndex == i ? "highlight" : ""}`}>
                                <h2 className="capitalize">{data}</h2>
                            </div>
                            ))
                        )}
                    </div>
                </div>
            </>
        )
    }
}

export default Display;