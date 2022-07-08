import React from 'react';
import Rows from '../Rows/Rows';

const Table = ({ labels, data }) => {
    return (
        <table>
            <thead>
                <tr>
                    {labels.map((item, index) => (
                    <th key={index} scope="col" colSpan="1">
                        {item}
                    </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <Rows labels={labels} data={data} />
            </tbody>
        </table>
    )
}

export default Table
