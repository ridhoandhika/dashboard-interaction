import { useEffect, useState } from "react";
import ExecutiveTab from "../components/tab/Executive";
import OpportunityTab from "../components/tab/Opportunity";
import IdentificationTab from "../components/tab/Identification";
import InteractionTab from "../components/tab/Interaction";


const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('navs-executive-summary');
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    
      };
    useEffect(()=> {
        window.dispatchEvent(new Event('resize')); 
    },[handleTabClick])
    
  return (
    <div className="layout-page">
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
            {/* <div className="col-xl-12">
              <div className="col-md">
                <div className="card mb-4">
                  <div className="card-body py-2 px-4">
                    <div className="card-title header-elements mb-0">
                      <h5 className="m-0 me-2">Filters</h5>
                      <div className="card-title-elements"></div>
                      <div className="card-title-elements ms-auto d-flex">
                        <div className="input-group w-auto">
                          <select
                            id="select-channel"
                            className="select2 form-select form-select-lg input-sm"
                            data-allow-clear="true"
                            name="filter_channel"
                          >
                            <option value="147" defaultValue>
                              VOICE &nbsp;
                            </option>
                            <option value="Plasa">WALKIN &nbsp;</option>
                            <option value="MyIndihome">
                              MyIndihome &nbsp;
                            </option>
                            <option value="Social Media">
                              SOSIAL MEDIA &nbsp;
                            </option>
                          </select>
                        </div>
                        <div
                          className="input-group w-auto d-none"
                          id="types-sosmed"
                        >
                          <select
                            id="type-social-media"
                            className="select2 select1 form-select form-select-lg input-sm"
                            name="filter_mychan[]"
                            multiple="multiple"
                            data-allow-clear="true"
                          >
                            <option value="Chat">Chat &nbsp;</option>
                            <option value="Email">EMAIL &nbsp;</option>
                            <option value="FB Comment">
                              FB COMMENT &nbsp;
                            </option>
                            <option value="FB Message">
                              FB MESSAGE &nbsp;
                            </option>
                            <option value="IG Comment">
                              IG COMMENT &nbsp;
                            </option>
                            <option value="IG Message">
                              IG MESSAGE &nbsp;
                            </option>
                            <option value="TW Comment">
                              TW COMMENT &nbsp;
                            </option>
                            <option value="TW Message">
                              TW MESSAGE &nbsp;
                            </option>
                            <option value="Whatsapp">WHATSAPP &nbsp;</option>
                          </select>
                        </div>
                        <div
                          className="input-group input-daterange w-auto"
                          id="bs-datepicker-daterange"
                        >
                          <input
                            type="text"
                            id="date-start"
                            placeholder="DD/MM/YYYY"
                            className="form-control"
                          />
                          <span className="input-group-text">to</span>
                          <input
                            type="text"
                            id="date-end"
                            placeholder="DD/MM/YYYY"
                            className="form-control"
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-primary waves-effect waves-light"
                            id="filter-date"
                          >
                            Go
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="nav-align-top mb-4">
              <ul className="nav nav-pills mb-3 nav-fill" role="tablist">
                <li className="nav-item">
                  <button
                    type="button"
                    className={`py-2 nav-link ${activeTab === 'navs-executive-summary' ? 'active' : ''}`}
                    role="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#navs-executive-summary"
                    aria-controls="navs-executive-summary"
                    aria-selected="true"
                    id="tab-executive"
                    onClick={() => handleTabClick('navs-executive-summary')}
                  >
                    <i className="tf-icons ti ti-stars me-1"></i> Executive
                    Summary
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className={`py-2 nav-link ${activeTab === 'navs-opportunity-for-bussiness' ? 'active' : ''}`}
                    role="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#navs-opportunity-for-bussiness"
                    aria-controls="navs-opportunity-for-bussiness"
                    aria-selected="false"
                    id="tab-opportunity"
                    onClick={() => handleTabClick('navs-opportunity-for-bussiness')}
                  >
                    <i className="tf-icons ti ti-report-money me-1"></i>{" "}
                    Opportunity for Bussiness
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className={`py-2 nav-link ${activeTab === 'navs-problem-identification' ? 'active' : ''}`}
                    role="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#navs-problem-identification"
                    aria-controls="navs-problem-identification"
                    aria-selected="false"
                    id="tab-problem"
                    onClick={() => handleTabClick('navs-problem-identification')}
                  >
                    <i className="tf-icons ti ti-search me-1"></i> Problem
                    Identification
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className={`py-2 nav-link ${activeTab === 'navs-churn-cust-behavior-interaction' ? 'active' : ''}`}
                    role="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#navs-churn-cust-behavior-interaction"
                    aria-controls="navs-churn-cust-behavior-interaction"
                    aria-selected="false"
                    id="tab-curn"
                    onClick={() => handleTabClick('navs-churn-cust-behavior-interaction')}
                  >
                    <i className="tf-icons ti ti-user-exclamation me-1"></i>{" "}
                    Churn Cust Behavior Interaction
                  </button>
                </li>
              </ul>
              <div className="tab-content p-0">
                <div
                  className={`tab-pane fade ${activeTab === "navs-executive-summary" ? "show active" : ''}`}
                  id="navs-executive-summary"
                  role="tabpanel"
                >
                    <ExecutiveTab />
                </div>
                <div
                  className={`tab-pane fade ${activeTab === "navs-opportunity-for-bussiness" ? "show active" : ''}`}
                  id="navs-opportunity-for-bussiness"
                  role="tabpanel"
                >
                    <OpportunityTab />
                </div>
                <div
                  className={`tab-pane fade ${activeTab === "navs-problem-identification" ? "show active" : ''}`}
                  id="navs-problem-identification"
                  role="tabpanel"
                >
                    <IdentificationTab />
                </div>
                <div
                  className={`tab-pane fade ${activeTab === "navs-churn-cust-behavior-interaction" ? "show active" : ''}`}
                  id="navs-churn-cust-behavior-interaction"
                  role="tabpanel"
                >
                    <InteractionTab />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
