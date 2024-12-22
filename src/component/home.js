import React from 'react'

const Home = () => {
    return (
        <div className='px-5'>
            <table class="table table-striped table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Lan</td>
                        <td>Anh</td>
                        <td>damthilananh8@gmail.com</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Gia</td>
                        <td>Huy</td>
                        <td>huylon@gmail.com</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Anh</td>
                        <td>Hao</td>
                        <td>hao97@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Home