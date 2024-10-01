function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
}
  
export default function getBudgetForCurrentYear(income, gdp, capita) {
    const year = getCurrentYear();
    return {
        [`income-${year}`]: income,
        [`gdp-${year}`]: gdp,
        [`capita-${year}`]: capita,
    };
}

console.log(getBudgetForCurrentYear(2100, 5200, 1090));