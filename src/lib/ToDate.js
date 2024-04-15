export default function ToDate(timestamp){
    const date = new Date(timestamp)
    const dateFormat = date.getDate() +
    "/"+(date.getMonth() > 8 ? date.getMonth()+1 : "0" + (date.getMonth()+1) )+
    "/"+date.getFullYear()+
    " "+date.getHours()+
    ":"+date.getMinutes()
    return dateFormat;
}