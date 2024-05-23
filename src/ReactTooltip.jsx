import { Component, createElement } from "react";

import { TooltipUI } from "./components/TooltipUI";

export default class ReactTooltip extends Component {
    addLinebreaks(text) {
        return text.replace(/(\n)+/g, "<br/>");
    }

    render() {
        const {
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
                toolTipText={toolTipText.status === "available" ? this.addLinebreaks(toolTipText.value) : ""}
                toolTipPosition={toolTipPosition}
                toolTipEffect={toolTipEffect}
                toolTipStyle={toolTipStyle}
                triggerType={triggerType}
                delayShow={delayShow}
                delayHide={delayHide}
                enableBorder={enableBorder}
                arrowColor={arrowColor}
            >
                {toolTipTrigger}
            </TooltipUI>
        );
    }
}
