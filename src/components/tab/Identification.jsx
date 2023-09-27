import LineChart from "../chart/LineChart";
import MapIndonesia from "../map/Indonesia";

const IdentificationTab = () => {
  return (
    <div>
      <div className="row g-3">
        <div className="col-xl-6 col-md-12">
          <div className="card mb-3">
            <div className="card-header pb-1">
              <div className="d-flex justify-content-between mb-3">
                <h5 className="card-title mb-0">Interaction </h5>
                <small className="text-muted">by Regional</small>
              </div>
            </div>
            <div className="card-body">
              <div className="row gy-3">
                <div className="col">
                  <div className="d-flex align-items-center">
                    <div className="card-info text-center">
                      <span className="" id="loading-regional-prob">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5
                        className="mb-0 text-center d-none"
                        id="reg-null-comp"
                      >
                        0
                      </h5>
                      <small>REG Null</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center">
                    <div className="card-info text-center">
                      <span className="" id="loading-regional-prob">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5
                        className="mb-0 text-center d-none"
                        id="reg-satu-comp"
                      >
                        0
                      </h5>
                      <small>REG 1</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center">
                    <div className="card-info text-center">
                      <span className="" id="loading-regional-prob">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5 className="mb-0 text-center d-none" id="reg-dua-comp">
                        0
                      </h5>
                      <small>REG 2</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center">
                    <div className="card-info text-center">
                      <span className="" id="loading-regional-prob">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5
                        className="mb-0 text-center d-none"
                        id="reg-tiga-comp"
                      >
                        0
                      </h5>
                      <small>REG 3</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center">
                    <div className="card-info text-center">
                      <span className="" id="loading-regional-prob">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5
                        className="mb-0 text-center d-none"
                        id="reg-empat-comp"
                      >
                        0
                      </h5>
                      <small>REG 4</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center">
                    <div className="card-info text-center">
                      <span className="" id="loading-regional-prob">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5
                        className="mb-0 text-center d-none"
                        id="reg-lima-comp"
                      >
                        0
                      </h5>
                      <small>REG 5</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center">
                    <div className="card-info text-center">
                      <span className="" id="loading-regional-prob">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5
                        className="mb-0 text-center d-none"
                        id="reg-enam-comp"
                      >
                        0
                      </h5>
                      <small>REG 6</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center">
                    <div className="card-info text-center">
                      <span className="" id="loading-regional-prob">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5
                        className="mb-0 text-center d-none"
                        id="reg-tujuh-comp"
                      >
                        0
                      </h5>
                      <small>REG 7</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-xl-6 col-md-12">
              <div className="card mb-3">
                <div className="d-flex align-items-end row">
                  <div className="col-7">
                    <div className="card-body text-nowrap">
                      <h5 className="card-title mb-0">Complain Interaction</h5>
                      <p className="mb-4">total complain interaction</p>
                      <h1
                        className="text-primary mb-2 d-none"
                        id="complaint-total"
                      >
                        0
                      </h1>
                      <span className="" id="loading-total-complain">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="col-5 text-center text-sm-left">
                    <div className="card-body pb-0 px-0 px-md-4">
                      <img src="" height="140" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card h-100" style={{maxHeight: "275px"}}>
                <div className="card-header d-flex justify-content-between">
                  <div className="card-title mb-3">
                    <h5 className="mb-0">Complain</h5>
                    <small className="text-muted">by Product</small>
                  </div>
                </div>
                <div className="card-body pb-1">
                  <span className="" id="loading-product-complain">
                    <div className="la-ball-pulse text-primary mb-3">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </span>
                  <ul className="p-0 m-0" id="top-product-compalint">
                    <li className="mb-3 pb-1 d-flex justify-content-between align-items-center">
                      <div className="badge bg-label-danger rounded p-2">
                        <i className="ti ti-wifi ti-sm"></i>
                      </div>
                      <div className="d-flex justify-content-between w-100 flex-wrap">
                        <h6 className="mb-0 ms-3">Internet</h6>
                        <div className="d-flex">
                          <p className="mb-0 fw-semibold">146</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-md-12">
              <div className="card overflow-hidden mb-4" style={{height: "470px"}}>
                <div className="card-header pb-0 d-flex justify-content-between mb-4">
                  <div className="card-title">
                    <h5 className="mb-0">Detail</h5>
                    <small className="text-muted">Complain</small>
                  </div>
                </div>
                <div className="card-body" id="vertical-example2">
                  <span className="" id="loading-detail-complain">
                    <div className="la-ball-pulse text-primary mb-3">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </span>
                  <ul
                    className="list-unstyled mb-0"
                    style={{cursor: "n-resize"}}
                    id="top-complain-detail"
                  >
                    <li className="mb-4">
                      <div className="d-flex align-items-start">
                        <div className="d-flex justify-content-between w-100 flex-wrap gap-2">
                          <div className="me-2">
                            <h6 className="mb-0">Lambat</h6>
                            <small className="text-muted">Internet</small>
                          </div>
                          <div className="d-flex align-items-center">
                            <p className="mb-0">55</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-md-12">
          <div className="card mb-3">
            <div className="d-flex justify-content-between">
              <h5 className="card-header">Complain Trend</h5>
              <div
                className="btn-group btn-group-sm p-4"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  id="btn-day-prob"
                >
                  Day
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  id="btn-month-prob"
                >
                  Month
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  id="btn-year-prob"
                >
                  Year
                </button>
              </div>
            </div>
            <div className="card-body pt-0">
              <div
                className="w-100"
                id="chartLineTrendProblem"
              >
                 <LineChart />
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <h5 className="card-header">Interaction by Location</h5>
            <div className="card-body">
              <div
                className="leaflet-map"
                id="layerControl2"
                style={{ height: "240px" }}
              >
                 <MapIndonesia />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="card mb-3">
            <div className="card-header">
              <div className="d-flex justify-content-between mb-3">
                <h5 className="card-title mb-0">Word Cloud</h5>
              </div>
            </div>
            <div className="card-body">
              <div className="w-100" id="main1" style={{height:"300px"}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentificationTab;
