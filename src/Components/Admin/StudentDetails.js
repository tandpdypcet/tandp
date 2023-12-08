
import './StudentDetails.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';
function StudentDetails() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const columns = [
        {
            name: 'Id',
            selector: 'id',
            sortable: true,
            grow: 1,
            cell: row => <div>{row._id}</div>,
        },
        {
            name: 'Username',
            selector: 'Username',
            sortable: true,
            grow: 2,
            cell: row => <div>{row.username}</div>,
        },
        {
            name: 'Email',
            selector: 'Email',
            sortable: true,
            grow: 3,
            cell: row => <div>{row.email}</div>,
        },
        {
            name: 'Action',
            selector: 'Action',
            grow: 4,
            cell: row => <div><Link to={`/readStudent/${row.email}`} className='btn btn-sm btn-outline-success'>Read</Link>
                <button className='btn btn-sm btn-outline-danger ml-4'
                    onClick={() => handleDelete(row._id)}>Delete</button></div>,
        }
    ];

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + '/read')
            .then(res => {
                setData(res.data);
                setFilteredData(res.data);
            })
            .catch(err => {
                console.log(err);
                // alert("Fail");
            });
    }, []);


    const handleFilter = (e) => {
        const searchValue = e.target.value;
        const filtered = data.filter(d =>
            d.username.toLowerCase().includes(searchValue.toLowerCase()) ||
            d.email.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const handleDelete = async (id) => {
        await axios.post(process.env.REACT_APP_BASE_URL + '/delete', { id })
            .then(res => {
                alert("Succesfully deleted record!!")
            })
            .catch(err => {
                console.log(err);
                // alert("Fail");
            });
    }

    return (
        <>
            <div className='studentTable container '>
                <input
                    type="text"
                    placeholder="Search by Name"
                    onChange={handleFilter}
                />
                <DataTable
                    columns={columns}
                    data={filteredData} // Pass the filtered data directly
                    pagination
                    paginationPerPage={5}
                />
            </div>
        </>
    );
}
export default StudentDetails;