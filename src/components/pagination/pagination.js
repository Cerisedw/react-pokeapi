import React from 'react';


function Pagination({fnc, pagi}){
    return(
        <div class="pagination">
            <button style={{display : pagi === 0 ? "none" : "block"}}  onClick={() => fnc(pagi - 1)}>&laquo;</button>
            <button style={{display : pagi === 0 ? "none" : "block"}} onClick={() => fnc(pagi - 1)}>{pagi}</button>
            <button class="activePagi">{pagi + 1}</button>
            <button style={{display : pagi >= 32 ? "none" : "block"}} onClick={() => fnc(pagi + 1)}>{pagi + 1 + 1}</button>
            <button style={{display : pagi >= 31 ? "none" : "block"}} onClick={() => fnc(pagi + 2)}>{pagi + 1 + 2}</button>
            <button style={{display : pagi >= 32 ? "none" : "block"}} onClick={() => fnc(pagi + 1)}>&raquo;</button>
        </div>

    );
}

export default Pagination;