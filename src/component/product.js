import { React, useState } from 'react'
function Product() {
    const [content, setContent] = useState(<ProductList />)

    // Được gọi để render lại ProductList (danh sách sản phẩm).
    // Gọi setContent để cập nhật nội dung state content thành <ProductList />.
    // Truyền thêm prop showFrom={showForm} để liên kết nút "Create" với chức năng chuyển sang form tạo sản phẩm.
    function showList() {
        setContent(<ProductList showFrom={showForm} />)
    }

    // Được gọi để hiển thị ProductForm (form tạo sản phẩm).
    // Gọi setContent để cập nhật nội dung state content thành <ProductForm />.
    // Truyền thêm prop showList={showList} để liên kết nút "Cancel" với chức năng quay lại danh sách sản phẩm.
    function showForm() {
        setContent(<ProductForm showList={showList} />)
    }
    return (
        <div className='container my-5'>
            {content}
        </div>
    )
}
export default Product

function ProductList() {
    return (
        <>
            <h2 className='text-center mb-3'>
                List of products
            </h2>
            <button className='btn btn-primary me-2'>Create</button>
        </>
    )
}


function ProductForm() {
    return (
        <>
            <h2 className='text-center mb-3'>
                Create of products
            </h2>
            <button className='btn btn-secondary me-2'>Cancel</button>
        </>
    )
}
