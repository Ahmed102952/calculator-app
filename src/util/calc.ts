export default (input: string): string => {
  let e = input
  if(e === "") {
    return ""
  }
  e = e.replaceAll("^", "**")
  e = e.replaceAll("(-)", "-")
  e = e.replaceAll("²", "**(2)")
  const res: number = (new Function("return " + e)());
  return res.toString()
}