/* 윈도우에서 사용하는 경우 window.navigator.userAgentData['brands'][1]['brand'] 을 통해서도 확인할 수 있다.*/
const agent = window.navigator.userAgent.toLowerCase();
let browserName;
switch (true) {
    case agent.indexOf("edge") > -1:
        browserName = "MS Edge";
        break;
        case agent.indexOf("edg/") > -1:
        browserName = "Edge (chromium based)";
        break;
        case agent.indexOf("opr") > -1:
        browserName = "Opera";
        break;
        case agent.indexOf("chrome") > -1:
        browserName = "Chrome";
        break;
        case agent.indexOf("trident") > -1:
        browserName = "MS IE";
        break;
        case agent.indexOf("firefox") > -1:
        browserName = "Mozilla Firefox";
        break;
        case agent.indexOf("safari") > -1:
        browserName = "Safari";
        break;
        default:agentbrowserName = "other";
}
console.log(browserName);