import React from 'react';

const CloseButton = ({ onClose }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#015F74">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5"></path>
            <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <span onClick={onClose} className="shareclosebtn">&times;</span>
            </circle>
        </svg>
    );
};

export default CloseButton;
<div class="col-lg-12">
    <span class="text-primary product-price h3"><i class="fas fa-rupee-sign"></i>22500</span>
    <span class="done-task pre-price h3 "><span class="fas fa-rupee-sign"></span>23,500</span>

</div>
import React from 'react';

const ProductPrice = () => {
    return (
        <div className="col-lg-12">
            <span className="text-primary product-price h3" style={{ textAlign: 'center' }}>
                <i className="fas fa-rupee-sign"></i>22500
            </span>
            <span className="done-task pre-price h3">
                <span className="fas fa-rupee-sign"></span>23,500
            </span>
        </div>
    );
};

export default ProductPrice;
