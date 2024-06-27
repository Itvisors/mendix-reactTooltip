import { Component, createElement } from "react";

import { TooltipUI } from "./components/TooltipUI";

export default class ReactTooltip extends Component {
    render() {
        const {
            class: className,
            style,
            toolTipTrigger,
            toolTipId,
            toolTipText,
            toolTipPosition,
            toolTipEffect,
            triggerType,
            delayShow,
            delayHide,
            toolTipStyle,
            enableBorder,
            arrowColor
        } = this.props;

        return (
            <TooltipUI
                toolTipId={toolTipId}
                toolTipText={toolTipText.status === "available" ? toolTipText.value : ""}
                toolTipPosition={toolTipPosition}
                toolTipEffect={toolTipEffect}
                toolTipStyle={toolTipStyle}
                triggerType={triggerType}
                delayShow={delayShow}
                delayHide={delayHide}
                enableBorder={enableBorder}
                arrowColor={arrowColor}
                className={className}
                style={style}
            >
                {toolTipTrigger}
            </TooltipUI>
        );
    }
}
