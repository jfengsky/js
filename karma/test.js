// API:http://jasmine.github.io/2.0/introduction.html

describe('a suite', function(){
  it('contains spec with an expectation', function(){
    var a = 12;
    var b = a;

    expect(a).toBe(b);
    expect(a).not.toBe(null);
  })

//  it("reduce test", function() {
//    expect(2).toEqual(reduce(4,2));
//  });
})