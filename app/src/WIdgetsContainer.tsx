//import { useContext } from "react";
import { useWidgets, Widget } from './widgetUtils';
import { WidgetsComponent } from "./WidgetComponent";
import './WidgetsContainer.css'

export interface WidgetContainerProps {
  processedData: Widget[]
}

export const WidgetsContainer = () => {
  const query = useWidgets();
  const processedData = query.data ? query.data : [];

  return (
    <div className='outer-container'>
      <h1>Per product widgets</h1>
      <hr></hr>
      <div className='widgets-container'>
        {processedData.map((widget: Widget) => {
          return (
            <div key={widget.id}>
              <WidgetsComponent widget={widget}></WidgetsComponent>
            </div>
          );
        })}
      </div>
    </div>
  );
};