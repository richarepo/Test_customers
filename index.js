
var input = `08-Jun-2012 1:00 AM 4ABCDEFGHI
09-Jun-2012 1:00 AM 1ABCDEFGHI
09-Jun-2012 9:23 AM 3ABCDEFGHI
10-Jun-2012 1:00 AM 2ABCDEFGHI
10-Jun-2012 2:03 AM 2ABCDEFGHI
10-Jun-2012 1:00 AM 1ABCDEFGHI
10-Jun-2012 7:23 AM 3ABCDEFGHI
10-Jun-2012 9:23 AM 3ABCDEFGHI
11-Jun-2012 1:00 AM 1ABCDEFGHI
11-Jun-2012 2:12 AM 2ABCDEFGHI
11-Jun-2012 8:23 AM 3ABCDEFGHI
12-Jun-2012 10:21 PM 1ABCDEFGHI`;


function getRepeatedCustomers(input, times) {
	let customers = {};
    var a = input.split("\n");
    for(var i = 0; i < a.length; i++){
        let str = a[i];
        let cid = str.substring(str.length-10)
        let cdate = new Date (str.substring(0,11));
        if(customers[cid]){
            var customer = customers[cid];
            if(customer.days < times ){
                let timediff =  cdate - customer.date ;
                if(timediff == 86400000){
                    customer.days++;
                    customer.date = cdate;
                }
                else if(timediff!==0){
                    customer.date = cdate;
                    customer.days = 1;
                }
            }
        }else{
            customers[cid]={"date": cdate, "days":1};
        }
    }
    var result = [];
    for(var propName in customers) {
        if(customers[propName].days >= times){
            result.push(propName);
        }
    }
    return result;
}