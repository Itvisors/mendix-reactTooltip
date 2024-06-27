import { Children, Component, createElement } from "react";
import { Tooltip } from "react-tooltip";

import "../ui/ReactTooltip.css";

export class TooltipUI extends Component {
    createBootstrapTooltipIcon() {
        return <span className="glyphicon glyphicon-question-sign"></span>;
    }

    render() {
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
                    style={this.props.style}
                    className={this.props.className}
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
