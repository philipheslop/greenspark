import { Widget } from "./widgetUtils";
import { ReactComponent as Logo } from './assets/greensparklogo.svg';
import './WidgetComponent.css'

export interface WidgetComponentProps {
    widget: Widget
}

export const WidgetsComponent:React.FC<WidgetComponentProps> = ({ widget }) => {
    //const setCurrentUser = useContext(CurrentUserContext);
  
    return (
        <div className='WidgetCard'>
            <div></div>
            <Logo fill={widget.selectedColor === 'beige' || widget.selectedColor === 'white' ? 'green' : '#F9F9F9'}></Logo>
            This product {widget.action}
            {widget.type}
            {widget.active? 'active':'inactive'}
            {widget.amount}
            {widget.linked? 'true':'false'}
            {widget.selectedColor}
        </div>
    );
  };