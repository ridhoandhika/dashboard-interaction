import LineChart from "../chart/LineChart";
import MapIndonesia from "../map/Indonesia";

const OpportunityTab = () => {
  return (
    <div>
      <div className="row g-3">
        <div className="col-xl-6 col-md-12">
          <div className="card mb-3">
            <div className="d-flex justify-content-between">
              <h5 className="card-header">Opportunity Trend</h5>
              <div
                className="btn-group btn-group-sm p-4"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  id="btn-day-oppo"
                >
                  Day
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  id="btn-month-oppo"
                >
                  Month
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  id="btn-year-oppo"
                >
                  Year
                </button>
              </div>
            </div>
            <div className="card-body pt-0">
              <div
                className="w-100"
              >
                 <LineChart />
              </div>
            </div>
          </div>

          <div className="row g-3">
            <div className="col-xl-6 col-md-12">
              <div className="card h-100">
                <div className="card-header d-flex justify-content-between">
                  <div className="card-title mb-0">
                    <h5 className="mb-0">Opportunity</h5>
                    <small className="text-muted">by Product</small>
                  </div>
                </div>
                <div className="card-body pb-2">
                  <span className="" id="loading-top-opportunity-by-product">
                    <div className="la-ball-pulse text-primary mb-3">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </span>
                  <ul className="p-0 m-0" id="top-opportunity-by-product">
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
              <div
                className="card overflow-hidden"
                id="card-detail-oppo"
                style={{ minHeight: "303px" }}
              >
                <div className="card-header pb-0 d-flex justify-content-between">
                  <div className="card-title">
                    <h5 className="mb-0">Detail</h5>
                    <small className="text-muted">Opportunity</small>
                  </div>
                </div>
                <div className="card-body" id="vertical-example">
                  <span className="" id="loading-detail-opportunity">
                    <div className="la-ball-pulse text-primary mb-3">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </span>
                  <ul
                    className="list-unstyled mb-0"
                    style={{cursor: "n-resize"}}
                    id="detail-opportunity"
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
            <div className="card-header">
              <div className="d-flex justify-content-between mb-3">
                <h5 className="card-title mb-0">Interaction</h5>
              </div>
            </div>
            <div className="card-body">
              <div className="row gy-3">
                <div className="col-xl-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="d-flex align-items-center">
                    <div className="badge rounded-pill bg-label-primary me-3 p-2">
                      <i className="ti ti-chart-bar ti-sm"></i>
                    </div>
                    <div className="card-info">
                      <span className="" id="loading-total-interaction-oppo">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5 className="mb-0" id="total-interaction-oppo"></h5>
                      <small>Total</small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="d-flex align-items-center">
                    <div className="badge rounded-pill bg-label-info me-3 p-2">
                      <i className="ti ti-social ti-sm"></i>
                    </div>
                    <div className="card-info">
                      <span className="" id="loading-digital-oppo">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5 className="mb-0" id="digital-oppo"></h5>
                      <small>Digital</small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="d-flex align-items-center">
                    <div className="badge rounded-pill bg-label-danger me-3 p-2">
                      <i className="ti ti-headset ti-sm"></i>
                    </div>
                    <div className="card-info">
                      <span className="" id="loading-legacy-oppo">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5 className="mb-0" id="legacy-oppo">
                        0
                      </h5>
                      <small>Legacy</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-header pb-1">
              <div className="d-flex justify-content-between mb-3">
                <h5 className="card-title mb-0">Interaction</h5>
                <small className="text-muted">by Regional</small>
              </div>
            </div>
            <div className="card-body">
              <div className="row gy-3">
                <div className="col">
                  <div className="d-flex align-items-center">
                    <div className="card-info text-center">
                      <span className="" id="loading-regional-oppo">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5
                        className="mb-0 text-center d-none"
                        id="reg-null-oppo"
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
                      <span className="" id="loading-regional-oppo">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5
                        className="mb-0 text-center d-none"
                        id="reg-satu-oppo"
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
                      <span className="" id="loading-regional-oppo">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5 className="mb-0 text-center d-none" id="reg-dua-oppo">
                        0
                      </h5>
                      <small>REG 2</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center">
                    <div className="card-info text-center">
                      <span className="" id="loading-regional-oppo">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5
                        className="mb-0 text-center d-none"
                        id="reg-tiga-oppo"
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
                      <span className="" id="loading-regional-oppo">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5
                        className="mb-0 text-center d-none"
                        id="reg-empat-oppo"
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
                      <span className="" id="loading-regional-oppo">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5
                        className="mb-0 text-center d-none"
                        id="reg-lima-oppo"
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
                      <span className="" id="loading-regional-oppo">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5
                        className="mb-0 text-center d-none"
                        id="reg-enam-oppo"
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
                      <span className="" id="loading-regional-oppo">
                        <div className="la-ball-pulse text-primary mb-3">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </span>
                      <h5
                        className="mb-0 text-center d-none"
                        id="reg-tujuh-oppo"
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
            <h5 className="card-header">Interaction by Location</h5>
            <div className="card-body">
              <div className="leaflet-map" id="layerControl">
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
              <div className="w-100" id="main" style={{height: "300px"}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityTab;
