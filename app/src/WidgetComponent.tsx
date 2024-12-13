import React from "react";
import { Widget, WidgetColor, WidgetColourValues, queryClient } from "./widgetUtils";
import { ReactComponent as Logo } from './assets/greensparklogo.svg';
import './WidgetComponent.css'

export interface WidgetComponentProps {
    widget: Widget
}

function adjustBackgroundAndForegroundColour(inputColour: string) {
    return inputColour === 'beige' || inputColour === 'white' ? 'green' : '#F9F9F9'
}

const updateWidgetColour = (id: number, colour: WidgetColor) => {
    queryClient.setQueryData(['widgets'], (widgets: Widget[]) => {
        return widgets.map((widget: Widget) => {
            if (widget.id === id) {
                return {
                    ...widget,
                    selectedColor: colour,
                };
            }
            return widget;
        })
    });
}

const updateWidgetLinked = (id: number, linked: boolean) => {
    queryClient.setQueryData(['widgets'], (widgets: Widget[]) => {
        return widgets.map((widget: Widget) => {
            if (widget.id === id) {
                return {
                    ...widget,
                    linked: linked,
                };
            }
            return widget;
        });
    });
}

const updateWidgetActive = (id: number, active: boolean) => {
    queryClient.setQueryData(['widgets'], (widgets: Widget[]) => {
        return widgets.map((widget: Widget) => {
            if (widget.id === id) {
                return {
                    ...widget,
                    active: active,
                };
            }
            return {
                ...widget,
                active: false,
            }
        });
    });
}

export const WidgetsComponent: React.FC<WidgetComponentProps> = ({ widget }) => {
    return (
        <div className='widget-card'>
            <div style={{ '--widget-colour': widget.selectedColor, '--widget-text-colour': adjustBackgroundAndForegroundColour(widget.selectedColor) } as React.CSSProperties} className='widget-header'>
                <div className="widget-logo">
                    <Logo fill={adjustBackgroundAndForegroundColour(widget.selectedColor)}></Logo>
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
            <div className="widget-body">
                <div className="widget-body-item-l">
                    Link to Public Profile
                    <span className="widget-link-info">&#9432;
                        <span className="tooltiptext">
                            This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.
                            <br></br>
                            <br></br>
                            <a href="http://www.google.com">View Public Profile</a>
                        </span>
                    </span>
                </div>
                <div className="widget-body-item-r">
                    <input type="checkbox" className="check_box" id={"checkbox" + widget.id} checked={widget.linked} onChange={() => updateWidgetLinked(widget.id, !widget.linked)} />
                    <label className="check_box_label" htmlFor={"checkbox" + widget.id} />
                </div>
                <div className="widget-body-item-l">Badge Colour</div>
                <div className="widget-body-item-r">
                    <div className='widget-palette'>
                        {WidgetColourValues.map((colour: WidgetColor) => {
                            return (
                                <div
                                    key={colour + "_" + widget.id}
                                    style={
                                        {
                                            '--palette-colour': colour,
                                            '--selected-border': widget.selectedColor === colour ? '3px' : '0px'
                                        } as React.CSSProperties
                                    } className='widget-palette-element'
                                    onClick={() => updateWidgetColour(widget.id, colour)}>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="widget-body-item-l">Active badge</div>
                <div className="widget-body-item-r">
                    <input type="checkbox" className="toggle" id={"toggle" + widget.id} checked={widget.active} onChange={() => updateWidgetActive(widget.id, !widget.active)} />
                    <label className="toggle_label" htmlFor={"toggle" + widget.id} />
                </div>
            </div>
        </div>
    );
};