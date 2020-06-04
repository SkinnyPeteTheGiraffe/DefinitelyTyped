// Type definitions for react-grid-system v6.4.2
// Project: https://github.com/sealninja/react-grid-system
// Definitions by: Bobby Plunkett <https://github.com/SkinnyPeteTheGiraffe/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/index.d.ts"/>

declare module 'react-grid-system' {
    export interface ReactGridSystemBreakPoints {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    }
    export interface ReactGridSystemVisibilityProps {
        children?: React.ReactNode;
        xs?: boolean;
        sm?: boolean;
        md?: boolean;
        lg?: boolean;
        xl?: boolean;
    }
    export interface ReactGridSystemScreenClassRenderProps {
        render: Function;
    }
    export interface ReactGridSystemScreenClassProviderProps {
        children: React.ReactNode;
        fallbackScreenClass?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
        useOwnWidth?: boolean
    }
    export interface ReactGridSystemContainerProps {
        children?: React.ReactNode;
        component?: React.ReactNode;
        fluid?: boolean;
        xs?: boolean;
        sm?: boolean;
        md?: boolean;
        lg?: boolean;
        xl?: boolean;
    }
    export interface ReactGridSystemRowProps {
        children?: React.ReactNode | React.ReactNode[];
        align?: 'normal' | 'start' | 'center' | 'end' | 'stretch';
        component?: React.ReactNode;
        debug?: boolean;
        gutterWidth?: number;
        justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'initial' | 'inherit';
        nogutter?: boolean;
        nowrap?: boolean;
        style?: any;
    }
    export interface ReactGridSystemColProps {
        children?: React.ReactNode;
        component?: React.ReactNode;
        xs?: number | 'content';
        sm?: number | 'content';
        md?: number | 'content';
        lg?: number | 'content';
        xl?: number | 'content';
        width?: number | 'content';
        style?: any;
        offset?: ReactGridSystemBreakPoints;
        push?: ReactGridSystemBreakPoints;
        pull?: ReactGridSystemBreakPoints;
        debug?: boolean;
    }

    export class Container extends React.Component<ReactGridSystemContainerProps> {}
    export class Row extends React.Component<ReactGridSystemRowProps> {}
    export class Col extends React.Component<ReactGridSystemColProps> {}
    export class Hidden extends React.Component<ReactGridSystemVisibilityProps> {}
    export class Visible extends React.Component<ReactGridSystemVisibilityProps> {}
    export class ScreenClassRender extends React.Component<ReactGridSystemScreenClassRenderProps> {}
    export class ScreenClassProvider extends React.Component<ReactGridSystemScreenClassProviderProps> {}
}
