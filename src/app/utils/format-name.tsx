function formatName(pathName: string) {
  const name = pathName.slice(1);
  let formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  const maxLength = 20;

  //name longer than maxLength characters gets cutted to maxLength
  if (formattedName.length > maxLength) {
    formattedName = formattedName.slice(0, maxLength);
  }

  return formattedName;
}

export default formatName;
