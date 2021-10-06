import { Children, Component, ReactNode, createElement } from "react";
import ReactTooltip, { Effect, Type, Place } from "react-tooltip";

export interface ReactTooltipProps {
    toolTipId: string;
    toolTipText: string;
    toolTipPosition: Place;
    toolTipEffect: Effect;
    toolTipStyle: Type;
    triggerType: string;
    delayShow: number;
    delayHide: number;
    enableBorder: boolean;
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    arrowColor?: string;
    html: boolean;
}

export class Tooltip extends Component<ReactTooltipProps> {
    createBootstrapTooltipIcon(): ReactNode {
        return <span className="glyphicon glyphicon-question-sign"></span>;
    }

    render(): ReactNode {
        return (
            <div>
                <span
                    data-tip={this.props.toolTipText}
                    data-for={this.props.toolTipId}
                    data-event={this.props.triggerType === "click" ? "click" : null}
                >
                    {Children.count(this.props.children) === 0
                        ? this.createBootstrapTooltipIcon()
                        : this.props.children}
                </span>

                <ReactTooltip
                    id={this.props.toolTipId}
                    place={this.props.toolTipPosition}
                    effect={this.props.toolTipEffect}
                    type={this.props.toolTipStyle}
                    globalEventOff={this.props.triggerType === "click" ? "click" : undefined}
                    multiline={!this.props.html}
                    delayHide={this.props.delayHide}
                    delayShow={this.props.delayShow}
                    border={this.props.enableBorder || !!this.props.borderColor}
                    textColor={this.props.textColor}
                    backgroundColor={this.props.backgroundColor}
                    borderColor={this.props.borderColor}
                    arrowColor={this.props.arrowColor}
                    html={this.props.html}
                />
            </div>
        );
    }
}
