import React from 'react'

const Loader = (props) => {
    return (
        <table className="table mt-5">
            <thead>
                <tr>
                    <th onClick={props.Sort}># </th>
                    <th>Date </th>
                    <th>Name </th>
                    <th>quantity </th>
                    <th>distance </th>
                </tr>
            </thead>
            <tbody>
                {props.dataTable.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.date.slice(0, 10)}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.distance}</td>
                    </tr>
                ))}       
            </tbody>
        </table>
    )

}

export default Loader