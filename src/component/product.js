import { React, useState } from 'react'
function Product() {
    const [content, setContent] = useState(<ProductList showForm={showForm} />)

    // Được gọi để render lại ProductList (danh sách sản phẩm).
    // Gọi setContent để cập nhật nội dung state content thành <ProductList />.
    // Truyền thêm prop showForm={showForm} để liên kết nút "Create" với chức năng chuyển sang form tạo sản phẩm.
    function showList() {
        setContent(<ProductList showForm={showForm} />)
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

function ProductList(props) {
    return (
        <>
            <h2 className='text-center mb-3'>
                List of products
            </h2>
            <button
                type="button"
                className='btn btn-primary me-2'
                onClick={() => props.showForm()}
            >Create</button >
        </>
    )
}


function ProductForm(props) {
    return (
        <>
            <h2 className='text-center mb-3'>
                Create of products
            </h2>
            <button
                type="button"
                className='btn btn-secondary me-2'
                onClick={() => props.showList()}
            >Cancel</button>
        </>
    )
}
