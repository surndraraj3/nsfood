import React from "react";
import CONFIG from "./config";

export const LoadHomePageData = async() => {
    try {
        let response = await fetch(`${CONFIG.productApiUrls.getProductsUrl}`);
        let jsonResp = await response.json();
        return jsonResp;
    } catch (error) {
        console.error(error);
    }
}
 