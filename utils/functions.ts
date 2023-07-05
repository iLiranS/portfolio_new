
export const convertDateToString = (dateString:any) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'xx-xx-xxxx';

    let day: string | number = date.getDate();
    if (day < 10) day = '0' + day.toString();

    let month: string | number = date.getMonth() + 1;
    if (month < 10) month = '0' + month.toString();

    const year = date.getFullYear();
    const formattedDate = day + '-' + month + '-' + year;  
    return formattedDate;
};