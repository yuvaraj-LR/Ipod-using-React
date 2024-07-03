import { Component } from "react";

class Display extends Component {
    constructor() {
        super();    <div> Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons"> Roundicons </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
    }

    render() {

        const { screenData } = this.props;
        console.log(screenData, "dataskdnfaja..."); 

        return (
            <>
                <div className="flex w-100 display_container">
                    <div className="flex flex_col display_list">
                        {screenData.map((data, i) => (
                            <div key={i} className="list">
                                <h2 className="capitalize">{Object.keys(data)}</h2>
                                <span><img /></span>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default Display;