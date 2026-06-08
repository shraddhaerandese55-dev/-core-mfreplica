function calculateReturn(currentNav, oldNav){

    return (
        ((currentNav - oldNav) / oldNav) * 100
    ).toFixed(2);

}