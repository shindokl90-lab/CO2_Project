function LoadAll()
{
    d3.json("/loadall").then(response => {
        console.log(countrytotals)
        // push data to vars for html or use directly to build chart


function LoadOne()
{
    d3.json("/loadone").then(response => {
        console.log(singlecountry)
    })
}