function renderChart(data){

    const labels =
        data
        .slice(0,100)
        .map(item => item.date)
        .reverse();

    const values =
        data
        .slice(0,100)
        .map(item => item.nav)
        .reverse();

    new Chart(
        document.getElementById(
            "navChart"
        ),
        {
            type:"line",

            data:{
                labels:labels,

                datasets:[
                    {
                        label:"NAV",
                        data:values,
                        borderColor:"#0a4b8c",
                        fill:false
                    }
                ]
            },

            options:{
                responsive:true
            }
        }
    );

}