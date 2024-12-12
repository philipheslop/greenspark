//import { useContext } from "react";
import { Widget } from './widgetUtils';
import { WidgetsComponent } from "./WidgetComponent";

export interface WidgetContainerProps {
    processedData: Widget[]
}

export const WidgetsContainer:React.FC<WidgetContainerProps> = ({ processedData }) => {
  //const setCurrentUser = useContext(CurrentUserContext);

  return (
    <div>
        <h1>Per product widgets</h1>
      {processedData.map((widget:Widget) => {
        return (
          <div>
            <WidgetsComponent widget={widget}></WidgetsComponent>
          </div>
        );
      })}
    </div>
  );
};