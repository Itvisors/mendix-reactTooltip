import { Component, ReactNode, createElement } from "react";
import { ValueStatus } from "mendix";

import { ReactTooltipContainerProps } from "../typings/ReactTooltipProps";
import { TooltipUI } from "./components/TooltipUI";

export default class ReactTooltip extends Component<ReactTooltipContainerProps> {
    addLinebreaks(text: string): string {
        return text.replace(/(\n)+/g, "<br/>");
    }

    render(): ReactNode {
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
                toolTipText={toolTipText.status === ValueStatus.Available ? this.addLinebreaks(toolTipText.value) : ""}
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
