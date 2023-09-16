import React, { useEffect, useState } from "react";
import { dataSetForBasicData } from "../../ImportFiles";

const ServiceDataFunction = ({ dataForServiceTabs, servicesData }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(
    servicesData.productsInServices
  );

  useEffect(() => {
    // Set the "All" tab as active on component mount
    setActiveTab("all");
  }, []);

  

  useEffect(() => {
    // Update filtered products when active tab changes
    if (activeTab === "all") {
      setFilteredProducts(servicesData.productsInServices);
    } else {
      const filtered = servicesData.productsInServices.filter(
        (item) => item.product.CategoryTypeId === activeTab
      );
      setFilteredProducts(filtered);
    }
  }, [activeTab, servicesData.productsInServices]);

  const handleTabClick = (event, tabId) => {
    event.preventDefault();
    setActiveTab(tabId);
  };

  const renderCards = (products) => {
    return products.map((item) => (
      <div
        className="col-12 col-lg-3 col-md-4 col-sm-6 mb-3"
        customAttrForImages={item.product.CategoryTypeId}
        key={item.product.id}
      >
        <div className="card">
          <div className="card-body text-center">
            <h4 className="card-title">{item.product.name}</h4>
            <img
              className="card-img-bottom"
              src={item.product.fileName}
              alt="Card image"
              height="519.2px"
              width="519.2px"
            />
            <a
              href={`https://wa.me/91${dataSetForBasicData.WhatsAppNumber}/?text=Hi%20I%20want%20to%20know%20about%20*${item.product.name}*.%20${encodeURIComponent(
                `https://${dataSetForBasicData.MainHositingName}/${dataSetForBasicData.FolderName}`
              )}`}
              className="btn btn-success"
            >
              <i className="fab fa-whatsapp pr-1"></i> Inquire Now
            </a>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <ul className="nav tabs">
        <li className={`nav-item ${activeTab === "all" ? "active" : ""}`}>
          <a
            className="nav-link"
            href="#tab-all"
            onClick={(event) => handleTabClick(event, "all")}
          >
            All
          </a>
        </li>
        {dataForServiceTabs.productsTabsInServices.map((tab) => (
          <li
            className={`nav-item ${activeTab === tab.productTab.id ? "active" : ""}`}
            key={tab.productTab.id}
          >
            <a
              className="nav-link"
              href={`#${tab.productTab.CategoryTypeId}`}
              onClick={(event) => handleTabClick(event, tab.productTab.id)}
            >
              {tab.productTab.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content mt-3">
        <div
          className={`tab-pane fade ${activeTab === "all" ? "show active" : ""}`}
          id="tab-all"
        >
          <div className="row">{renderCards(filteredProducts)}</div>
        </div>
        {dataForServiceTabs.productsTabsInServices.map((tab) => (
          <div
            className={`tab-pane fade ${
              activeTab === tab.productTab.id ? "show active" : ""
            }`}
            id={`tab-${tab.productTab.CategoryTypeId}`}
            key={tab.productTab.id}
          >
            <div className="row">
              {renderCards(
                filteredProducts.filter(
                  (item) => item.product.CategoryTypeId === tab.productTab.id
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceDataFunction;
