export function classesNames(...arg:any[]):string{
  return arg.filter(Boolean).join("");
}