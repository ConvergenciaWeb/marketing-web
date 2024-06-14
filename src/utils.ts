export function truncate(str:string, n:number):string {
    return (str.length > n) ? str.slice(0, n-1) + '...' : str;
  };

export function readingTime(content:string):number {
    const wordsPerMinute = 150;
    const textLength = content.split(' ').length;
    return Math.ceil(textLength / wordsPerMinute);
}

export function kFormatter(num: number) {
  // @ts-ignore
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}