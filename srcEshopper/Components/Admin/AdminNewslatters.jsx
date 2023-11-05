import React, { useEffect } from 'react'
import LeftNav from './LeftNav'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';

import { deleteNewslatter, getNewslatter } from '../../Store/ActionCreators/NewslatterActionCreator';



export default function AdminNewslatters() {
    var Newslatter = useSelector((state) => state.NewslatterStateData)
    var dispatch = useDispatch()

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'email', headerName: 'Email', width: 230 },
        {
            field: 'delete',
            headerName: 'Delete',
            sortable: false,
            // description: 'This column has a value getter and is not sortable.',
            width: 160,
            renderCell: ({ row }) =>
                <button className='mybtn' onClick={() => { dispatch(deleteNewslatter({ id: row.id })) }}>
                    <span className='material-symbols-outlined' >
                        delete_forever
                    </span>
                </button>

        },
    ];

    const rows = []
    for (let item of Newslatter) {
        rows.push(item)
    }

    function getAPIData() {
        dispatch(getNewslatter())
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
                        <h5 className='bg text-center'><Link to="#" className='text-light'>Newslatter</Link></h5>
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

