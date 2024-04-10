function createDecorator(folderName: string) {
  return function (target: any) {
    target.__folderName__ = folderName;
  };
}

export default createDecorator;
