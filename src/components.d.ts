/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyPullQuote {
        /**
          * The author of quote
         */
        "author": string;
    }
}
declare global {
    interface HTMLMyPullQuoteElement extends Components.MyPullQuote, HTMLStencilElement {
    }
    var HTMLMyPullQuoteElement: {
        prototype: HTMLMyPullQuoteElement;
        new (): HTMLMyPullQuoteElement;
    };
    interface HTMLElementTagNameMap {
        "my-pull-quote": HTMLMyPullQuoteElement;
    }
}
declare namespace LocalJSX {
    interface MyPullQuote {
        /**
          * The author of quote
         */
        "author"?: string;
    }
    interface IntrinsicElements {
        "my-pull-quote": MyPullQuote;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-pull-quote": LocalJSX.MyPullQuote & JSXBase.HTMLAttributes<HTMLMyPullQuoteElement>;
        }
    }
}