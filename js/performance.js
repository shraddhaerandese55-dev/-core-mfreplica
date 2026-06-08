function getReturn(data, days){

    if(data.length <= days){
        return "N/A";
    }

    const current =
        parseFloat(data[0].nav);

    const previous =
        parseFloat(data[days].nav);

    return calculateReturn(
        current,
        previous
    ) + "%";
}

function renderReturns(data){

    const periods = [
        {
            label:"1 Month",
            days:30
        },
        {
            label:"3 Months",
            days:90
        },
        {
            label:"6 Months",
            days:180
        },
        {
            label:"1 Year",
            days:365
        }
    ];

    const table =
        document.getElementById(
            "returnsTable"
        );

    periods.forEach(period => {

        table.innerHTML += `
        <tr>
            <td>${period.label}</td>
            <td>${getReturn(data, period.days)}</td>
        </tr>
        `;

    });

}