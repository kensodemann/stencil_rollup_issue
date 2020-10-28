import { Component, Prop, h } from '@stencil/core';
import 'project-one';
import 'kws-weather-widgets';

@Component({
  tag: 'your-component',
  styleUrl: 'your-component.css',
  shadow: true
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
    return (
      <div>
        <div>
          Your component: <my-component first="Maximan" last="Dudeface" middle="T"></my-component>
        </div>
        <div>
          <kws-temperature temperature={300} scale="C"></kws-temperature>
        </div>
      </div>
    );
  }
}
