/**
 * This file was generated from ReactTooltip.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { DynamicValue } from "mendix";

export type ToolTipPositionEnum = "top" | "bottom" | "left" | "right";

export type ToolTipEffectEnum = "solid" | "float";

export type TriggerTypeEnum = "hover" | "click";

export type ToolTipStyleEnum = "dark" | "light" | "info" | "success" | "warning" | "error";

export interface ReactTooltipContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    toolTipTrigger?: ReactNode;
    toolTipId: string;
    toolTipText: DynamicValue<string>;
    toolTipPosition: ToolTipPositionEnum;
    toolTipEffect: ToolTipEffectEnum;
    triggerType: TriggerTypeEnum;
    delayShow: number;
    delayHide: number;
    toolTipStyle: ToolTipStyleEnum;
    enableBorder: boolean;
    textColor: string;
    backgroundColor: string;
    borderColor: string;
    arrowColor: string;
}

export interface ReactTooltipPreviewProps {
    class: string;
    style: string;
    toolTipTrigger: { widgetCount: number; renderer: ComponentType };
    toolTipId: string;
    toolTipText: string;
    toolTipPosition: ToolTipPositionEnum;
    toolTipEffect: ToolTipEffectEnum;
    triggerType: TriggerTypeEnum;
    delayShow: number | null;
    delayHide: number | null;
    toolTipStyle: ToolTipStyleEnum;
    enableBorder: boolean;
    textColor: string;
    backgroundColor: string;
    borderColor: string;
    arrowColor: string;
}
