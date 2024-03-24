import { IUISingers } from "../types/singersModel";

export const handleConvertSingersData = (data: any[]) => {
  const returnData: IUISingers[] = [];
  data.map((ele) =>
    returnData.push({
      albumsCount: ele.albumsCount,
      amount: ele.amount,
      id: ele.id,
      name: ele.name,
      songsCount: ele.songsCount,
      isselected: false,
    })
  );

  return returnData;
};
