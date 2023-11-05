import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { deleteProduct, getProduct } from '../../Store/ActionCreators/ProductActionCreator';
import { DataGrid } from '@mui/x-data-grid';
import LeftNav from './LeftNav'


export default function AdminProduct() {
    var product = useSelector((state) => state.ProductStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'maincategory', headerName: 'Maincategory', width: 130 },
        { field: 'subcategory', headerName: 'Subcategory', width: 130 },
        { field: 'brand', headerName: 'Brand', width: 100 },
        { field: 'color', headerName: 'Color', width: 90 },
        { field: 'size', headerName: 'Size', width: 80 },
        { field: 'baseprice', headerName: 'Base Price', width: 100, renderCell: ({ row }) => <p>&#8377;{row.baseprice}</p> },
        { field: 'discount', headerName: 'Discount', width: 100, renderCell: ({ row })=> <p>{row.discount}%OFF</p>},
{ field: 'finalprice', headerName: 'Final Price', width: 100, renderCell: ({ row }) => <p>&#8377;{row.finalprice}</p> },
{ field: 'pic1', headerName: 'Pic1', width: 70, renderCell: ({ row }) => <img src={`/assets/product_img/${row.pic1}`} style={{ width: "100%", height: "45px" }} alt='error1' className='rounded' /> },
{ field: 'pic2', headerName: 'Pic2', width: 70, renderCell: ({ row }) => <img src={`/assets/product_img/${row.pic2}`} style={{ width: "100%", height: "45px" }} alt='error2' className='rounded' /> },
{ field: 'pic3', headerName: 'Pic3', width: 70, renderCell: ({ row }) => <img src={`/assets/product_img/${row.pic3}`} style={{ width: "100%", height: "45px" }} alt='error3' className='rounded' /> },
{ field: 'pic4', headerName: 'Pic4', width: 70, renderCell: ({ row }) => <img src={`/assets/product_img/${row.pic4}`} style={{ width: "100%", height: "45px" }} alt='error4' className='rounded' /> },
{
    field: 'edit',
        headerName: 'Edit',
            sortable: false,
                // description: 'This column has a value getter and is not sortable.',
                width: 80,
                    renderCell: ({ row }) =>
                        <button className='mybtn' onClick={() => {
                            navigate("/admin_update_product/" + row.id)
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
                        <button className='mybtn' onClick={() => { dispatch(deleteProduct({ id: row.id })) }}>
                            <span className='material-symbols-outlined' >
                                delete_forever
                            </span>
                        </button>

},
    ];

const rows = []
for (let item of product) {
    rows.push(item)
}

function getAPIData() {
    dispatch(getProduct())
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
                    <h5 className='bg text-center'><Link to="/admin_add_product" className='text-light'>Product<span className="material-symbols-outlined float-right text-light">
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

