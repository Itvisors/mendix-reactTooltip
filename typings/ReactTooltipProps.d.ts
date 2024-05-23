/**
 * This file was generated from ReactTooltip.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
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
    tabIndex?: number;
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
    arrowColor: string;
}

export interface ReactTooltipPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    toolTipTrigger: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    toolTipId: string;
    toolTipText: string;
    toolTipPosition: ToolTipPositionEnum;
    toolTipEffect: ToolTipEffectEnum;
    triggerType: TriggerTypeEnum;
    delayShow: number | null;
    delayHide: number | null;
    toolTipStyle: ToolTipStyleEnum;
    enableBorder: boolean;
    arrowColor: string;
}
