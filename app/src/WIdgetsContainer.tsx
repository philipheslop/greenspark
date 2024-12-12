//import { useContext } from "react";
import { Widget } from './widgetUtils';
import { WidgetsComponent } from "./WidgetComponent";
import './WidgetsContainer.css'

export interface WidgetContainerProps {
    processedData: Widget[]
}

export const WidgetsContainer:React.FC<WidgetContainerProps> = ({ processedData }) => {
  //const setCurrentUser = useContext(CurrentUserContext);

  return (
    <div className='outer-container'>
        <h1>Per product widgets</h1>
        <hr></hr>
        <div className='widgets-container'>
        {processedData.map((widget:Widget) => {
            return (
            <div>
                <WidgetsComponent widget={widget}></WidgetsComponent>
            </div>
            );
        })}
      </div>
    </div>
  );
};