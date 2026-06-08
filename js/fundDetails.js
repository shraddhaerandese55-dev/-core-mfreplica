function loadFundDetails(response){

    document.getElementById("fundName")
        .textContent =
        response.meta.scheme_name;

    document.getElementById("navValue")
        .textContent =
        `₹ ${response.data[0].nav}`;

    document.getElementById("navDate")
        .textContent =
        response.data[0].date;

}