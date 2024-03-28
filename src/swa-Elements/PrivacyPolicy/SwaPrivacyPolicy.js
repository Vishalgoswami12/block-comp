import React, { useEffect, useState } from "react"
import SwaPrivacyPolicyCard from "../../swa-blocks/Card/SwaPrivacyPolicyCard";

function SwaPrivacyPolicy(){
    const [privacyPolicyItems, setPrivacyPolicyItems] = useState([]);

  useEffect(() => {
    const fetchDataFromBackend = async () => {
      try {
        const additionalItems = await fetchPrivacyPolicyItemsFromBackend();
                setPrivacyPolicyItems(prevItems => [...prevItems, ...additionalItems]);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchDataFromBackend();
  }, []);

  const fetchPrivacyPolicyItemsFromBackend = () => {
    return new Promise(resolve => {
      const additionalItems = [
        " 12: This is an additional item fetched from the backend.",
        "13: Another additional item fetched from the backend."
      ];
      resolve(additionalItems);
    });
  };
return(
<SwaPrivacyPolicyCard privacyPolicyItems={privacyPolicyItems}/>
)
}
export default SwaPrivacyPolicy;