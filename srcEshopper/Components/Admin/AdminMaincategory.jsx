import React, { useEffect } from 'react'
import LeftNav from './LeftNav'
import { Link, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';

import { deleteMaincategory, getMaincategory } from '../../Store/ActionCreators/MainCategoryActionCreators';



export default function AdminMaincategory() {
    var maincategory = useSelector((state) => state.MainCategoryStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },

        {
            field: 'edit',
            headerName: 'Edit',
            sortable: false,
            // description: 'This column has a value getter and is not sortable.',
            width: 160,
            renderCell: ({ row }) =>
                <button className='mybtn' onClick={() => {
                    navigate("/admin_update_main_c/" + row.id)
                }}>
                    <span className='material-symbols-outlined' >
                        edit
                    </span>
                </button>

        },

        {
            field: 'delete',
            headerName: 'Delete',
            sortable: false,
            // description: 'This column has a value getter and is not sortable.',
            width: 160,
            renderCell: ({ row }) =>
                <button className='mybtn' onClick={() =>{ dispatch(deleteMaincategory({ id: row.id }))}}>
                    <span className='material-symbols-outlined' >
                        delete_forever
                    </span>
                </button>

        },
    ];

    const rows = []
    for (let item of maincategory) {
        rows.push(item)
    }

    function getAPIData() {
        dispatch(getMaincategory())
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
                        <h5 className='bg text-center'><Link to="/admin_a_main_c" className='text-light'>MainCategory<span className="material-symbols-outlined float-right text-light">
                            add
                        </span></Link></h5>
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

