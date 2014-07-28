/**
 * Created by jiangfeng on 14-7-28.
 */
describe("A suite of basic functions", function() {
  it("reverse word",function(){
    expect("DCBA").toEqual(reverse("ABCD"));
  });
});