import * as React from 'react';
import './App.css';

import {
  Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
} from 'spectacle';

export class App extends React.Component {
  render() {
    return (
      <Deck>
        <Slide>
          <Text>Hello</Text>
        </Slide>
        <Slide>
          <Text>2</Text>
        </Slide>
        <Slide>
          <Text>3</Text>
        </Slide>
      </Deck>
    );
  }
}
