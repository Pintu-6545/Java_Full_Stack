import React from 'react'

function Navs({name,title,desc}) {
  return (
    <div>

                 {/* <!-- Breadcrumb Start --> */}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <a className="breadcrumb-item text-dark" href="#">{name}</a>
                            <a className="breadcrumb-item text-dark" href="#">{title}</a>
                            <span className="breadcrumb-item active">{desc}</span>
                        </nav>
                    </div>
                </div>
            </div>

            {/* <!-- Breadcrumb End --> */}

                  
    </div>
  )
}

export default Navs
