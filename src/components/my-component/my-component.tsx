import { Component, Prop, h } from '@stencil/core';
import { StandardInterface } from './StandardInterface';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent implements StandardInterface {
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

  headline:string = "Initial Headline";

  constructor() {
    this.headline = "Headline Changed";
  }

  render() {
    console.log("Expected: headline would render as Headline Changed");
    return <div>{this.headline}</div>;
  }
}
