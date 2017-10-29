import React from 'react';

import Section from './Section';
import { ItemList, Item } from './widget/ItemList';

export default function Skills(props) {
  return (
    <Section icon="/images/ic_wb_incandescent_black_24px.svg" title="Skills">
      <ItemList>
        <Item text="Node.js" />
        <Item text="TypeScript" />
        <Item text="HTML 5+" />
        <Item text="CSS 3+" />
        <Item text="React / Redux" />
        <Item text="MySQL" />
        <Item text="MongoDB" />
        <Item text="Redis" />
        <Item text="REST" />
        <Item text="Git" />
        <Item text="Electron" />
        <Item text="AWS" />
        <Item text="Unit Testing & TDD" width="100%" />
        <Item text="Regular Expressions" width="100%" />
        <Item text="Object oriented & Functional programming" width="100%" />
      </ItemList>
    </Section>
  );
}
