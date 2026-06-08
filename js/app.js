window.addEventListener(
    "DOMContentLoaded",
    async () => {

        const response =
            await fetchFundData();

        loadFundDetails(response);

        renderReturns(
            response.data
        );

        renderChart(
            response.data
        );

    }
);