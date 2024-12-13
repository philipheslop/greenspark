import { QueryClient, useQuery } from "@tanstack/react-query";

export type WidgetType = "carbon" | "plastic bottles" | "trees";
export type WidgetAction = "collects" | "plants" | "offsets";
export const WidgetColourValues = [
  "blue",
  "white",
  "black",
  "green",
  "beige",
] as const;

export type WidgetColor = (typeof WidgetColourValues)[number];

export interface Widget {
  id: number;
  type: WidgetType;
  amount: number;
  action: WidgetAction;
  active: boolean;
  linked: boolean;
  selectedColor: WidgetColor;
}

export const queryClient = new QueryClient();

export async function getWidgets(): Promise<Widget[]> {
  return (
    await fetch(
      "https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets"
    )
  ).json();
}

export const useWidgets = () => {
  return useQuery<Widget[]>({
    queryKey: ["widgets"],
    queryFn: getWidgets,
  });
};
