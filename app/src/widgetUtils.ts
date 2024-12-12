export type WidgetType = 'carbon' | 'plastic bottles' | 'trees';
export type WidgetAction = 'collects' | 'plants' | 'offsets';
export type WidgetColor = 'white' | 'black' | 'blue' |'green' | 'beige';

export interface Widget {
  id: number;
  type: WidgetType;
  amount: number;
  action: WidgetAction;
  active: boolean;
  linked: boolean;
  selectedColor: WidgetColor;
}
  
export async function getWidgets(): Promise<Widget[]> {
  return (
    await fetch("https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets")
  ).json();
}