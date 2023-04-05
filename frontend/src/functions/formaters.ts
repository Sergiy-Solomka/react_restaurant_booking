
export const dateStringForm = (arg:Date) =>{
  const day = arg.getDate() < 10 ? '0' + arg.getDate() : arg.getDate();
  const month = arg.getMonth() + 1 < 10 ? '0' + (arg.getMonth() + 1) : arg.getMonth() + 1;
  return  day + '/' + month + '/' + arg.getFullYear();
}