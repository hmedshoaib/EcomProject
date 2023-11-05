import React, { useEffect } from 'react'
import LeftNav from './LeftNav'
import { Link, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';

import {  getCheckout } from '../../Store/ActionCreators/CheckoutActionCreator';



export default function AdminCheckout() {
    var checkout = useSelector((state) => state.CheckoutStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userid', headerName: 'User ID', width: 30 },
        { field: 'paymentmode', headerName: 'Payment Mode', width: 100 },
        { field: 'orderstatus', headerName: 'Order Status', width: 100 },
        { field: 'paymentstatus', headerName: 'Pament Status', width: 100 },
        { field: 'totalAmount', headerName: 'Total Amount', width: 100 },
        { field: 'shippingAmount', headerName: 'Shipping Amount', width: 100 },
        { field: 'finalAmount', headerName: 'Final Amount', width: 100 },
        { field: 'time', headerName: 'Date', width: 200 },

        {
            field: 'views',
            headerName: 'Views',
            sortable: false,
            // description: 'This column has a value getter and is not sortable.',
            width: 100,
            renderCell: ({ row }) =>
                <button className='mybtn' onClick={() => {
                    navigate("/admin_single_checkout/" + row.id)
                }}>
                    <span className='material-symbols-outlined' >
                        visibility
                    </span>
                </button>

        },



    ];

    const rows = []
    for (let item of checkout) {
        rows.push(item)
    }

    function getAPIData() {
        dispatch(getCheckout())
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
                        <h5 className='bg text-center'><Link to="#" className='text-light'>Checkout</Link></h5>
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

