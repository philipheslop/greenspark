import { Widget } from "./widgetUtils";

export interface WidgetComponentProps {
    widget: Widget
}

export const WidgetsComponent:React.FC<WidgetComponentProps> = ({ widget }) => {
    //const setCurrentUser = useContext(CurrentUserContext);
  
    return (
        <div>
            This product {widget.action}
            {widget.type}
            {widget.active? 'active':'inactive'}
            {widget.amount}
            {widget.linked? 'true':'false'}
            {widget.selectedColor}
        </div>
    );
  };