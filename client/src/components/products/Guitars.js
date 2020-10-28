import React from 'react';
import {connect} from 'react-redux';
import {guitarStatusChange,guitarQuantityDecrease,guitarQuantityIncrease} from '../../actions/guitarsActions';

const Guitars = ({guitars,guitarStatusChange,guitarQuantityDecrease,guitarQuantityIncrease}) => {
    const clickHandler = (e,guitar) =>{
        const backgroundColor = e.target.style.backgroundColor;
        if(backgroundColor === 'green'){
            e.target.style.backgroundColor = 'pink';
            e.target.textContent = 'Add to Cart';
            // guitar.status = "notAdded";
            guitarStatusChange(guitar.id,"notAdded");
            //dispatch statusChange
        }else{
            e.target.style.backgroundColor = 'green';
            e.target.textContent = 'Added';
            // guitar.status = 'added';
            guitarStatusChange(guitar.id,'added');
            //dispatch statusChange
        }
        
    }
    const quantityIncrease = (e,guitar) =>{
        guitarQuantityIncrease(guitar.id);

    };
    const quantityDecrease = (e,guitar) =>{
        if(guitar.quantity > 1){
            guitarQuantityDecrease(guitar.id);
        }
    };
    const guitarList = guitars.map(guitar =>{
        return(
            <div className="eachBook" key={guitar.id}>
                <h3>{guitar.title}(x{guitar.quantity})</h3>
                <h4>{guitar.price}$</h4>
                {
                    guitar.status === "added" ? (
                        <div>
                            <button style={{backgroundColor:'green'}} onClick={e => clickHandler(e,guitar)}>Added</button>
                            <button style={{backgroundColor:'blue'}} onClick={e => quantityIncrease(e,guitar)}>++</button>
                            <button style={{backgroundColor:'red'}} onClick={e => quantityDecrease(e,guitar)}>--</button>
                        </div>
                    ) : (
                        <button style={{backgroundColor:'pink'}} onClick={e => clickHandler(e,guitar)}>Add to Cart</button>
                    )
                }
            </div>
        )
    })
    return (
        <div className="guitarContent">
            {guitarList}
        </div>
    )
}

const mapStateToProps = state =>({
    guitars:state.guitarsReducer.guitars
})

export default connect(mapStateToProps,{guitarStatusChange,guitarQuantityIncrease,guitarQuantityDecrease})(Guitars);
