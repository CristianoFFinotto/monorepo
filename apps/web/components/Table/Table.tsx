import React from 'react';

export interface TableProps {

    config: {
        columns: string[];
        data: number[][];
    }
}

const Button = (props: TableProps) => {
    return <table border={1}>
    <thead>
        <tr>
        {
            props.config.columns.map((cell) => 
                <th>{cell}</th>
            )
        }
        </tr>
    </thead>
    <tbody>
        {
            props.config.data.map((row) => 
                <tr>
                    {
                        row.map((cell) => <td>{cell}</td>)
                    }
                </tr>
            )
        }
    </tbody>
</table>;
}

export default Button;
