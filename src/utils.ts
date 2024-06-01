export function truncate(str:string, n:number):string {
    return (str.length > n) ? str.slice(0, n-1) + '...' : str;
  };

export function readingTime(content:string):number {
    const wordsPerMinute = 150;
    const textLength = content.split(' ').length;
    return Math.ceil(textLength / wordsPerMinute);
}