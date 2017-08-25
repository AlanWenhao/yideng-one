console.log('测试开始');
describe("第一个测试", function() {
    it("测试加一", function() {
    	expect(PraiseButton().addNum(1,5)).not.toBe(2);
    });
});