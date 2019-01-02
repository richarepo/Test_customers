/*
Provide several examples that call your function and demonstrate that it works.
Provide the average runtime and space complexity (memory usage), and worst-case runtime
and space complexity for your solution, and a short explanation as to why.
State any assumptions you make for your solution.
Question:
Given an access log for a feature, output the customer ids of repeat customers who have visited on 3 or
more consecutive days. Each line of the access log is tab delimited with two fields: the timestamp of
when the customer visited, and the customer id (a 10 byte string). The feature writes an entry to the log
file as it gets the hits. Below is an example log file.
In this example, the 3-consecutive-day repeat customers are "1ABCDEFGHI" and "3ABCDEFGHI". The
result that your program generates will be these two customer ids.
*/


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



var output = myFunction(input)

function myFunction(input) {
	let customers = {};
    var a = input.split("\n");
    for(var i = 0; i < a.length; i++){
        let str = a[i];
        let cid = str.substring(str.length-10)
        let cdate = new Date (str.substring(0,11));
        if(customers[cid]){
            var customer = customers[cid];
            if(customer.days<3){
                let timediff =  cdate - customer.date ;
                console.log("timediff",timediff);
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
    console.log("customers ", customers);
    for(var propName in customers) {
        if(customers[propName].days>=3){
            console.log(propName);
        }
    
    }
}

// myFunctionTest() {

// ...write automated test here...

// }