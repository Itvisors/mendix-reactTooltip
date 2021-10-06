import { Component, ReactNode, createElement } from "react";
import { ValueStatus } from "mendix";

import { ReactTooltipContainerProps } from "../typings/ReactTooltipProps";
import { Tooltip } from "./components/Tooltip";
import "./ui/ReactTooltip.css";

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
            textColor,
            backgroundColor,
            borderColor,
            arrowColor,
            html
        } = this.props;

        return (
            <Tooltip
                toolTipId={toolTipId}
                toolTipText={toolTipText.status === ValueStatus.Available ? this.addLinebreaks(toolTipText.value) : ""}
                toolTipPosition={toolTipPosition}
                toolTipEffect={toolTipEffect}
                toolTipStyle={toolTipStyle}
                triggerType={triggerType}
                delayShow={delayShow}
                delayHide={delayHide}
                enableBorder={enableBorder}
                textColor={textColor}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
                arrowColor={arrowColor}
                html={html}
            >
                {toolTipTrigger}
            </Tooltip>
        );
    }
}
