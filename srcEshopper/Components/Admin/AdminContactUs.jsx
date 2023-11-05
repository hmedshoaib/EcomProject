import React, { useEffect } from 'react'
import LeftNav from './LeftNav'
import { Link, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact, getContact } from '../../Store/ActionCreators/ContactActionCreator';



export default function AdminContactUs() {
    var Contact = useSelector((state) => state.ContactStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        { field: 'subject', headerName: 'Subject', width: 130 },
        { field: 'status', headerName: 'Status', width: 100 },
        { field: 'data', headerName: 'Date', width: 200 },

        {
            field: 'views',
            headerName: 'Views',
            sortable: false,
            // description: 'This column has a value getter and is not sortable.',
            width: 100,
            renderCell: ({ row }) =>
                <button className='mybtn' onClick={() => {
                    navigate("/admin_single_contact/" + row.id)
                }}>
                    <span className='material-symbols-outlined' >
                        visibility
                    </span>
                </button>

        },

        {
            field: 'delete',
            headerName: 'Delete',
            sortable: false,
            // description: 'This column has a value getter and is not sortable.',
            width: 160,
            renderCell: ({ row }) => {
                if (row.status === "Done") {
                    return <button className='mybtn' onClick={() => { dispatch(deleteContact({ id: row.id })) }}>
                        <span className='material-symbols-outlined' >
                            delete_forever
                        </span>
                    </button>
                }
            }


        },


    ];

    const rows = []
    for (let item of Contact) {
        rows.push(item)
    }

    function getAPIData() {
        dispatch(getContact())
    }

    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg text-center'><Link to="#" className='text-light'>Contact</Link></h5>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                }}
                                pageSizeOptions={[5, 10]}
                            // checkboxSelection
                            />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

