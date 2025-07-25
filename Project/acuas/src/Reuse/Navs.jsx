import React from 'react'

function Navs({title,name }) {
    return (
        <div>
            {/* Modal Search Start */}
            <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h4 className="modal-title mb-0" id="exampleModalLabel">Search by keyword</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body d-flex align-items-center">
                            <div className="input-group w-75 mx-auto d-flex">
                                <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                <span id="search-icon-1" className="input-group-text btn border p-3"><i className="fa fa-search text-white" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Search End */}

            {/* Header Start */}
             <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4 className="text-white display-4 mb-4">{title}</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active text-primary">{name}</li>
                    </ol>
                </div>
            </div>
            {/* Header End */}


        </div>
    )
}

export default Navs
