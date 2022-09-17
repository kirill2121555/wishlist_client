import React from "react";


const Wish = ({ wish }) => {
    return (
        <div>
            <div className="o">
                <div className='posts'>
                    <div className='item1'>
                        Wish: {wish.title}
                    </div>
                </div>
            </div>
            <br></br>

        </div>

    );
}
export default Wish