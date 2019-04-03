import React from 'react';

import Section from './Section';
import { ItemList, Item } from './widget/ItemList';

export default function Personality() {
  return (
    <Section icon="/images/ic_person_24px.svg" title="Personality">
      <ItemList>
        <Item text="Self-motivated" />
        <Item text="Meticulous" />
        <Item text="Organized" />
        <Item text="Self-taught" />
        <Item text="Independent" />
        <Item text="Critical and analytical thinking" width="100%" />
      </ItemList>
    </Section>
  );
}
