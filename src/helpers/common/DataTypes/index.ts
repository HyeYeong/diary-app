export const TAG_NAME = {
  todo: "할일",
  dairy: "일기",
  memo: "메모",
};

export type sortNames = keyof typeof TAG_NAME;

export type DailyDataItemType = {
  id: number;
  title: string;
  comment: string;
  sort: sortNames;
  score: number;
  date: string
};

export type tagType = "all" | "todo" | "dairy" | "memo";
