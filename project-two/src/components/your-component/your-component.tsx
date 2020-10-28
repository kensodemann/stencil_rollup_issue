import { Component, Prop, h } from '@stencil/core';
import 'project-one'

@Component({
  tag: 'your-component',
  styleUrl: 'your-component.css',
  shadow: true,
})
export class YourComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  render() {
    return <div>Your component: <my-component></my-component> </div>;
  }
}
