export const getUserDisplayName = async () => {
    console.log("getUserDisplayName")

    const xpath = "/html/body/div[4]/div[3]/div/div/div[2]/div/div/main/section[1]/div[2]/div[2]/div[1]/div[1]/span/a/h1"

    // Evaluate the XPath expression
    const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    
    // Check if an element is found
    if (result.singleNodeValue !== null) {
        // Access the found element
        const element = result.singleNodeValue;
        console.log(element);
        return element.textContent;
    } else {
        console.log("Element not found");
        return "Element not found";
    }
}