import {
  OtherStringUtils,
  calculateComplexity,
  toUpperCaseWithCb,
} from "../../app/doubles/OtherUtils";

describe.skip("OtherUtils test suite", () => {

  describe('OtherStringUtils test with spies', () => {
    let sut: OtherStringUtils;

    beforeEach(() => {
      sut = new OtherStringUtils(); 
    })

    test('Use a spy to track calls', () => {
      const toUpperCaseSpy = jest.spyOn(sut, 'topUpperCase');
      sut.topUpperCase('asa');

      expect(toUpperCaseSpy).toBeCalledWith('asa');
    })

    test('Use a spy to track calls to other module', () => {
      const consoleLogSpy = jest.spyOn(sut, 'logString');
      sut.logString('asa');

      expect(consoleLogSpy).toBeCalledWith('asa');
    })

    test('Use a spy to ', () => {
      jest.spyOn(sut as any, 'callExternalService').mockImplementation(() => {
        console.log('calling mocked implementation!')
      });
      (sut as any).callExternalService();
    })
  })

  describe('Tracking callbacks with Jest mocks', () => {
    const callbackMock = jest.fn();

    afterEach(() => {
      jest.clearAllMocks();
    })

    it("calls callback for invalid argument - track calls", () => {
      const actual = toUpperCaseWithCb("", callbackMock);
      expect(actual).toBeUndefined();
      expect(callbackMock).toBeCalledWith('Invalid argument!');
      expect(callbackMock).toBeCalledTimes(1);
    });

    it("calls callback for valid argument - track calls", () => {
      const actual = toUpperCaseWithCb("abc", callbackMock);
      expect(actual).toBe('ABC');
      expect(callbackMock).toBeCalledWith('called function with abc');
      expect(callbackMock).toBeCalledTimes(1);
    });
  });

  describe("tracking callbacks", () => {
    let cbArgs = [];
    let timesCalled = 0;
    function callbackMock(arg: string) {
      cbArgs.push(arg);
      timesCalled++;
    }

    afterEach(() => {
      cbArgs = [];
      timesCalled = 0;
    })

    it("calls callback for invalid argument - track calls", () => {
      const actual = toUpperCaseWithCb("", callbackMock);
      expect(actual).toBeUndefined();
      expect(cbArgs).toContain("Invalid argument!");
      expect(timesCalled).toBe(1);
    });

    it("calls callback for valid argument - track calls", () => {
      const actual = toUpperCaseWithCb("abc", callbackMock);
      expect(actual).toBe("ABC");
      expect(cbArgs).toContain("called function with abc");
      expect(timesCalled).toBe(1);
    });
  });

  it("topUpperCase - calls callback for invalid argument", () => {
    const actual = toUpperCaseWithCb("", () => {});
    expect(actual).toBeUndefined();
  });

  it("topUpperCase - calls callback for valid argument", () => {
    const actual = toUpperCaseWithCb("abc", () => {});
    expect(actual).toBe("ABC");
  });

  it("Calculates complexity", () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: "someInfo",
        field2: "someOtherInfo",
      },
    };

    const actual = calculateComplexity(someInfo as any);
    expect(actual).toBe(10);
  });
});
