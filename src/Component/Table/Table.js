import React, { useState } from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import AtomText from '../Text/Text';
import { Pagination } from '../../Atoms';
import Circular from '../Circular/Circular';

const Table = (props) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [sortConfig, setSortConfig] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const styleSelection = {
        width: 50, paddingLeft: 24, textAlign: "start"
    }
    const handleRowSelection = (rowId) => {
        if (rowId === 'header') {
            const allRowIds = props.data.map((rowData) => rowData.id);
            if (selectAll) {
                setSelectedRows([]);
            } else {
                setSelectedRows(allRowIds);
            }
            setSelectAll(!selectAll);
        } else {
            setSelectedRows((prevSelectedRows) => {
                if (prevSelectedRows.includes(rowId)) {
                    return prevSelectedRows.filter((id) => id !== rowId);
                } else {
                    return [...prevSelectedRows, rowId];
                }
            });
            setSelectAll(false);
        }
    };

    const onActionSelection = () => {
        if (selectedRows.length !== 0)
            props.onSelectionChange(selectedRows)
    }

    const renderCellContent = (column, rowData) => {
        if (column.key === 'selection') {
            if (rowData === 'header') {
                return (
                    <input
                        className='checkBox-className'
                        type="checkbox"
                        checked={selectAll}
                        onChange={() => handleRowSelection('header')}
                    />
                );
            }
            return (
                <input
                    className='checkBox-className'
                    type="checkbox"
                    checked={selectedRows.includes(rowData.id)}
                    onChange={() => handleRowSelection(rowData.id)}
                />
            );
        }

        if (column.key === 'action') {
            return (
                <div className='flex'>
                    <Circular width={32} height={32} >
                        <Icon onClick={() => handleActionClick(rowData.id)} iconName={"Pencil"} color={"#7A00E6"} size={16} />
                    </Circular>
                </div>
            );
        }

        if (column.render && typeof column.render === 'function') {
            const customComponent = column.render(rowData);
            return <>{customComponent}</>;
        }

        return <AtomText type={"type-4"}>{rowData[column.key]}</AtomText>;
    };

    const handleActionClick = (rowId) => {
        props.onEdit(rowId)
    };
    const handleSort = (title, order) => {
        props.handleSort(title, order)
    }
    const sortedData = props.data.slice().sort((a, b) => {
        if (!sortConfig) {
            return 0;
        }

        const { key, direction } = sortConfig;

        if (a[key] < b[key]) {
            return direction === 'asc' ? -1 : 1;
        }

        if (a[key] > b[key]) {
            return direction === 'asc' ? 1 : -1;
        }

        return 0;
    });
    return (
        <div className='w-100 h-100 table-container'>
            <div className='w-100 flex  justify-space items-center p-24'>
                <div className={"inputContainer"}>
                    <span className={"icon-input"}>
                        <Icon iconName={"MagnifyingGlass"} size={24} color={"#B3B3B3"} />
                    </span>
                    <input type="text" className={"input-table"} value={props.searchWord} onChange={(e) => props.onChaneSearch(e.target.value)}
                        placeholder={"Rechercher"}
                    />
                </div>
                <Button
                    type={"delete-btn"}
                    onClick={onActionSelection}
                    value={<Icon iconName={"Trash"} size={24} color={selectedRows.length ? "#7A00E6" : "#B3B3B3"} />}
                />
            </div>
            <table className={"w-100 " + props.tableStyle}>
                <thead
                    className={"w-100 header-border " + props.theadStyle}
                >
                    <tr
                        className={"w-100 header-border " + props.trStyle}
                    >
                        {props.columns.map((column) => (
                            <th
                                style={column.key === 'selection' ? styleSelection : {}}
                                className={"text-start hp-52 header-border " + props.thStyle
                                }
                                key={column.key}
                            >
                                {column.key === 'selection' ? (
                                    <input
                                        className='checkBox-className'
                                        type="checkbox"
                                        checked={selectAll}
                                        onChange={() => handleRowSelection('header')}
                                    />
                                ) : (
                                    <div className='flex items-center justify-start '>
                                        <AtomText type={"type-3"}>{column.title}</AtomText>
                                        <div className='flex flex-col center ms-8'>
                                            <Icon onClick={() => { handleSort(column.key, 1) }} iconName={"Vector-2"} color={"#000000"} size={10} />
                                            <Icon onClick={() => { handleSort(column.key, -1) }} iconName={"Vector-3"} color={"#000000"} size={10} />
                                        </div>
                                    </div>
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody
                    className={props.tbodyStyle}
                >
                    {sortedData.map((rowData) => (
                        <tr
                            className={"hp-50 " + props.tbodyTrStyle}
                            key={rowData.id}
                        >
                            {props.columns.map((column) => (
                                <td
                                    style={column.key === 'selection' ? styleSelection : {}}
                                    key={column.key}
                                >
                                    {renderCellContent(column, rowData)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='w-100 hp-48 center pagination-border '>
                {
                    (props.isPagination && props.totalPages > 1) &&
                    <Pagination
                        currentPage={props.currentPage}
                        totalPages={props.totalPages}
                        onPageChange={props.handlePageChange}
                    />
                }
            </div>
        </div >
    );
};

export default Table;
