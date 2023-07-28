export const formatTime = (time: string) => {
  return `${new Date(time).toUTCString()}`;
};
