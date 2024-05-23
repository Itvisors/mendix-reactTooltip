import { Children, Component, ReactNode, createElement } from "react";
import { PlacesType, Tooltip, VariantType } from "react-tooltip";

export interface ReactTooltipProps {
    toolTipId: string;
    toolTipText: string;
    toolTipPosition: PlacesType;
    toolTipStyle: VariantType;
    toolTipEffect: String;
    triggerType: string;
    delayShow: number;
    delayHide: number;
    enableBorder: boolean;
    arrowColor?: string;
    children?: any;
}

export class TooltipUI extends Component<ReactTooltipProps> {
    createBootstrapTooltipIcon(): ReactNode {
        return <span className="glyphicon glyphicon-question-sign"></span>;
    }

    render(): ReactNode {
        return (
            <div>
                <span
                    data-tooltip-content={this.props.toolTipText}
                    data-tooltip-id={this.props.toolTipId}
                    data-tooltip-variant={this.props.toolTipStyle}
                    data-tooltip-float={this.props.toolTipEffect === "float"}
                >
                    {Children.count(this.props.children) === 0
                        ? this.createBootstrapTooltipIcon()
                        : this.props.children}
                </span>

                <Tooltip
                    id={this.props.toolTipId}
                    place={this.props.toolTipPosition}
                    events={this.props.triggerType === "click" ? ["click"] : ["hover"]}
                    delayHide={this.props.delayHide}
                    delayShow={this.props.delayShow}
                    border={this.props.enableBorder ? "1px solid white" : undefined}
                    arrowColor={this.props.arrowColor}
                />
            </div>
        );
    }
}
