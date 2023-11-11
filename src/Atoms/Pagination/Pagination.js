import React from 'react';
import Button from '../../Component/Button/Button';
import AtomText from '../../Component/Text/Text';
import Circular from '../../Component/Circular/Circular';
import Icon from '../../Component/Icon/Icon';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page) => {
        onPageChange(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        let roundTotalPage
        if (Math.round(totalPages) >= totalPages) {
            roundTotalPage = Math.round(totalPages)
        }
        else {
            roundTotalPage = Math.round(totalPages) + 1
        }
        for (let i = 1; i <= roundTotalPage; i++) {
            pageNumbers.push(
                <Button
                    type={"pagination-btn"}
                    key={i}
                    onClick={() => handlePageChange(i)}
                    value={
                        <AtomText
                            textStyle={currentPage === i ? 'text-pagination-colored' : ''}
                            type="type-5"
                        >
                            {i}
                        </AtomText>
                    }
                />
            );
        }

        return pageNumbers;
    };

    return (
        <div className="center">
            <Circular width={24} height={24} >
                <Icon onClick={() => handlePageChange(currentPage - 1)} iconName={"keyboard_arrow_left"} color={"#000000"} size={15} />
            </Circular>
            {renderPageNumbers()}
            <Circular width={24} height={24} >
                <Icon onClick={() => handlePageChange(currentPage + 1)} iconName={"keyboard_arrow_left-1"} color={"#000000"} size={15} />
            </Circular>
        </div>
    );
};

export default Pagination;
