import { React, useState, useEffect } from 'react'
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

//Mục đích: Hiển thị danh sách sản phẩm và nút "Create" để chuyển sang biểu mẫu.
function ProductList(props) {
    // state product: lưu trữ danh sách sản phẩm lấy từ server.
    const [products, setProducts] = useState([])
    function fetchProducts() {
        fetch("http://localhost:3001/product#")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Unexpected Server Response")
                }
                return response.json()
            })
            .then((data) => {
                console.log(data)
                setProducts(data)
            })
            .catch((error) => console.log("Error: ", error))
    }
    // fetchProducts()
    useEffect(() => fetchProducts(), [])

    return (
        <>
            <h2 className='text-center mb-3'>
                List of products
            </h2>
            <button type="button" className='btn btn-primary me-2' onClick={() => props.showForm()}>Create</button >
            <button type="button" className='btn btn-outline-primary me-2' onClick={() => fetchProducts()}>Refresh</button >

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>CreateAt</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>{product.createdAt}</td>
                                    <td style={{ width: "15px", whiteSpace: "nowrap" }}>
                                        <button type="button" className="btn btn-primary btn-sm me-2">Edit</button>
                                        <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}


function ProductForm(props) {
    return (
        <>
            <h2 className='text-center mb-3'>Create of products</h2>

            {/* Category */}
            <div className="row">
                <div className="col-lg-6 mx-auto"></div>
                <form>
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">
                            Category
                        </label>
                        <div className="col-sm-8">
                            <select className="form-select"
                                name="category"
                                defaultValue="">
                                <option value="Other">Other</option>
                                <option value="Phone">Phone</option>
                                <option value="Computer">Computer</option>
                                <option value="Accessories">Accessories</option>
                                <option value="GPS">GPS</option>
                                <option value="Camera">Camera</option>
                            </select>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Price</label>
                        <div className="col-sm-8">
                            <input className="form-control"
                                name="price"
                                defaultValue="" />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Description</label>
                        <div className="col-sm-8">
                            <textarea className="form-control"
                                name="description"
                                defaultValue="" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="offset-sm-4 col-sm-4 d-grid">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                        <div className="col-sm-4 d-grid">
                            <button type="button" className='btn btn-secondary me-2' onClick={() => props.showList()}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
