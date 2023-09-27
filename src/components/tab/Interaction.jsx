import LineChart from "../chart/LineChart";
import MapIndonesia from "../map/Indonesia";

const InteractionTab = () => {
  return (
    <div>
      <div className="row g-3">
        <div className="col-xl-6 col-md-12">
          <div className="row g-3">
            <div className="col-xl-6 col-md-12">
              <div className="card mb-3">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className="card-title mb-0">
                    <span className="" id="loading-total-churn">
                      <div className="la-ball-pulse text-primary mb-3">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </span>
                    <h5 className="mb-0 me-2 d-none" id="curn-total">
                      5
                    </h5>
                    <small>Churn Request</small>
                  </div>
                  <div className="card-icon">
                    <span className="badge bg-label-danger rounded-pill p-2">
                      <i className="ti ti-arrow-back-up ti-sm"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className="card-title mb-0">
                    <span className="" id="loading-total-churn">
                      <div className="la-ball-pulse text-primary mb-3">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </span>
                    <h5 className="mb-0 me-2 d-none" id="curn-avg-contact">
                      0.0
                    </h5>
                    <small>Avg Contact Frequency</small>
                  </div>
                  <div className="card-icon">
                    <span className="badge bg-label-danger rounded-pill p-2">
                      <i className="ti ti-chart-bar ti-sm"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className="card-title mb-0">
                    <span className="" id="loading-total-churn">
                      <div className="la-ball-pulse text-primary mb-3">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </span>
                    <h5
                      className="mb-0 me-2 d-none"
                      id="curn-avg-last-duration"
                    >
                      0.0
                    </h5>
                    <small>Avg Last Complain Duration (Days)</small>
                  </div>
                  <div className="card-icon">
                    <span className="badge bg-label-danger rounded-pill p-2">
                      <i className="ti ti-chart-line ti-sm"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="card h-100">
                <div className="card-header d-flex justify-content-between">
                  <div className="card-title mb-0">
                    <h5 className="mb-0">Problem</h5>
                    <small className="text-muted">by Product</small>
                  </div>
                </div>
                <div className="card-body pt-2 pb-1">
                  <span className="" id="loading-top-problem">
                    <div className="la-ball-pulse text-primary mb-3">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </span>
                  <ul className="p-0 m-0" id="churn-problem">
                    <li className="mb-3 pb-2 d-flex justify-content-between align-items-center">
                      <div className="d-flex justify-content-between w-100 flex-wrap">
                        <h6 className="mb-0 ms-3">Internet</h6>
                        <div className="d-flex">
                          <p className="mb-0 fw-semibold">146</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3 pb-2 d-flex justify-content-between align-items-center">
                      <div className="badge bg-label-danger rounded p-2">
                        <i className="ti ti-device-desktop ti-sm"></i>
                      </div>
                      <div className="d-flex justify-content-between w-100 flex-wrap">
                        <h6 className="mb-0 ms-3">TV</h6>
                        <div className="d-flex">
                          <p className="mb-0 fw-semibold">16</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3 pb-2 d-flex justify-content-between align-items-center">
                      <div className="badge bg-label-danger rounded p-2">
                        <i className="ti ti-phone ti-sm"></i>
                      </div>
                      <div className="d-flex justify-content-between w-100 flex-wrap">
                        <h6 className="mb-0 ms-3">Phone</h6>
                        <div className="d-flex">
                          <p className="mb-0 fw-semibold">0</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-12 col-md-12">
              <div className="card mb-3">
                <div className="card-header pb-1">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="card-title mb-0">Churn Request</h5>
                    <small className="text-muted">by Regional</small>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row gy-3">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div className="card-info text-center">
                          <span className="" id="loading-regional-churn">
                            <div className="la-ball-pulse text-primary mb-3">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </span>
                          <h5
                            className="mb-0 text-center d-none"
                            id="reg-null-churn"
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
                          <span className="" id="loading-regional-churn">
                            <div className="la-ball-pulse text-primary mb-3">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </span>
                          <h5
                            className="mb-0 text-center d-none"
                            id="reg-satu-churn"
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
                          <span className="" id="loading-regional-churn">
                            <div className="la-ball-pulse text-primary mb-3">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </span>
                          <h5
                            className="mb-0 text-center d-none"
                            id="reg-dua-churn"
                          >
                            0
                          </h5>
                          <small>REG 2</small>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div className="card-info text-center">
                          <span className="" id="loading-regional-churn">
                            <div className="la-ball-pulse text-primary mb-3">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </span>
                          <h5
                            className="mb-0 text-center d-none"
                            id="reg-tiga-churn"
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
                          <span className="" id="loading-regional-churn">
                            <div className="la-ball-pulse text-primary mb-3">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </span>
                          <h5
                            className="mb-0 text-center d-none"
                            id="reg-empat-churn"
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
                          <span className="" id="loading-regional-churn">
                            <div className="la-ball-pulse text-primary mb-3">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </span>
                          <h5
                            className="mb-0 text-center d-none"
                            id="reg-lima-churn"
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
                          <span className="" id="loading-regional-churn">
                            <div className="la-ball-pulse text-primary mb-3">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </span>
                          <h5
                            className="mb-0 text-center d-none"
                            id="reg-enam-churn"
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
                          <span className="" id="loading-regional-churn">
                            <div className="la-ball-pulse text-primary mb-3">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </span>
                          <h5
                            className="mb-0 text-center d-none"
                            id="reg-tujuh-churn"
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

              <div className="card">
                <h5 className="card-header">Churn Request by Locations</h5>
                <div className="card-body">
                  <div
                    className="leaflet-map3"
                    id="layercontrol3"
                    style={{ height: "200px" }}
                  >
                      <MapIndonesia />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-md-12">
          <div className="row g-3">
            <div className="col-xl-12 col-md-12">
              <div className="card">
                <div className="d-flex justify-content-between">
                  <h5 className="card-header">Interaction History</h5>
                  <div
                    className="btn-group btn-group-sm p-4"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      id="btn-day-churn"
                    >
                      Day
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      id="btn-month-churn"
                    >
                      Month
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      id="btn-year-churn"
                    >
                      Year
                    </button>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div
                    className="w-100"
                    id="chartLineTrendChurn"
                  ><LineChart /></div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-md-12">
              <div
                className="card overflow-hidden h-100"
                style={{ minHeight: "300px" }}
              >
                <div className="card-header pb-0 d-flex justify-content-between">
                  <div className="card-title">
                    <h5 className="mb-0">Detail</h5>
                    <small className="text-muted">Problem</small>
                  </div>
                </div>
                <div className="card-body" id="vertical-example3">
                  <span className="" id="loading-top-detail">
                    <div className="la-ball-pulse text-primary mb-3">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </span>
                  <ul
                    className="list-unstyled mb-0"
                    style={{ cursor: "n-resize" }}
                    id="curn-detail-product"
                  ></ul>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-md-12">
              <div className="card h-100">
                <div className="card-header pb-0">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="card-title mb-0">Interaction</h5>
                    <small className="text-muted">by Category Proportion</small>
                  </div>
                </div>
                <div className="card-body">
                  {/* <div
                    className=""
                    id="chartPieChurn"
                    style={{ minHeight: "320px", minWidth: "240px" }}
                  ></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="d-flex justify-content-between mb-0">
                <h5>Detail Interaction</h5>
                <button
                  className="btn btn-primary btn-sm"
                  id="download-data-irma"
                >
                  download
                </button>
              </div>
            </div>
            <div className="table-responsive text-nowrap">
              <table className="table" id="tbl-churn-cust">
                <thead>
                  <tr className="text-nowrap">
                    <th>CUSTOMER ID</th>
                    <th>Main Category</th>
                    <th>TOPIC</th>
                    <th>SENTIMEN</th>
                    <th>REGIONAL</th>
                    <th>WITEL</th>
                    <th>Detail INTERACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractionTab;
