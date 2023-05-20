import { v4 } from "uuid";

export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: object | undefined;
};

type LoggerServiceCallBack = (arg: string) => void;

export function calculateComplexity(stringInfo: stringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCase(arg: string) {
  return arg.toUpperCase();
}

export function toLowerCaseWithId(arg: string) {
  return arg.toLowerCase() + v4();
}

export function toUpperCaseWithCb(arg: string, callBack: LoggerServiceCallBack) {
  if (!arg) {
    callBack('Invalid argument!');
    return;
  }

  callBack(`called function with ${arg}`);
  return arg.toUpperCase();
}

export class OtherStringUtils {
  private callExternalService () {
    console.log('Calling external method')
  }

  public topUpperCase(arg: string) {
    return arg.toUpperCase()
  }

  public logString(arg: string) {
    console.log(arg)
  }
}