
const StartTransactionMsg = (connectorId="", idTag="", meterStart="", reservationId="") => {
    var dicObject = {};

    dicObject["timestamp"] = formatDate(new Date());
    if (connectorId != "") dicObject["connectorId"] = parseInt(connectorId);
    if (idTag != "") dicObject["idTag"] = idTag;
    if (meterStart != "") dicObject["meterStart"] = meterStart * 1;
    if (reservationId != "") dicObject["reservationId"] = reservationId == "" ? 0 : reservationId;

    return dicObject
}

const StopTransactionMsg = (transactionId = "", idTag = "", meterStop = "") => {
    var dicObject = {};
    
    dicObject["timestamp"] = formatDate(new Date());
    if (transactionId != "") dicObject["transactionId"] = parseInt(transactionId);
    if (idTag != "") dicObject["idTag"] = idTag;
    if (meterStop != "") dicObject["meterStop"] = meterStop * 1;

    return dicObject
}

const StatusNotificationMsg = (connectorId = "", status = "", errorCode = "", info = "", vendorId = "", vendorErrorCode = "") => {
    var dicObject = {};

    dicObject["timestamp"] = formatDate(new Date());
    if (connectorId != "") dicObject["connectorId"] = parseInt(connectorId);
    if (status != "") dicObject["status"] = status;
    if (errorCode != "") dicObject["errorCode"] = errorCode;

    return dicObject
}