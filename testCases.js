describe("repeat", function () {
    var input1 = `08-Jun-2012 1:00 AM 4ABCDEFGHI
10-Jun-2012 1:00 AM 4ABCDEFGHI
11-Jun-2012 1:00 AM 4ABCDEFGHI
12-Jun-2012 2:12 AM 4ABCDEFGHI`;

    var input2 = `08-Jun-2012 1:00 AM 4ABCDEFGHI
10-Jun-2012 1:00 AM 4ABCDEFGHI
12-Jun-2012 1:00 AM 4ABCDEFGHI
14-Jun-2012 2:12 AM 4ABCDEFGHI`;

    var input3 = `08-Jun-2012 1:00 AM 1ABCDEFGHI
09-Jun-2012 1:00 AM 1ABCDEFGHI
09-Jun-2012 9:23 AM 1ABCDEFGHI`;

    it("customer does not come daily should not return", function () {
        expect(getRepeatedCustomers(input2, 3).length).toBe(0);
    });

    it("customer comes daily 3 days should return", function () {
        expect(getRepeatedCustomers(input1, 3).length).toBe(1);
    })

    it("customer comes daily 2 days should return", function () {
        expect(getRepeatedCustomers(input3, 2).length).toBe(1);
    })
});