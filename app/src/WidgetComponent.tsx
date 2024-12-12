import React from "react";
import { Widget, WidgetColourValues } from "./widgetUtils";
import { ReactComponent as Logo } from './assets/greensparklogo.svg';
import './WidgetComponent.css'

export interface WidgetComponentProps {
    widget: Widget
}

function adjustColour( inputColour: string) {
    return inputColour === 'beige' || inputColour === 'white' ? 'green' : '#F9F9F9'
}

export const WidgetsComponent:React.FC<WidgetComponentProps> = ({ widget }) => {
    //const setCurrentUser = useContext(CurrentUserContext);
    return (
        <div className='widget-card'>
            <div style={{'--widget-colour': widget.selectedColor, '--widget-text-colour': adjustColour(widget.selectedColor)} as React.CSSProperties} className='widget-header'>
                <div className="widget-logo">
                <Logo fill={adjustColour(widget.selectedColor)}></Logo>
                </div>
                <div className='widget-header-title-elements'>
                    <div className='widget-header-title'>
                        This product {widget.action}
                    </div>
                    <div className='widget-header-sub-title'>
                        {widget.amount} {widget.type}
                    </div>
                </div>
            </div>
            {widget.active? 'active':'inactive'}
            {widget.linked? 'true':'false'}
            {widget.selectedColor}
            <div className = 'widget-palette'>
                Badge Colour: 
                {WidgetColourValues.map((colour:string) => {
                    return (
                        <div style={{'--palette-colour': colour, '--selected-border': widget.selectedColor === colour ? '3px' : '0px'} as React.CSSProperties} className = 'widget-palette-element' ></div>
                    );
                })}
            </div>
        </div>
    );
  };