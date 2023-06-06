export const parameterizedString = (...args: string[]): string => {
    const str: string = args[0];
    const params: string[] = args.filter((_, index: number) => index > 0);
    return !str ? '' : str.replace(/%s[0-9]+/g, (matchedStr: string) => {
      const variableIndex = +matchedStr.replace('%s', '') - 1;
      return params[variableIndex];
    });
  };