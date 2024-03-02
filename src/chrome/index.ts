// Wrapper function for executing functions on a given tab
export const executeScript = (tabId: number, func: any): any => new Promise(resolve => {
    chrome.scripting.executeScript({ target: { tabId }, func }, resolve)
})

// Wrapper function for executing functions on the current tab
// Return the outcome of the function which ran on the tab's context
// 
// Parameters:
// action: Function - The function to be executed on the tab's context
//
export const executeActionOnCurrentTab = async (action: any): Promise<any> => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const data = await executeScript(tab.id!, action)
    return data[0].result
}