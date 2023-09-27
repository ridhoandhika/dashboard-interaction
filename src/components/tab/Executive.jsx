import { useState } from "react";
import PieChart from "../chart/PieChart";
import LineChart from "../chart/LineChart";

const ExecutiveTab = () => {
  const [isActiveTab, setActiveTab] = useState("navs-interaction-by-channel");

  const handleOnClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div>
      <div className="row g-3 mb-3">
        <h4 className="fw-bold mb-0">Interaction</h4>
        <div className="col-xl-2 col-md-12">
          <div className="col-md-12 mb-4">
            <div className="card">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div className="card-title mb-0">
                  <span id="loading" className="loader-total-intaction">
                    <div className="la-ball-pulse text-primary">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </span>
                  <h5 className="mb-0 me-2" id="total-interaction"></h5>
                  <small>Total Interaction</small>
                </div>
                <div className="card-icon">
                  <span className="badge bg-label-primary rounded-pill p-2">
                    <i className="ti ti-cpu ti-sm"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mb-4">
            <div className="card">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div className="card-title mb-0">
                  <span id="loading">
                    <div className="la-ball-pulse text-primary">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </span>
                  <h5 className="mb-0 me-2" id="digital-interaction"></h5>
                  <small>Interaction Digital</small>
                </div>
                <div className="card-icon">
                  <span className="badge bg-label-success rounded-pill p-2">
                    <i className="ti ti-social ti-sm"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mb-4">
            <div className="card">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div className="card-title mb-0">
                  <span id="loading">
                    <div className="la-ball-pulse text-primary">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </span>
                  <h5 className="mb-0 me-2" id="legacy-interaction"></h5>
                  <small>Interaction Legacy</small>
                </div>
                <div className="card-icon">
                  <span className="badge bg-label-danger rounded-pill p-2">
                    <i className="ti ti-headset ti-sm"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mb-4">
            <div className="card">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div className="card-title mb-0">
                  <span id="loading">
                    <div className="la-ball-pulse text-primary">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </span>
                  <h5 className="mb-0 me-2" id="fcr-interaction"></h5>
                  <small>FCR</small>
                </div>
                <div className="card-icon">
                  <span className="badge bg-label-warning rounded-pill p-2">
                    <i className="ti ti-alert-octagon ti-sm"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-10 col-md-12">
          <div className="card">
            <div className="card-body pt-1 pb-0">
              <div className="nav-align-top">
                <ul className="nav nav-tabs nav-fill" role="tablist">
                  <li className="nav-item">
                    <button
                      type="button"
                      className={`nav-link nav-interaction ${
                        isActiveTab === "navs-interaction-by-channel"
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        handleOnClick("navs-interaction-by-channel")
                      }
                    >
                      <i className="tf-icons ti ti-arrows-up-down me-1"></i>
                      Interaction Channel
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className={`nav-link nav-interaction ${
                        isActiveTab === "navs-interaction-by-categories"
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        handleOnClick("navs-interaction-by-categories")
                      }
                    >
                      <i className="tf-icons ti ti-stack-2 me-1"></i>
                      Interaction Categories
                    </button>
                  </li>
                </ul>

                <div className="tab-content p-0 py-1 bg-transparent">
                  <div
                    className={`tab-pane fade ${
                      isActiveTab === "navs-interaction-by-channel"
                        ? "show active"
                        : ""
                    }`}
                    id="navs-interaction-by-channel"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-4">
                        <h6 className="pt-3 mb-6">Channel Proportion</h6>
                        <div className="mt-n5 mx-auto">
                          <PieChart />
                        </div>
                      </div>
                      <div className="col-md-1">
                        <div className="divider divider-vertical"></div>
                      </div>
                      <div className="col-xl-7">
                        <div className="d-flex justify-content-between">
                          <h6 className="pt-3">Channel Trend</h6>
                          <div
                            className="btn-group btn-group-sm pb-3"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              id="btn-day-channel-exe"
                            >
                              Day
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              id="btn-month-channel-exe"
                            >
                              Month
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              id="btn-year-channel-exe"
                            >
                              Year
                            </button>
                          </div>
                        </div>
                        <div className="w-100">
                          <LineChart />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${
                      isActiveTab === "navs-interaction-by-categories"
                        ? "show active"
                        : ""
                    }`}
                    id="navs-interaction-by-categories"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-4">
                        <h6 className="pt-3 mb-6">Category Proportion</h6>
                        <div className="mt-n5 mx-auto">
                          <PieChart />
                        </div>
                      </div>
                      <div className="col-md-1">
                        <div className="divider divider-vertical"></div>
                      </div>
                      <div className="col-xl-7">
                        <div className="d-flex justify-content-between">
                          <h6 className="pt-3">Channel Trend</h6>
                          <div
                            className="btn-group btn-group-sm pb-3"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              id="btn-day-categories-exe"
                            >
                              Day
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              id="btn-month-categories-exe"
                            >
                              Month
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              id="btn-year-categories-exe"
                            >
                              Year
                            </button>
                          </div>
                        </div>
                        <div className="w-100">
                          <LineChart />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveTab;
