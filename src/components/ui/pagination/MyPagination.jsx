import React from 'react';

const MyPagination = ({pageArray, page, setPage}) => {
    return (
        <div className='page_wrapper'>
            {pageArray.map(p =>
                <span
                    key = {p}
                    onClick={() => setPage(p)}
                    className={page === p ? 'page page_current' : 'page'}>{p}</span>
            )}
        </div>
    );
};

export default MyPagination;