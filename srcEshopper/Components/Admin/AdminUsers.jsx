import React, { useEffect } from 'react'
import LeftNav from './LeftNav'
import { Link} from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';

import { deleteUser, getUser } from '../../Store/ActionCreators/UserActionCreator';



export default function AdminUsers() {
    var User = useSelector((state) => state.UserStateData)
    var dispatch = useDispatch()

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'username', headerName: 'User Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        { field: 'role', headerName: 'Role', width: 130 },
        {
            field: 'delete',
            headerName: 'Delete',
            sortable: false,
            // description: 'This column has a value getter and is not sortable.',
            width: 160,
            renderCell: ({ row }) =>
                <button className='mybtn' onClick={() => { dispatch(deleteUser({ id: row.id })) }}>
                    <span className='material-symbols-outlined' >
                        delete_forever
                    </span>
                </button>

        },
    ];

    const rows = []
    for (let item of User) {
        rows.push(item)
    }

    function getAPIData() {
        dispatch(getUser())
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
                        <h5 className='bg text-center'><Link to="#" className='text-light'>User</Link></h5>
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

