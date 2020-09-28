import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-pull-quote',
  styleUrl: 'my-pull-quote.css',
  shadow: true,
})
export class MyPullQuote {
  /**
   * The author of quote
   */
  @Prop() author: string;

  render() {
    const { author } = this;
    return (
      <Host>
        <div class="content">
          <slot />
        </div>
        <div>--{author}</div>
      </Host>
    );
  }
}
